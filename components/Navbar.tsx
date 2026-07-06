'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useRef, useEffect, useCallback, useSyncExternalStore } from 'react';
import { usePathname } from 'next/navigation';
import { ChevronDown, Menu, X } from 'lucide-react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { navigationItems } from '@/config/navigation';

gsap.registerPlugin(useGSAP);

function useReducedMotion() {
  const subscribe = useCallback((callback: () => void) => {
    if (typeof window === 'undefined') return () => {};
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    mediaQuery.addEventListener('change', callback);
    return () => mediaQuery.removeEventListener('change', callback);
  }, []);

  const getSnapshot = useCallback(() => {
    if (typeof window === 'undefined') return false;
    return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  }, []);

  const getServerSnapshot = useCallback(() => false, []);

  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
}

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [openDesktopDropdown, setOpenDesktopDropdown] = useState<string | null>(null);
  const [openMobileSection, setOpenMobileSection] = useState<string | null>(null);
  const [isVisible, setIsVisible] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const lastScrollY = useRef(0);
  const prefersReducedMotion = useReducedMotion();
  const pathname = usePathname();

  const navRef = useRef<HTMLElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);
  const desktopLinksRef = useRef<HTMLDivElement>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const mobileTimelineRef = useRef<gsap.core.Timeline | null>(null);
  const desktopDropdownCloseTimeoutRef = useRef<number | null>(null);

  const isActiveLink = (href?: string) => {
    if (!href) return false;
    if (href === '/') return pathname === '/';
    return pathname.startsWith(href);
  };

  const isDropdownActive = (children?: Array<{ href: string }>) => {
    if (!children) return false;
    return children.some((child) => isActiveLink(child.href));
  };

  const clearDesktopDropdownCloseTimeout = useCallback(() => {
    if (desktopDropdownCloseTimeoutRef.current !== null) {
      window.clearTimeout(desktopDropdownCloseTimeoutRef.current);
      desktopDropdownCloseTimeoutRef.current = null;
    }
  }, []);

  const openDesktopDropdownMenu = useCallback(
    (name: string) => {
      clearDesktopDropdownCloseTimeout();
      setOpenDesktopDropdown(name);
    },
    [clearDesktopDropdownCloseTimeout]
  );

  const scheduleDesktopDropdownClose = useCallback(() => {
    clearDesktopDropdownCloseTimeout();
    desktopDropdownCloseTimeoutRef.current = window.setTimeout(() => {
      setOpenDesktopDropdown(null);
    }, 140);
  }, [clearDesktopDropdownCloseTimeout]);

  useGSAP(
    () => {
      if (prefersReducedMotion || typeof window === 'undefined') return;

      const ctx = gsap.context(() => {
        const tl = gsap.timeline({ defaults: { ease: 'power2.out' } });

        tl.fromTo(navRef.current, { opacity: 0, y: -10 }, { opacity: 1, y: 0, duration: 0.45 });
        tl.fromTo(logoRef.current, { opacity: 0, y: -6 }, { opacity: 1, y: 0, duration: 0.35 }, '-=0.25');

        const desktopLinks = desktopLinksRef.current?.querySelectorAll('[data-nav-item="desktop"]');
        if (desktopLinks) {
          tl.fromTo(
            desktopLinks,
            { opacity: 0, y: -6 },
            { opacity: 1, y: 0, duration: 0.25, stagger: 0.04 },
            '-=0.2'
          );
        }
      }, navRef);

      return () => ctx.revert();
    },
    { dependencies: [prefersReducedMotion], scope: navRef }
  );

  const animateMobileMenu = useCallback(
    (open: boolean) => {
      if (prefersReducedMotion || !mobileMenuRef.current) return;

      if (mobileTimelineRef.current) {
        mobileTimelineRef.current.kill();
      }

      const tl = gsap.timeline({ defaults: { ease: 'power2.inOut' } });
      mobileTimelineRef.current = tl;

      if (open) {
        tl.set(mobileMenuRef.current, { display: 'block', overflow: 'hidden' });
        tl.fromTo(
          mobileMenuRef.current,
          { height: 0, opacity: 0, y: -6 },
          { height: 'auto', opacity: 1, y: 0, duration: 0.28 }
        );

        const mobileLinks = mobileMenuRef.current.querySelectorAll('[data-mobile-nav-item]');
        if (mobileLinks.length > 0) {
          tl.fromTo(
            mobileLinks,
            { opacity: 0, x: -8 },
            { opacity: 1, x: 0, duration: 0.18, stagger: 0.035 },
            '-=0.08'
          );
        }
      } else {
        const mobileLinks = mobileMenuRef.current.querySelectorAll('[data-mobile-nav-item]');
        if (mobileLinks.length > 0) {
          tl.to(mobileLinks, { opacity: 0, x: -8, duration: 0.12, stagger: 0.015 });
        }
        tl.to(mobileMenuRef.current, { height: 0, opacity: 0, y: -6, duration: 0.22 });
        tl.set(mobileMenuRef.current, { display: 'none', overflow: 'hidden' });
      }
    },
    [prefersReducedMotion]
  );

  useEffect(() => {
    animateMobileMenu(isOpen);
  }, [isOpen, animateMobileMenu]);

  useEffect(() => {
    const timelineRef = mobileTimelineRef;
    return () => {
      if (timelineRef.current) {
        timelineRef.current.kill();
      }
      clearDesktopDropdownCloseTimeout();
    };
  }, [clearDesktopDropdownCloseTimeout]);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const documentHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = documentHeight > 0 ? (currentScrollY / documentHeight) * 100 : 0;

      setScrollProgress(progress);
      setIsScrolled(currentScrollY > 16);
      setIsVisible(!(currentScrollY > lastScrollY.current && currentScrollY > 90));

      lastScrollY.current = currentScrollY;
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <div
        className="fixed left-0 right-0 top-0 z-[60] h-1 bg-white/30"
        style={{ opacity: scrollProgress > 0 ? 1 : 0, transition: 'opacity 0.2s' }}
      >
        <div
          className="h-full bg-gradient-to-r from-red-700 via-red-500 to-amber-400 transition-all duration-100 ease-out"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      <nav
        ref={navRef}
        className={`fixed left-0 right-0 z-50 px-3 will-change-transform transition-all duration-300 ease-in-out sm:px-5 ${
          isVisible ? 'top-3 opacity-100 sm:top-4' : '-top-28 opacity-0'
        }`}
        style={{ opacity: prefersReducedMotion ? 1 : undefined }}
      >
        <div
          className={`relative mx-auto max-w-7xl overflow-visible rounded-2xl border px-3 shadow-lg backdrop-blur-2xl transition-all duration-300 sm:px-4 ${
            isScrolled
              ? 'border-white/30 bg-white/80 shadow-red-950/10'
              : 'border-white/40 bg-white/70 shadow-red-950/5'
          }`}
        >
          <div className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-r from-white/80 via-white/60 to-red-50/75" />
          <div className="pointer-events-none absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-white to-transparent" />

          <div
            className={`relative flex items-center justify-between transition-all duration-300 ${
              isScrolled ? 'h-14' : 'h-16'
            }`}
          >
            <div ref={logoRef} className="shrink-0 will-change-transform">
              <Link href="/" className="group flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center overflow-hidden rounded-xl bg-white shadow-sm ring-1 ring-red-100 transition-transform duration-200 group-hover:scale-105">
                  <Image
                    src="/LOGO.png"
                    alt="SCC Biñan Logo"
                    width={40}
                    height={40}
                    className="object-contain"
                  />
                </div>
                <div className="hidden min-w-0 sm:block">
                  <span className="block text-sm font-extrabold leading-tight text-neutral-900 lg:text-base">
                    SCC Biñan
                  </span>
                  <span className="block text-xs font-semibold leading-tight text-red-700">
                    PAASCU 2026
                  </span>
                </div>
              </Link>
            </div>

            <div ref={desktopLinksRef} className="hidden md:flex md:items-center md:gap-1">
              {navigationItems.map((item) => {
                const hasChildren = Boolean(item.children?.length);
                const isTopLevelActive = hasChildren
                  ? isDropdownActive(item.children)
                  : isActiveLink(item.href);
                const isOpenDropdown = openDesktopDropdown === item.name;

                if (hasChildren) {
                  return (
                    <div
                      key={item.name}
                      className="relative"
                      onMouseEnter={() => openDesktopDropdownMenu(item.name)}
                      onMouseLeave={scheduleDesktopDropdownClose}
                    >
                      <button
                        type="button"
                        className={`group flex items-center gap-1 rounded-full px-3 py-2 text-sm font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-600 focus-visible:ring-offset-2 focus-visible:ring-offset-white ${
                          isTopLevelActive
                            ? 'bg-red-700 text-white shadow-sm'
                            : 'text-neutral-700 hover:bg-white/80 hover:text-red-700'
                        }`}
                        onClick={() => openDesktopDropdownMenu(item.name)}
                        aria-expanded={isOpenDropdown}
                        aria-haspopup="menu"
                        data-nav-item="desktop"
                      >
                        <span className="max-w-[170px] truncate">{item.name}</span>
                        <ChevronDown className={`h-4 w-4 transition-transform ${isOpenDropdown ? 'rotate-180' : ''}`} />
                      </button>

                      {isOpenDropdown && (
                        <div
                          className="absolute left-0 top-full mt-3 min-w-[310px] rounded-2xl border border-white/60 bg-white/90 p-2 shadow-2xl shadow-red-950/15 backdrop-blur-2xl"
                          role="menu"
                          onMouseEnter={() => openDesktopDropdownMenu(item.name)}
                          onMouseLeave={scheduleDesktopDropdownClose}
                        >
                          <div className="pointer-events-none absolute -top-2 left-8 h-4 w-4 rotate-45 border-l border-t border-white/60 bg-white/90" />
                          {item.children?.map((child) => (
                            <Link
                              key={child.name}
                              href={child.href}
                              className={`group relative block rounded-xl px-3 py-3 transition-all duration-200 ${
                                isActiveLink(child.href)
                                  ? 'bg-red-50 text-red-800'
                                  : 'text-neutral-700 hover:bg-neutral-50 hover:text-red-700'
                              }`}
                              role="menuitem"
                              aria-current={isActiveLink(child.href) ? 'page' : undefined}
                              onClick={() => setOpenDesktopDropdown(null)}
                              data-nav-item="desktop"
                            >
                              <span className="block text-sm font-bold">{child.name}</span>
                              {child.description && (
                                <span className="mt-1 block text-xs leading-relaxed text-neutral-500 group-hover:text-neutral-600">
                                  {child.description}
                                </span>
                              )}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  );
                }

                return (
                  <Link
                    key={item.name}
                    href={item.href ?? '/'}
                    className={`relative rounded-full px-3 py-2 text-sm font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-600 focus-visible:ring-offset-2 focus-visible:ring-offset-white ${
                      isTopLevelActive
                        ? 'bg-red-700 text-white shadow-sm'
                        : 'text-neutral-700 hover:bg-white/80 hover:text-red-700'
                    }`}
                    aria-current={isTopLevelActive ? 'page' : undefined}
                    data-nav-item="desktop"
                  >
                    <span className="block max-w-[190px] truncate">{item.name}</span>
                  </Link>
                );
              })}
            </div>

            <div className="md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-white/80 text-neutral-800 shadow-sm ring-1 ring-neutral-200 transition-colors hover:text-red-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-red-600"
                aria-expanded={isOpen}
                aria-controls="mobile-menu"
              >
                <span className="sr-only">{isOpen ? 'Close main menu' : 'Open main menu'}</span>
                {isOpen ? (
                  <X className="block h-6 w-6" aria-hidden="true" />
                ) : (
                  <Menu className="block h-6 w-6" aria-hidden="true" />
                )}
              </button>
            </div>
          </div>
        </div>

        <div
          id="mobile-menu"
          ref={mobileMenuRef}
          className="md:hidden will-change-[height,opacity]"
          style={{ display: 'none', height: 0, opacity: 0 }}
          aria-hidden={!isOpen}
        >
          <div className="mx-auto mt-3 max-w-7xl space-y-2 rounded-2xl border border-white/60 bg-white/90 p-2 shadow-2xl shadow-red-950/15 backdrop-blur-2xl">
            {navigationItems.map((item) => {
              const hasChildren = Boolean(item.children?.length);
              const isTopLevelActive = hasChildren
                ? isDropdownActive(item.children)
                : isActiveLink(item.href);
              const isMobileSectionOpen = openMobileSection === item.name;

              if (hasChildren) {
                return (
                  <div key={item.name} className="overflow-hidden rounded-xl border border-neutral-100 bg-white/70">
                    <button
                      type="button"
                      className={`flex w-full items-center justify-between px-3 py-3 text-left text-base font-bold transition-colors duration-200 ${
                        isTopLevelActive
                          ? 'bg-red-50 text-red-800'
                          : 'text-neutral-800 hover:bg-neutral-50 hover:text-red-700'
                      }`}
                      onClick={() =>
                        setOpenMobileSection((current) => (current === item.name ? null : item.name))
                      }
                      aria-expanded={isMobileSectionOpen}
                      data-mobile-nav-item
                    >
                      <span>{item.name}</span>
                      <ChevronDown className={`h-4 w-4 transition-transform ${isMobileSectionOpen ? 'rotate-180' : ''}`} />
                    </button>
                    {isMobileSectionOpen && (
                      <div className="border-t border-neutral-100 bg-white/80 p-1">
                        {item.children?.map((child) => (
                          <Link
                            key={child.name}
                            href={child.href}
                            className={`block rounded-lg px-3 py-2.5 transition-colors duration-200 ${
                              isActiveLink(child.href)
                                ? 'bg-red-50 font-semibold text-red-800'
                                : 'text-neutral-700 hover:bg-neutral-50 hover:text-red-700'
                            }`}
                            onClick={() => setIsOpen(false)}
                            aria-current={isActiveLink(child.href) ? 'page' : undefined}
                            data-mobile-nav-item
                          >
                            <span className="block text-sm font-bold">{child.name}</span>
                            {child.description && (
                              <span className="mt-0.5 block text-xs leading-relaxed text-neutral-500">
                                {child.description}
                              </span>
                            )}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <Link
                  key={item.name}
                  href={item.href ?? '/'}
                  className={`block rounded-xl px-3 py-3 text-base font-bold transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-600 focus-visible:ring-offset-2 ${
                    isTopLevelActive
                      ? 'bg-red-700 text-white'
                      : 'text-neutral-800 hover:bg-neutral-50 hover:text-red-700'
                  }`}
                  onClick={() => setIsOpen(false)}
                  aria-current={isTopLevelActive ? 'page' : undefined}
                  data-mobile-nav-item
                >
                  {item.name}
                </Link>
              );
            })}
          </div>
        </div>
      </nav>
    </>
  );
}
