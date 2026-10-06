"use client";

import Link from "next/link";
import { Yatra_One, Poppins } from "next/font/google";
import { motion } from "framer-motion";
import {
  Flame,
  Phone,
  MessageCircle,
  ShoppingBag,
  Home,
  ShieldCheck,
  Sparkles,
  Droplets,
  Ruler,
  Baby,
} from "lucide-react";

const display = Yatra_One({ subsets: ["latin"], weight: "400" });
const body = Poppins({ subsets: ["latin"], weight: ["400", "500", "600", "700"] });

/* ---------- EDIT HERE ---------- */
const WHATSAPP =
  "https://wa.me/918168585528?text=Hello%20Keshav%20Fireworks%2C%20I%20want%20to%20order%20crackers";
const PHONE_TEL = "+918168585528";
const PHONE_LABEL = "+91 81685 85528";

const LINKS = [
  { href: "/", label: "Home", icon: Home },
  { href: "/shop", label: "Shop", icon: ShoppingBag },
  { href: "/contact", label: "Contact", icon: Phone },
];

const SAFETY = [
  { icon: Baby, text: "Keep children under adult watch" },
  { icon: Ruler, text: "Light from a safe distance" },
  { icon: Droplets, text: "Keep a bucket of water nearby" },
  { icon: ShieldCheck, text: "Never relight a dud cracker" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      className={`${body.className} relative mt-auto overflow-hidden border-t border-amber-300/30 bg-gradient-to-b from-[#1a0530]/90 via-[#240a3a]/95 to-black text-white backdrop-blur-md`}
    >
      {/* glowing top edge */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-amber-300 to-transparent" />
      <div className="pointer-events-none absolute -top-24 left-1/2 h-48 w-[28rem] -translate-x-1/2 rounded-full bg-orange-500/20 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 pb-28 pt-12 sm:px-6 md:pb-10">
        {/* Safety strip */}
        <div className="mb-12 rounded-3xl border border-amber-300/40 bg-black/40 p-5 sm:p-6">
          <p
            className={`${display.className} mb-4 flex items-center gap-2 text-2xl text-amber-300 sm:text-3xl`}
          >
            <Sparkles size={22} /> Celebrate safely
          </p>
          <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {SAFETY.map(({ icon: Icon, text }) => (
              <li
                key={text}
                className="flex items-center gap-3 rounded-2xl bg-white/5 px-4 py-3 text-sm font-medium text-amber-50"
              >
                <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-gradient-to-br from-amber-400 via-orange-500 to-pink-500 text-[#2a0a3d]">
                  <Icon size={18} />
                </span>
                {text}
              </li>
            ))}
          </ul>
        </div>

        <div className="grid gap-10 md:grid-cols-3">
          {/* Brand */}
          <div>
            <Link href="/" className="inline-flex items-center gap-2">
              <span className="grid h-10 w-10 place-items-center rounded-full bg-gradient-to-br from-amber-400 via-orange-500 to-pink-500 text-[#2a0a3d] shadow-[0_0_18px_rgba(255,150,40,0.7)]">
                <Flame size={22} />
              </span>
              <span
                className={`${display.className} bg-gradient-to-r from-amber-200 via-orange-400 to-pink-500 bg-clip-text text-3xl leading-none text-transparent`}
              >
                Keshav Fireworks
              </span>
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/80">
              Rockets, sky shots, fountains and bombs for the whole family. Order today and light
              up your Diwali sky.
            </p>
          </div>

          {/* Links */}
          <nav aria-label="Footer">
            <p className={`${display.className} mb-4 text-2xl text-amber-300`}>Quick links</p>
            <ul className="flex flex-col gap-2">
              {LINKS.map(({ href, label, icon: Icon }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="group inline-flex items-center gap-3 rounded-full py-1.5 pr-4 text-base font-semibold text-amber-100 transition hover:text-amber-300 focus:outline-none focus-visible:ring-4 focus-visible:ring-amber-200"
                  >
                    <span className="grid h-8 w-8 place-items-center rounded-full border border-amber-300/50 bg-black/40 transition group-hover:bg-amber-300/20">
                      <Icon size={15} />
                    </span>
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Order */}
          <div>
            <p className={`${display.className} mb-4 text-2xl text-amber-300`}>Order now</p>
            <p className="mb-4 text-sm text-white/80">
              Call or message us to place your order.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row md:flex-col lg:flex-row">
              <a
                href={`tel:${PHONE_TEL}`}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-amber-400 via-orange-500 to-pink-500 px-5 py-2.5 text-sm font-extrabold text-[#2a0a3d] shadow-[0_0_25px_rgba(255,150,40,0.5)] transition hover:scale-105 focus:outline-none focus-visible:ring-4 focus-visible:ring-amber-200"
              >
                <Phone size={16} /> {PHONE_LABEL}
              </a>
              <a
                href={WHATSAPP}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-green-400 bg-green-500/10 px-5 py-2.5 text-sm font-bold text-green-300 transition hover:bg-green-500/25 focus:outline-none focus-visible:ring-4 focus-visible:ring-green-200"
              >
                <MessageCircle size={16} /> WhatsApp
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-6 text-center text-xs text-white/60 sm:flex-row sm:text-left sm:text-sm">
          <p>© {year} Keshav Fireworks. All rights reserved.</p>
          <motion.p
            animate={{ opacity: [0.6, 1, 0.6] }}
            transition={{ duration: 2.4, repeat: Infinity }}
            className="font-semibold text-amber-200"
          >
            🪔 Happy Diwali to you and your family 🪔
          </motion.p>
        </div>
      </div>
    </footer>
  );
}