"use client";

import ThemeToggle from "@/components/ui/ThemeToggle";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  {
    label: "Home",
    href: "#home",
  },
  {
    label: "Why FolXchange",
    href: "#why",
  },
  {
    label: "Features",
    href: "#features",
  },
  {
    label: "Contact",
    href: "#contact",
  },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const closeMenu = () => {
    setOpen(false);
  };

  return (
    <>
      <header
        className="
          fixed inset-x-0 top-0 z-50
          px-4 pt-4
          transition-all duration-500
          md:px-6 md:pt-6
        "
      >
        <nav
          className={`
            mx-auto flex h-16 max-w-6xl items-center justify-between
            rounded-2xl px-4
            transition-all duration-500
            md:h-[72px] md:px-6
            ${
              scrolled
                ? "glass shadow-[0_15px_50px_rgba(var(--shadow-color),0.10)]"
                : "bg-[var(--surface)]/70"
            }
          `}
        >
          {/* Logo */}
          <a
            href="#home"
            onClick={closeMenu}
            className="group flex items-center gap-2"
            aria-label="FolXchange home"
          >
            <span
              className="
                flex h-9 w-9 items-center justify-center
                rounded-xl
                bg-[var(--primary)]
                text-sm font-black text-white
                shadow-[0_8px_24px_rgba(var(--shadow-color),0.28)]
                transition-transform duration-300
                group-hover:scale-105
              "
            >
              F
            </span>

            <span
              className="
                text-[17px] font-extrabold
                tracking-[-0.04em]
                text-[var(--foreground)]
              "
            >
              FolXchange
            </span>
          </a>

          {/* Desktop navigation */}
          <div className="hidden items-center gap-8 md:flex">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="
                  text-sm font-medium
                  text-[var(--muted)]
                  transition-colors duration-200
                  hover:text-[var(--primary)]
                "
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden items-center gap-3 md:flex">
            <ThemeToggle />

            <a
              href="#login"
              className="
                rounded-full px-5 py-3
                text-sm font-semibold
                text-[var(--primary)]
                transition-colors
                hover:bg-[var(--primary-soft)]
              "
            >
              Login
            </a>

            <a
              href="#signup"
              className="
                rounded-full
                bg-[var(--primary)]
                px-5 py-3
                text-sm font-semibold
                text-white
                shadow-[0_10px_30px_rgba(var(--shadow-color),0.22)]
                transition-all duration-300
                hover:-translate-y-0.5
                hover:bg-[var(--primary-hover)]
              "
            >
              Get started
            </a>
          </div>

          {/* Mobile controls */}
          <div className="flex gap-2.5 md:hidden">
            <ThemeToggle />

            <button
              type="button"
              onClick={() => setOpen((value) => !value)}
              className="
                flex h-11 w-11 items-center justify-center
                rounded-xl
                text-[var(--foreground)]
                transition-colors
                hover:bg-[var(--surface-muted)]
              "
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
            >
              {open ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile menu */}
      <div
        className={`
          fixed inset-0 z-40
          bg-[var(--background)]
          transition-all duration-500
          md:hidden
          ${
            open
              ? "pointer-events-auto opacity-100"
              : "pointer-events-none opacity-0"
          }
        `}
      >
        <div className="flex min-h-full flex-col px-6 pb-8 pt-28">
          <div className="flex flex-1 flex-col justify-center gap-3">
            {links.map((link, index) => (
              <a
                key={link.href}
                href={link.href}
                onClick={closeMenu}
                className={`
                  border-b border-[var(--border)]
                  py-5
                  text-4xl font-bold
                  tracking-[-0.05em]
                  text-[var(--foreground)]
                  transition-all duration-500
                  ${
                    open
                      ? "translate-x-0 opacity-100"
                      : "translate-x-8 opacity-0"
                  }
                `}
                style={{
                  transitionDelay: `${index * 60}ms`,
                }}
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="space-y-3">
            <a
              href="#login"
              onClick={closeMenu}
              className="
                flex h-14 items-center justify-center
                rounded-2xl
                border border-[var(--primary)]
                font-semibold
                text-[var(--primary)]
                transition-colors
                hover:bg-[var(--primary-soft)]
              "
            >
              Login
            </a>

            <a
              href="#signup"
              onClick={closeMenu}
              className="
                flex h-14 items-center justify-center
                rounded-2xl
                bg-[var(--primary)]
                font-semibold
                text-white
                shadow-[0_15px_40px_rgba(var(--shadow-color),0.25)]
                transition-all duration-300
                hover:bg-[var(--primary-hover)]
              "
            >
              Get started
            </a>
          </div>
        </div>
      </div>
    </>
  );
}