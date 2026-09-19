"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function useFolXchangeMotion() {
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = rootRef.current;

    if (!root) return;

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (reduceMotion) return;

    const context = gsap.context(() => {
      const introItems = gsap.utils.toArray<HTMLElement>(
        "[data-motion='intro']"
      );

      const dashboard = root.querySelector<HTMLElement>(
        "[data-motion='dashboard']"
      );

      const floatingCards = gsap.utils.toArray<HTMLElement>(
        "[data-motion='float']"
      );

      const heroGlow = root.querySelector<HTMLElement>(
        "[data-motion='hero-glow']"
      );

      const productGlow = root.querySelector<HTMLElement>(
        "[data-motion='product-glow']"
      );

      // Hero entrance
      if (introItems.length) {
        gsap.fromTo(
          introItems,
          {
            y: 28,
            opacity: 0,
          },
          {
            y: 0,
            opacity: 1,
            duration: 0.9,
            stagger: 0.1,
            ease: "power3.out",
            clearProps: "transform,opacity",
          }
        );
      }

      // Main product dashboard reveal
      if (dashboard) {
        gsap.fromTo(
          dashboard,
          {
            y: 70,
            scale: 0.97,
            opacity: 0,
          },
          {
            y: 0,
            scale: 1,
            opacity: 1,
            duration: 1.15,
            delay: 0.2,
            ease: "power3.out",
            clearProps: "transform,opacity",
          }
        );
      }

      // Floating cards
      floatingCards.forEach((card, index) => {
        gsap.fromTo(
          card,
          {
            y: index % 2 === 0 ? 35 : 45,
            opacity: 0,
            scale: 0.96,
          },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 0.9,
            delay: 0.45 + index * 0.12,
            ease: "power3.out",
            clearProps: "transform,opacity",
          }
        );
      });

      // Subtle floating depth
      floatingCards.forEach((card, index) => {
        gsap.to(card, {
          y: index % 2 === 0 ? -10 : 10,
          duration: 3.5 + index * 0.5,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
        });
      });

      // Hero ambient movement
      if (heroGlow) {
        gsap.to(heroGlow, {
          x: 45,
          y: 25,
          scale: 1.08,
          duration: 7,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
        });
      }

      // Product ambient movement
      if (productGlow) {
        gsap.to(productGlow, {
          x: -35,
          y: 30,
          scale: 1.06,
          duration: 8,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
        });
      }

      // Scroll depth for the product visualization
      if (dashboard) {
        gsap.to(dashboard, {
          y: -45,
          ease: "none",
          scrollTrigger: {
            trigger: dashboard,
            start: "top bottom",
            end: "bottom top",
            scrub: 1.2,
          },
        });
      }

      // Floating cards move at different speeds
      floatingCards.forEach((card, index) => {
        gsap.to(card, {
          y: index % 2 === 0 ? -85 : -55,
          ease: "none",
          scrollTrigger: {
            trigger: card,
            start: "top bottom",
            end: "bottom top",
            scrub: 1.4 + index * 0.2,
          },
        });
      });

      // Product glow follows the section's scroll movement
      if (productGlow) {
        gsap.to(productGlow, {
          y: -100,
          x: 30,
          ease: "none",
          scrollTrigger: {
            trigger: productGlow,
            start: "top bottom",
            end: "bottom top",
            scrub: 1.8,
          },
        });
      }
    }, root);

    return () => {
      context.revert();
    };
  }, []);

  return rootRef;
}