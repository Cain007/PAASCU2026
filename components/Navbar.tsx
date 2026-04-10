'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useRef, useEffect, useCallback, useSyncExternalStore } from 'react';
import { usePathname } from 'next/navigation';
import { ChevronDown, Menu, X } from 'lucide-react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { navigationItems } from '@/config/navigation';

// Register GSAP plugin
gsap.registerPlugin(useGSAP);

// Hook for reduced motion preference
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

function ParticleField() {
  const ref = useRef<THREE.Points>(null);
  
  const [sphere] = useState(() => {
    const positions = new Float32Array(1500);
    for (let i = 0; i < 500; i++) {
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      const radius = 1.2;
      
      positions[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      positions[i * 3 + 2] = radius * Math.cos(phi);
    }
    return positions;
  });

  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta / 10;
      ref.current.rotation.y -= delta / 15;
    }
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled={false}>
        <PointMaterial
          transparent
          color="#dc2626"
          size={0.015}
          sizeAttenuation={true}
          depthWrite={false}
          opacity={0.8}
        />
      </Points>
    </group>
  );
}

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [openDesktopDropdown, setOpenDesktopDropdown] = useState<string | null>(null);
  const [openMobileSection, setOpenMobileSection] = useState<string | null>(null);
  const [isVisible, setIsVisible] = useState(true);
  const [scrollProgress, setScrollProgress] = useState(0);
  const lastScrollY = useRef(0);
  const prefersReducedMotion = useReducedMotion();
  const pathname = usePathname();
  
  // Refs for GSAP animations
  const navRef = useRef<HTMLElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);
  const desktopLinksRef = useRef<HTMLDivElement>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const mobileTimelineRef = useRef<gsap.core.Timeline | null>(null);
  const desktopDropdownCloseTimeoutRef = useRef<number | null>(null);

  const isActiveLink = (href?: string) => {
    if (!href) {
      return false;
    }
    if (href === '/') {
      return pathname === '/';
    }
    return pathname.startsWith(href);
  };

  const isDropdownActive = (children?: Array<{ href: string }>) => {
    if (!children) {
      return false;
    }

    return children.some((child) => isActiveLink(child.href));
  };

  const clearDesktopDropdownCloseTimeout = useCallback(() => {
    if (desktopDropdownCloseTimeoutRef.current !== null) {
      window.clearTimeout(desktopDropdownCloseTimeoutRef.current);
      desktopDropdownCloseTimeoutRef.current = null;
    }
  }, []);

  const openDesktopDropdownMenu = useCallback((name: string) => {
    clearDesktopDropdownCloseTimeout();
    setOpenDesktopDropdown(name);
  }, [clearDesktopDropdownCloseTimeout]);

  const scheduleDesktopDropdownClose = useCallback(() => {
    clearDesktopDropdownCloseTimeout();
    desktopDropdownCloseTimeoutRef.current = window.setTimeout(() => {
      setOpenDesktopDropdown(null);
    }, 140);
  }, [clearDesktopDropdownCloseTimeout]);

  // Entrance animations
  useGSAP(() => {
    if (prefersReducedMotion || typeof window === 'undefined') return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power2.out' } });

      // Navbar container entrance
      tl.fromTo(
        navRef.current,
        { opacity: 0, y: -8 },
        { opacity: 1, y: 0, duration: 0.5 }
      );

      // Logo and titles
      tl.fromTo(
        logoRef.current,
        { opacity: 0, y: -6 },
        { opacity: 1, y: 0, duration: 0.4 },
        '-=0.3'
      );

      // Desktop nav links staggered
      const desktopLinks = desktopLinksRef.current?.querySelectorAll('a');
      if (desktopLinks) {
        tl.fromTo(
          desktopLinks,
          { opacity: 0, y: -6 },
          { opacity: 1, y: 0, duration: 0.3, stagger: 0.05 },
          '-=0.2'
        );
      }
    }, navRef);

    return () => ctx.revert();
  }, { dependencies: [prefersReducedMotion], scope: navRef });

  // Mobile menu animation
  const animateMobileMenu = useCallback((open: boolean) => {
    if (prefersReducedMotion || !mobileMenuRef.current) return;

    // Kill existing timeline
    if (mobileTimelineRef.current) {
      mobileTimelineRef.current.kill();
    }

    const tl = gsap.timeline({
      defaults: { ease: 'power2.inOut' }
    });
    mobileTimelineRef.current = tl;

    if (open) {
      // Opening animation
      tl.set(mobileMenuRef.current, { display: 'block', overflow: 'hidden' });
      tl.fromTo(
        mobileMenuRef.current,
        { height: 0, opacity: 0 },
        { height: 'auto', opacity: 1, duration: 0.3 }
      );
      
      // Stagger mobile links
      const mobileLinks = mobileMenuRef.current.querySelectorAll('[data-mobile-nav-item]');
      if (mobileLinks.length > 0) {
        tl.fromTo(
          mobileLinks,
          { opacity: 0, x: -10 },
          { opacity: 1, x: 0, duration: 0.2, stagger: 0.04 },
          '-=0.1'
        );
      }
    } else {
      // Closing animation
      const mobileLinks = mobileMenuRef.current.querySelectorAll('[data-mobile-nav-item]');
      if (mobileLinks.length > 0) {
        tl.to(mobileLinks, {
          opacity: 0,
          x: -10,
          duration: 0.15,
          stagger: 0.02
        });
      }
      tl.to(mobileMenuRef.current, {
        height: 0,
        opacity: 0,
        duration: 0.25
      });
      tl.set(mobileMenuRef.current, { display: 'none', overflow: 'hidden' });
    }
  }, [prefersReducedMotion]);

  // Trigger mobile menu animation on state change
  useEffect(() => {
    animateMobileMenu(isOpen);
  }, [isOpen, animateMobileMenu]);

  // Cleanup on unmount
  useEffect(() => {
    const timelineRef = mobileTimelineRef;
    return () => {
      if (timelineRef.current) {
        timelineRef.current.kill();
      }
      clearDesktopDropdownCloseTimeout();
    };
  }, [clearDesktopDropdownCloseTimeout]);

  // Scroll handling - hide navbar on scroll down, show on scroll up + progress bar
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const documentHeight = document.documentElement.scrollHeight - window.innerHeight;
      
      // Calculate scroll progress (0 to 100)
      const progress = documentHeight > 0 ? (currentScrollY / documentHeight) * 100 : 0;
      setScrollProgress(progress);
      
      // Hide/show navbar based on scroll direction
      if (currentScrollY > lastScrollY.current && currentScrollY > 80) {
        // Scrolling down and past threshold
        setIsVisible(false);
      } else {
        // Scrolling up
        setIsVisible(true);
      }
      
      lastScrollY.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Hover animation handlers
  const handleLinkHover = (e: React.MouseEvent<HTMLAnchorElement>, entering: boolean) => {
    if (prefersReducedMotion) return;
    
    const indicator = e.currentTarget.querySelector('.link-indicator');
    if (indicator) {
      gsap.to(indicator, {
        scaleX: entering ? 1 : 0,
        duration: 0.2,
        ease: 'power2.out'
      });
    }
  };

  return (
    <>
      {/* Scroll Progress Bar */}
      <div 
        className="fixed top-0 left-0 right-0 z-60 h-1 bg-gray-200/50"
        style={{ opacity: scrollProgress > 0 ? 1 : 0, transition: 'opacity 0.2s' }}
      >
        <div 
          className="h-full bg-red-600 transition-all duration-100 ease-out"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      <nav 
        ref={navRef}
        className={`fixed left-0 right-0 z-50 border-b border-neutral-200 shadow-sm will-change-transform transition-all duration-300 ease-in-out ${
          isVisible ? 'top-0 opacity-100' : '-top-24 opacity-0'
        }`}
        style={{ opacity: prefersReducedMotion ? 1 : undefined }}
    >
      {/* Three.js Background */}
      <div className="absolute inset-0 bg-white/90 backdrop-blur-sm">
        <div className="absolute inset-0 opacity-60">
          <Canvas camera={{ position: [0, 0, 1] }}>
            <ParticleField />
          </Canvas>
        </div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo/Brand */}
          <div ref={logoRef} className="shrink-0 will-change-transform">
            <Link href="/" className="flex items-center space-x-3">
              <div className="flex items-center justify-center w-10 h-10 rounded-lg overflow-hidden">
                <Image
                  src="/LOGO.png"
                  alt="SCC Biñan Logo"
                  width={40}
                  height={40}
                  className="object-contain"
                />
              </div>
              <div className="hidden sm:block">
                <span className="text-xl font-bold text-neutral-800">SCC Biñan</span>
                <span className="block text-xs text-neutral-600">PAASCU 2026</span>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div ref={desktopLinksRef} className="hidden md:flex md:items-center md:space-x-1">
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
                      className={`flex items-center gap-1 px-3 py-2 text-sm font-medium rounded-lg transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2 ${
                        isTopLevelActive
                          ? 'text-primary-600 bg-primary-50'
                          : 'text-neutral-700 hover:text-primary-600 hover:bg-primary-50'
                      }`}
                      onClick={() => openDesktopDropdownMenu(item.name)}
                      aria-expanded={isOpenDropdown}
                      aria-haspopup="menu"
                      data-nav-item="desktop"
                    >
                      <span>{item.name}</span>
                      <ChevronDown className={`h-4 w-4 transition-transform ${isOpenDropdown ? 'rotate-180' : ''}`} />
                    </button>

                    {isOpenDropdown && (
                      <div
                        className="absolute left-0 top-full min-w-[260px] border border-neutral-200 bg-white rounded-lg shadow-md p-1"
                        role="menu"
                        onMouseEnter={() => openDesktopDropdownMenu(item.name)}
                        onMouseLeave={scheduleDesktopDropdownClose}
                      >
                        {item.children?.map((child) => (
                          <Link
                            key={child.name}
                            href={child.href}
                            className={`block px-3 py-2 text-sm rounded-md transition-colors duration-200 ${
                              isActiveLink(child.href)
                                ? 'text-primary-600 bg-primary-50'
                                : 'text-neutral-700 hover:text-primary-600 hover:bg-primary-50'
                            }`}
                            role="menuitem"
                            aria-current={isActiveLink(child.href) ? 'page' : undefined}
                            onMouseEnter={(e) => handleLinkHover(e, true)}
                            onMouseLeave={(e) => handleLinkHover(e, false)}
                            data-nav-item="desktop"
                          >
                            {child.name}
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
                  className={`relative px-3 py-2 text-sm font-medium rounded-lg transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2 ${
                    isTopLevelActive
                      ? 'text-primary-600 bg-primary-50'
                      : 'text-neutral-700 hover:text-primary-600 hover:bg-primary-50'
                  }`}
                  aria-current={isTopLevelActive ? 'page' : undefined}
                  onMouseEnter={(e) => handleLinkHover(e, true)}
                  onMouseLeave={(e) => handleLinkHover(e, false)}
                  data-nav-item="desktop"
                >
                  {item.name}
                  <span
                    className="link-indicator absolute bottom-0 left-3 right-3 h-0.5 bg-primary-500 origin-left"
                    style={{ transform: 'scaleX(0)' }}
                  />
                </Link>
              );
            })}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-lg text-neutral-700 hover:text-primary-600 hover:bg-primary-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-primary-500 transition-colors"
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

      {/* Mobile menu */}
      <div
        id="mobile-menu"
        ref={mobileMenuRef}
        className="md:hidden will-change-[height,opacity]"
        style={{ display: 'none', height: 0, opacity: 0 }}
        aria-hidden={!isOpen}
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t border-neutral-100">
          {navigationItems.map((item) => {
            const hasChildren = Boolean(item.children?.length);
            const isTopLevelActive = hasChildren
              ? isDropdownActive(item.children)
              : isActiveLink(item.href);
            const isMobileSectionOpen = openMobileSection === item.name;

            if (hasChildren) {
              return (
                <div key={item.name} className="border border-neutral-100 rounded-lg overflow-hidden">
                  <button
                    type="button"
                    className={`w-full flex items-center justify-between px-3 py-2 text-base font-medium transition-colors duration-200 ${
                      isTopLevelActive
                        ? 'text-primary-600 bg-primary-50'
                        : 'text-neutral-700 hover:text-primary-600 hover:bg-primary-50'
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
                    <div className="bg-white border-t border-neutral-100">
                      {item.children?.map((child) => (
                        <Link
                          key={child.name}
                          href={child.href}
                          className={`block px-4 py-2 text-base transition-colors duration-200 ${
                            isActiveLink(child.href)
                              ? 'text-primary-600 bg-primary-50 font-medium'
                              : 'text-neutral-700 hover:text-primary-600 hover:bg-primary-50'
                          }`}
                          onClick={() => setIsOpen(false)}
                          aria-current={isActiveLink(child.href) ? 'page' : undefined}
                          data-mobile-nav-item
                        >
                          {child.name}
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
                className={`block px-3 py-2 text-base font-medium rounded-lg transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2 ${
                  isTopLevelActive
                    ? 'text-primary-600 bg-primary-50'
                    : 'text-neutral-700 hover:text-primary-600 hover:bg-primary-50'
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
