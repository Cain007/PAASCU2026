'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useRef, useEffect, useCallback, useSyncExternalStore } from 'react';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
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
  const mobileLinksRef = useRef<(HTMLAnchorElement | null)[]>([]);
  const mobileTimelineRef = useRef<gsap.core.Timeline | null>(null);

  const isActiveLink = (href: string) => {
    if (href === '/') {
      return pathname === '/';
    }
    return pathname.startsWith(href);
  };

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
      const mobileLinks = mobileLinksRef.current.filter(Boolean);
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
      const mobileLinks = mobileLinksRef.current.filter(Boolean);
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
    };
  }, []);

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
        className="fixed top-0 left-0 right-0 z-[60] h-1 bg-gray-200/50"
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
            {navigationItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`relative px-3 py-2 text-sm font-medium rounded-lg transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2 ${
                  isActiveLink(item.href)
                    ? 'text-primary-600 bg-primary-50'
                    : 'text-neutral-700 hover:text-primary-600 hover:bg-primary-50'
                }`}
                aria-current={isActiveLink(item.href) ? 'page' : undefined}
                onMouseEnter={(e) => handleLinkHover(e, true)}
                onMouseLeave={(e) => handleLinkHover(e, false)}
              >
                {item.name}
                {/* Animated underline indicator */}
                <span 
                  className="link-indicator absolute bottom-0 left-3 right-3 h-0.5 bg-primary-500 origin-left"
                  style={{ transform: 'scaleX(0)' }}
                />
              </Link>
            ))}
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
          {navigationItems.map((item, index) => (
            <Link
              key={item.name}
              ref={(el) => { mobileLinksRef.current[index] = el; }}
              href={item.href}
              className={`block px-3 py-2 text-base font-medium rounded-lg transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2 ${
                isActiveLink(item.href)
                  ? 'text-primary-600 bg-primary-50'
                  : 'text-neutral-700 hover:text-primary-600 hover:bg-primary-50'
              }`}
              onClick={() => setIsOpen(false)}
              aria-current={isActiveLink(item.href) ? 'page' : undefined}
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
    </>
  );
}
