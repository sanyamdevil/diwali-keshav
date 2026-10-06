"use client";

import { useEffect, useState } from "react";
import { Yatra_One, Poppins } from "next/font/google";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { Sparkles, Phone, MessageCircle, MapPin, BadgeIndianRupee } from "lucide-react";

const display = Yatra_One({ subsets: ["latin"], weight: "400" });
const body = Poppins({ subsets: ["latin"], weight: ["400", "500", "600", "700", "800"] });

/* ---------- EDIT HERE ---------- */
const PHONE_TEL = "+918168585528";
const PHONE_DISPLAY = "+91 81685 85528";
const WHATSAPP =
  "https://wa.me/918168585528?text=Hello%20Keshav%20Fireworks%2C%20I%20want%20to%20order%20crackers";
const LOCATION = "Sonipat, Haryana, India";

const BACKGROUNDS = [
  "/diwali1.jpg", "/diwali2.jpg", "/diwali3.jpg", "/diwali4.jpg",
  "/diwali5.jpg", "/diwali6.jpg", "/diwali7.jpg",
];

function RotatingBackground() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setI((v) => (v + 1) % BACKGROUNDS.length), 5000);
    return () => clearInterval(t);
  }, []);
  return (
    <div className="fixed inset-0 -z-10 bg-gradient-to-br from-[#1a0530] via-[#4a0d4f] to-[#7a1d1d]">
      <AnimatePresence mode="sync">
        <motion.div
          key={i}
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${BACKGROUNDS[i]})` }}
          initial={{ opacity: 0, scale: 1.12 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.8, ease: "easeInOut" }}
        />
      </AnimatePresence>
      <div className="absolute inset-0 bg-gradient-to-b from-black/75 via-[#2a0a3d]/75 to-black/90" />
    </div>
  );
}

function Sparks() {
  const reduce = useReducedMotion();
  const [s, setS] = useState([]);
  useEffect(() => {
    const colors = ["#FFC93C", "#FF7A1A", "#FF3D81", "#FFE8A3", "#7DF9FF"];
    setS(
      Array.from({ length: 26 }, (_, k) => ({
        k,
        left: Math.random() * 100,
        size: 3 + Math.random() * 5,
        delay: Math.random() * 6,
        dur: 4 + Math.random() * 6,
        c: colors[k % colors.length],
      }))
    );
  }, []);
  if (reduce) return null;
  return (
    <div className="pointer-events-none fixed inset-0 -z-[5] overflow-hidden" aria-hidden>
      {s.map((p) => (
        <motion.span
          key={p.k}
          className="absolute bottom-0 rounded-full"
          style={{ left: `${p.left}%`, width: p.size, height: p.size, background: p.c, boxShadow: `0 0 14px ${p.c}` }}
          animate={{ y: [0, -900], opacity: [0, 1, 0] }}
          transition={{ duration: p.dur, delay: p.delay, repeat: Infinity, ease: "easeOut" }}
        />
      ))}
    </div>
  );
}

/* A firework burst that blooms behind the heading */
function Burst() {
  const reduce = useReducedMotion();
  const colors = ["#FFC93C", "#FF7A1A", "#FF3D81", "#FFE8A3", "#7DF9FF"];
  const rays = Array.from({ length: 20 }, (_, k) => k);
  return (
    <div className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-0 w-0" aria-hidden>
      {rays.map((k) => {
        const angle = (k / rays.length) * Math.PI * 2;
        const dist = 150;
        const c = colors[k % colors.length];
        return (
          <motion.span
            key={k}
            className="absolute rounded-full"
            style={{ width: 8, height: 8, background: c, boxShadow: `0 0 16px ${c}` }}
            initial={{ x: 0, y: 0, opacity: 0, scale: 0.4 }}
            animate={
              reduce
                ? { opacity: 0 }
                : {
                    x: [0, Math.cos(angle) * dist],
                    y: [0, Math.sin(angle) * dist],
                    opacity: [0, 1, 0],
                    scale: [0.4, 1.2, 0.2],
                  }
            }
            transition={{ duration: 2.4, repeat: Infinity, repeatDelay: 1.2, ease: "easeOut" }}
          />
        );
      })}
    </div>
  );
}

function ContactCard({ href, external, icon: Icon, title, value, button, tone, delay }) {
  const tones = {
    call: {
      ring: "border-orange-300/70 hover:shadow-[0_0_50px_rgba(255,140,40,0.7)]",
      icon: "bg-gradient-to-br from-orange-400 to-pink-500",
      btn: "bg-gradient-to-r from-amber-400 via-orange-500 to-pink-500 text-[#2a0a3d] shadow-[0_0_30px_rgba(255,150,40,0.6)]",
      glow: "rgba(255,140,40,0.7)",
    },
    wa: {
      ring: "border-green-300/70 hover:shadow-[0_0_50px_rgba(34,197,94,0.7)]",
      icon: "bg-gradient-to-br from-green-400 to-emerald-600",
      btn: "bg-gradient-to-r from-green-500 to-emerald-400 text-[#06290f] shadow-[0_0_30px_rgba(34,197,94,0.6)]",
      glow: "rgba(34,197,94,0.7)",
    },
  }[tone];

  return (
    <motion.a
      href={href}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, type: "spring", stiffness: 80 }}
      whileHover={{ y: -8 }}
      whileTap={{ scale: 0.98 }}
      className={`group flex flex-col items-center rounded-3xl border-2 bg-black/60 px-6 py-8 text-center shadow-[0_10px_40px_rgba(0,0,0,0.5)] backdrop-blur-md transition-shadow focus:outline-none focus-visible:ring-4 focus-visible:ring-amber-200 sm:px-8 sm:py-10 ${tones.ring}`}
    >
      <motion.span
        animate={{ boxShadow: [`0 0 0 0 ${tones.glow}`, "0 0 0 22px rgba(0,0,0,0)"] }}
        transition={{ duration: 1.8, repeat: Infinity }}
        className={`flex h-20 w-20 items-center justify-center rounded-full text-white sm:h-24 sm:w-24 ${tones.icon}`}
      >
        <Icon size={38} />
      </motion.span>

      <h2 className={`${display.className} mt-5 text-3xl sm:text-4xl`}>{title}</h2>
      <p className="mt-2 text-xl font-extrabold tracking-wide text-amber-300 sm:text-2xl">{value}</p>

      <span
        className={`mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full px-6 py-3.5 text-base font-extrabold transition group-hover:scale-105 sm:w-auto sm:px-10 sm:text-lg ${tones.btn}`}
      >
        <Icon size={20} /> {button}
      </span>
    </motion.a>
  );
}

export default function ContactPage() {
  return (
    <main className={`${body.className} relative min-h-screen overflow-x-hidden text-white`}>
      <RotatingBackground />
      <Sparks />

      {/* HEADING */}
      <section className="px-4 pb-8 pt-12 text-center sm:px-6 sm:pt-20">
        <div className="relative mx-auto max-w-4xl">
          <Burst />

          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mx-auto mb-5 inline-flex items-center gap-2 rounded-full border border-amber-300/60 bg-black/40 px-4 py-1.5 text-sm font-semibold text-amber-200 backdrop-blur"
          >
            <Sparkles size={16} /> Keshav Fireworks
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9 }}
            className={`${display.className} text-5xl leading-tight drop-shadow-[0_4px_20px_rgba(0,0,0,0.8)] sm:text-7xl lg:text-8xl`}
          >
            <span className="bg-gradient-to-r from-amber-200 via-orange-400 to-pink-500 bg-clip-text text-transparent">
              Contact Us
            </span>
          </motion.h1>

          <motion.p
            animate={{ scale: [1, 1.04, 1] }}
            transition={{ duration: 1.8, repeat: Infinity }}
            className="mx-auto mt-6 inline-flex max-w-full items-center justify-center gap-2 rounded-full border-2 border-amber-300/70 bg-gradient-to-r from-pink-600/80 via-orange-500/80 to-amber-400/80 px-5 py-2.5 text-sm font-extrabold text-white shadow-[0_6px_30px_rgba(255,120,40,0.5)] sm:text-lg"
          >
            <BadgeIndianRupee size={22} className="shrink-0" />
            All crackers are at reasonable price
          </motion.p>
        </div>
      </section>

      {/* CONTACT CARDS */}
      <section className="mx-auto max-w-4xl px-4 pb-10 sm:px-6">
        <div className="grid gap-5 sm:grid-cols-2 sm:gap-8">
          <ContactCard
            tone="call"
            icon={Phone}
            title="Call us"
            value={PHONE_DISPLAY}
            button="Call now"
            href={`tel:${PHONE_TEL}`}
            delay={0.3}
          />
          <ContactCard
            tone="wa"
            icon={MessageCircle}
            title="WhatsApp"
            value={PHONE_DISPLAY}
            button="Chat on WhatsApp"
            href={WHATSAPP}
            external
            delay={0.45}
          />
        </div>
      </section>

      {/* LOCATION */}
      <section className="px-4 pb-24 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto flex max-w-xl items-center justify-center gap-4 rounded-3xl border border-amber-300/50 bg-black/60 px-6 py-6 text-left shadow-[0_8px_30px_rgba(0,0,0,0.5)] backdrop-blur-md"
        >
          <motion.span
            animate={{ y: [0, -6, 0] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
            className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-amber-400 to-pink-500 text-[#2a0a3d]"
          >
            <MapPin size={28} />
          </motion.span>
          <p className={`${display.className} text-2xl leading-snug text-amber-100 sm:text-3xl`}>{LOCATION}</p>
        </motion.div>
      </section>
    </main>
  );
}