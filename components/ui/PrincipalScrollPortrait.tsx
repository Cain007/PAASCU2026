'use client';

import { useRef } from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';

/**
 * Scroll-driven "storytelling" portrait for the Directress/Principal.
 *
 * - `useScroll` tracks scroll progress of the whole `<section>` relative
 *   to the viewport (0 = section entering, 1 = section scrolled past).
 * - `useTransform` maps that progress onto rotateZ / rotateY / translateY /
 *   scale using MULTIPLE keyframes (not just start→end), so the image
 *   drifts back and forth like gentle floating instead of a single sweep.
 * - `useSpring` smooths the interpolation between keyframes.
 * - The portrait column is `sticky`, staying pinned while the message
 *   text scrolls past beside it — the same technique Apple uses.
 * - Only transform + opacity are animated, so it stays on the compositor
 *   thread for smooth 60fps scroll.
 *
 * NOTE: next/image can't take framer-motion's `style` transforms directly
 * on itself reliably, so the transform is applied to a wrapping motion.div
 * and the actual <Image> sits inside it untouched.
 */
export default function PrincipalScrollPortrait({
  src = '/principal-cutout.png',
  alt = 'Directress and Principal',
}: {
  src?: string;
  alt?: string;
}) {
  const sectionRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  // Morph rotation - creates twisting effect
  const rawRotateZ = useTransform(
    scrollYProgress,
    [0, 0.15, 0.3, 0.45, 0.6, 0.75, 0.9, 1],
    [-12, -8, 4, 12, -6, 8, -4, 0]
  );
  
  // 3D tilt - perspective morph
  const rawRotateY = useTransform(
    scrollYProgress,
    [0, 0.2, 0.4, 0.6, 0.8, 1],
    [-15, 10, -12, 15, -8, 0]
  );
  
  // 3D pitch - creates folding effect
  const rawRotateX = useTransform(
    scrollYProgress,
    [0, 0.25, 0.5, 0.75, 1],
    [8, -6, 12, -4, 0]
  );
  
  // Scale morphing - expands and contracts
  const rawScale = useTransform(
    scrollYProgress,
    [0, 0.15, 0.3, 0.5, 0.7, 0.85, 1],
    [0.85, 1.05, 0.92, 1.08, 0.95, 1.02, 1]
  );
  
  // Skew for shear effect
  const rawSkewY = useTransform(
    scrollYProgress,
    [0, 0.25, 0.5, 0.75, 1],
    [-4, 3, -2, 4, 0]
  );
  
  // Complex Y translation - serpentine motion
  const rawTranslateY = useTransform(
    scrollYProgress,
    [0, 0.15, 0.3, 0.45, 0.6, 0.75, 0.9, 1],
    [-30, 15, -20, 25, -15, 20, -10, 0]
  );
  
  // X translation - side-to-side drift
  const rawTranslateX = useTransform(
    scrollYProgress,
    [0, 0.25, 0.5, 0.75, 1],
    [-15, 12, -10, 14, 0]
  );

  const springConfig = { stiffness: 60, damping: 15, mass: 0.5 };
  const rotateZ = useSpring(rawRotateZ, springConfig);
  const rotateY = useSpring(rawRotateY, springConfig);
  const rotateX = useSpring(rawRotateX, springConfig);
  const scale = useSpring(rawScale, springConfig);
  const skewY = useSpring(rawSkewY, springConfig);
  const translateY = useSpring(rawTranslateY, springConfig);
  const translateX = useSpring(rawTranslateX, springConfig);

  const shadowScale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1.1, 0.9]);
  const shadowOpacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.3, 0.6, 0.3]);

  return (
    <div ref={sectionRef} className="relative min-h-full">
      <div className="sticky top-[12vh] flex h-[70vh] items-center justify-center">
        <div
          className="relative w-full max-w-[380px] motion-reduce:[transform:none!important]"
          style={{ aspectRatio: '3 / 4', perspective: 1200 }}
        >
          <motion.div
            className="absolute inset-0 [transform-style:preserve-3d] will-change-transform"
            style={{ rotateZ, rotateY, rotateX, translateX, translateY, scale, skewY }}
          >
            <Image
              src={src}
              alt={alt}
              fill
              className="select-none object-contain object-bottom drop-shadow-[0_20px_30px_rgba(0,0,0,0.18)]"
              draggable={false}
              priority
            />
          </motion.div>

          <motion.div
            aria-hidden
            className="absolute bottom-[2%] left-1/2 -z-10 h-[6%] w-[62%] -translate-x-1/2 rounded-full"
            style={{
              scale: shadowScale,
              opacity: shadowOpacity,
              background:
                'radial-gradient(closest-side, rgba(0,0,0,0.35), rgba(0,0,0,0) 70%)',
            }}
          />
        </div>
      </div>
    </div>
  );
}
