"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Yatra_One, Poppins } from "next/font/google";
import { motion, AnimatePresence } from "framer-motion";
import { Flame, Menu, X, ShoppingBag, Phone, Compass } from "lucide-react";

const display = Yatra_One({ subsets: ["latin"], weight: "400" });
const body = Poppins({ subsets: ["latin"], weight: ["500", "600", "700"] });

/* ---------- EDIT HERE ---------- */
const PHONE_TEL = "+918168585528";
const LINKS = [
  { href: "/shop", label: "Shop", icon: ShoppingBag },
  { href: "/contact", label: "Contact", icon: Phone },
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // darker bar once the page is scrolled
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // close the mobile menu when the route changes
  useEffect(() => setOpen(false), [pathname]);

  const isActive = (href) => pathname === href || pathname?.startsWith(href + "/");

  return (
    <header
      className={`${body.className} sticky top-0 z-50 border-b transition-colors duration-300 ${
        scrolled || open
          ? "border-amber-300/40 bg-[#1a0530]/90 shadow-[0_8px_30px_rgba(0,0,0,0.5)]"
          : "border-amber-300/20 bg-[#1a0530]/60"
      } backdrop-blur-md`}
    >
      <nav
        className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6"
        aria-label="Main"
      >
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-2 rounded-full focus:outline-none focus-visible:ring-4 focus-visible:ring-amber-200"
        >
          <motion.span
            animate={{ rotate: [-8, 8, -8], scale: [1, 1.12, 1] }}
            transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
            className="grid h-9 w-9 place-items-center rounded-full bg-gradient-to-br from-amber-400 via-orange-500 to-pink-500 text-[#2a0a3d] shadow-[0_0_18px_rgba(255,150,40,0.7)]"
          >
            <Flame size={20} />
          </motion.span>
          <span
            className={`${display.className} bg-gradient-to-r from-amber-200 via-orange-400 to-pink-500 bg-clip-text text-2xl leading-none text-transparent sm:text-3xl`}
          >
            Keshav Fireworks
          </span>
        </Link>

        {/* Desktop links */}
        <div className="hidden items-center gap-2 md:flex">
          {LINKS.map(({ href, label }) => {
            const active = isActive(href);
            return (
              <Link
                key={href}
                href={href}
                aria-current={active ? "page" : undefined}
                className={`relative rounded-full px-5 py-2 text-base font-semibold transition focus:outline-none focus-visible:ring-4 focus-visible:ring-amber-200 ${
                  active ? "text-[#2a0a3d]" : "text-amber-100 hover:bg-amber-300/15"
                }`}
              >
                {active && (
                  <motion.span
                    layoutId="nav-pill"
                    className="absolute inset-0 -z-10 rounded-full bg-gradient-to-r from-amber-400 via-orange-500 to-pink-500 shadow-[0_0_20px_rgba(255,150,40,0.6)]"
                    transition={{ type: "spring", stiffness: 350, damping: 30 }}
                  />
                )}
                {label}
              </Link>
            );
          })}

          <a
            href={`tel:${PHONE_TEL}`}
            className="ml-2 inline-flex items-center gap-2 rounded-full border-2 border-amber-300 bg-black/40 px-4 py-1.5 text-sm font-bold text-amber-100 transition hover:bg-amber-300/20 focus:outline-none focus-visible:ring-4 focus-visible:ring-amber-200"
          >
            <Phone size={16} /> Call now
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-menu"
          className="grid h-10 w-10 place-items-center rounded-full border border-amber-300/60 bg-black/40 text-amber-200 transition hover:bg-amber-300/20 focus:outline-none focus-visible:ring-4 focus-visible:ring-amber-200 md:hidden"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="overflow-hidden md:hidden"
          >
            <div className="flex flex-col gap-3 px-4 pb-5 pt-2">
              {LINKS.map(({ href, label, icon: Icon }) => {
                const active = isActive(href);
                return (
                  <Link
                    key={href}
                    href={href}
                    aria-current={active ? "page" : undefined}
                    className={`flex items-center gap-3 rounded-2xl px-5 py-3.5 text-lg font-bold transition focus:outline-none focus-visible:ring-4 focus-visible:ring-amber-200 ${
                      active
                        ? "bg-gradient-to-r from-amber-400 via-orange-500 to-pink-500 text-[#2a0a3d]"
                        : "border border-amber-300/40 bg-black/40 text-amber-100 hover:bg-amber-300/15"
                    }`}
                  >
                    <Icon size={20} /> {label}
                  </Link>
                );
              })}

              <a
                href={`tel:${PHONE_TEL}`}
                className="mt-1 flex items-center justify-center gap-2 rounded-full border-2 border-amber-300 px-5 py-3 text-base font-bold text-amber-100 transition hover:bg-amber-300/20"
              >
                <Compass size={18} /> Call to order
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}