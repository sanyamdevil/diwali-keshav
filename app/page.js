"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Yatra_One, Poppins } from "next/font/google";
import { motion, AnimatePresence } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode } from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";
import { Sparkles, ShoppingBag, Phone, MessageCircle, Rocket, Flame, Compass, Tag } from "lucide-react";

const display = Yatra_One({ subsets: ["latin"], weight: "400" });
const body = Poppins({ subsets: ["latin"], weight: ["400", "500", "600", "700", "800"] });

/* ---------- EDIT HERE ---------- */
const WHATSAPP =
  "https://wa.me/918168585528?text=Hello%20Keshav%20Fireworks%2C%20I%20want%20to%20order%20crackers";
const PHONE_TEL = "+918168585528";

// Prices are already discounted. No discount logic is applied.
const products = [
  { id: 1, name: "Whistling Rocket", price: 500, image: "/1.jpeg" },
  { id: 2, name: "Chit Put", price: 150, image: "/2.jpeg" },
  { id: 3, name: "Silver Rain Torches", price: 100, image: "/3.jpeg" },
  { id: 4, name: "Ganga Jamuna", price: 180, image: "/4.jpeg" },
  { id: 5, name: "Jumbo Bombs (Hydro)", price: 300, image: "/5.jpeg" },
  { id: 6, name: "3 Skyshot Stylo", price: 550, image: "/6.jpeg" },
  { id: 7, name: "Sterling (15 shots)", price: 600, image: "/7.jpeg" },
];

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
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-[#2a0a3d]/70 to-black/85" />
    </div>
  );
}

function Sparks() {
  const [s, setS] = useState([]);
  useEffect(() => {
    const colors = ["#FFC93C", "#FF7A1A", "#FF3D81", "#FFE8A3", "#7DF9FF"];
    setS(
      Array.from({ length: 28 }, (_, k) => ({
        k,
        left: Math.random() * 100,
        size: 3 + Math.random() * 5,
        delay: Math.random() * 6,
        dur: 4 + Math.random() * 6,
        c: colors[k % colors.length],
      }))
    );
  }, []);
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

/* Price banner: responsive, with pop-in, glow pulse, shimmer sweep and floating icon */
function PriceBanner() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30, scale: 0.9 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ delay: 0.3, type: "spring", stiffness: 80 }}
      className="relative mx-auto mt-8 w-full max-w-xl px-1"
    >
      <motion.div
        animate={{
          boxShadow: [
            "0 10px 40px rgba(255,120,40,0.45)",
            "0 10px 70px rgba(255,120,40,0.85)",
            "0 10px 40px rgba(255,120,40,0.45)",
          ],
        }}
        transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
        className="relative overflow-hidden rounded-3xl border-2 border-amber-300/70 bg-gradient-to-r from-pink-600 via-orange-500 to-amber-400 px-4 py-6 text-center sm:px-8 sm:py-8"
      >
        {/* shimmer sweep */}
        <motion.span
          aria-hidden
          className="pointer-events-none absolute inset-y-0 left-0 w-1/3 -skew-x-12 bg-gradient-to-r from-transparent via-white/40 to-transparent"
          animate={{ x: ["-120%", "350%"] }}
          transition={{ duration: 2.4, repeat: Infinity, repeatDelay: 1.2, ease: "easeInOut" }}
        />

        <div className="relative flex flex-col items-center gap-3 sm:flex-row sm:justify-center sm:gap-5">
          <motion.div
            animate={{ y: [0, -6, 0], rotate: [-8, 8, -8] }}
            transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
            className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white/25 text-white backdrop-blur sm:h-16 sm:w-16"
          >
            <Tag className="h-6 w-6 sm:h-8 sm:w-8" />
          </motion.div>

          <div>
            <p className={`${display.className} text-2xl leading-tight text-white drop-shadow sm:text-4xl`}>
              All crackers are at
            </p>
            <motion.p
              animate={{ scale: [1, 1.06, 1] }}
              transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
              className={`${display.className} mt-1 text-3xl leading-tight text-[#3b0a45] sm:text-5xl`}
            >
              Reasonable Price
            </motion.p>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function DiwaliLanding() {
  return (
    <main className={`${body.className} relative min-h-screen overflow-x-hidden text-white`}>
      <RotatingBackground />
      <Sparks />

      {/* HERO */}
      <section className="px-4 pb-10 pt-14 text-center sm:px-6 sm:pt-24">
        <div className="mx-auto max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mx-auto mb-5 inline-flex items-center gap-2 rounded-full border border-amber-300/60 bg-black/40 px-4 py-1.5 text-sm font-semibold text-amber-200 backdrop-blur"
          >
            <Sparkles size={16} /> Keshav Fireworks · Diwali Sale
          </motion.div>

          <motion.p
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 1.6, repeat: Infinity }}
            className="mb-4 text-lg font-extrabold text-amber-300 [text-shadow:0_2px_14px_rgba(0,0,0,0.9)] sm:text-2xl"
          >
            🎆 Hurry! Limited Stock Offers 🎆
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9 }}
            className={`${display.className} text-5xl leading-tight drop-shadow-[0_4px_20px_rgba(0,0,0,0.8)] sm:text-7xl lg:text-8xl`}
          >
            <span className="bg-gradient-to-r from-amber-200 via-orange-400 to-pink-500 bg-clip-text text-transparent">
              Light Up Your
            </span>
            <br />
            Diwali Sky
          </motion.h1>

          <p className="mx-auto mt-5 max-w-2xl text-base font-medium text-white sm:text-xl [text-shadow:0_2px_12px_rgba(0,0,0,0.9)]">
            Rockets, sky shots, fountains and bombs for the whole family.
          </p>

          <PriceBanner />

          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <motion.div animate={{ scale: [1, 1.06, 1] }} transition={{ duration: 1.8, repeat: Infinity }} className="w-full sm:w-auto">
              <Link
                href="/shop"
                className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-amber-400 via-orange-500 to-pink-500 px-8 py-4 text-lg font-extrabold text-[#2a0a3d] shadow-[0_0_40px_rgba(255,150,40,0.7)] focus:outline-none focus-visible:ring-4 focus-visible:ring-amber-200 sm:w-auto"
              >
                <Compass size={22} /> Explore crackers
              </Link>
            </motion.div>
            <Link
              href="/contact"
              className="inline-flex w-full items-center justify-center gap-2 rounded-full border-2 border-amber-300 bg-black/40 px-8 py-4 text-lg font-bold text-amber-100 backdrop-blur transition hover:bg-amber-300/20 focus:outline-none focus-visible:ring-4 focus-visible:ring-amber-200 sm:w-auto"
            >
              <Phone size={20} /> Contact us
            </Link>
          </div>
        </div>
      </section>

      {/* CONTINUOUS SWIPER CAROUSEL */}
      <section className="pb-28 pt-8">
        <h2 className={`${display.className} mb-8 px-4 text-center text-4xl sm:text-6xl [text-shadow:0_4px_20px_rgba(0,0,0,0.9)]`}>
          <Rocket className="mr-2 inline text-amber-300" size={34} />
          Festival favourites
        </h2>

        <Swiper
          modules={[Autoplay, FreeMode]}
          loop
          freeMode
          speed={5000}
          grabCursor
          allowTouchMove
          autoplay={{ delay: 0, disableOnInteraction: false, pauseOnMouseEnter: true }}
          slidesPerView={1.6}
          spaceBetween={16}
          breakpoints={{
            480: { slidesPerView: 2.2, spaceBetween: 18 },
            768: { slidesPerView: 3.2, spaceBetween: 22 },
            1024: { slidesPerView: 4.2, spaceBetween: 24 },
            1280: { slidesPerView: 5, spaceBetween: 24 },
          }}
          className="!px-4 [&_.swiper-wrapper]:!ease-linear"
        >
          {[...products, ...products].map((p, i) => (
            <SwiperSlide key={`${p.id}-${i}`} className="!h-auto">
              <div className="group h-full overflow-hidden rounded-2xl border border-amber-300/50 bg-black/60 shadow-[0_8px_30px_rgba(0,0,0,0.5)] backdrop-blur-md">
                <div className="relative aspect-square overflow-hidden bg-[#2a0a3d]">
                  <img
                    src={p.image}
                    alt={p.name}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
                    draggable={false}
                  />
                  <span className="absolute left-2 top-2 flex items-center gap-1 rounded-full bg-pink-600 px-2 py-0.5 text-xs font-bold">
                    <Flame size={12} /> Hot deal
                  </span>
                </div>
                <div className="p-3 sm:p-4">
                  <p className="min-h-[2.5rem] text-sm font-bold leading-tight sm:text-base">{p.name}</p>
                  <div className="mt-2 flex items-center justify-between gap-2">
                    <p className="text-xl font-extrabold text-amber-300">₹{p.price}</p>
                    <Link
                      href="/shop"
                      className="flex items-center gap-1 rounded-full bg-gradient-to-r from-orange-500 to-pink-500 px-3 py-1.5 text-xs font-bold transition hover:scale-105"
                    >
                      <ShoppingBag size={13} /> Buy
                    </Link>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="mt-10 text-center">
          <Link
            href="/shop"
            className="inline-flex items-center gap-2 rounded-full border-2 border-amber-300 bg-black/50 px-8 py-3 text-lg font-bold text-amber-100 backdrop-blur transition hover:bg-amber-300/20"
          >
            <Compass size={20} /> Explore crackers
          </Link>
        </div>
      </section>

      {/* Floating call + WhatsApp */}
      <div className="fixed bottom-5 right-5 z-50 flex flex-col gap-3">
        <a
          href={`tel:${PHONE_TEL}`}
          aria-label="Call Keshav Fireworks"
          className="rounded-full bg-orange-500 p-4 shadow-[0_0_25px_rgba(255,140,40,0.8)] transition hover:scale-110"
        >
          <Phone size={26} />
        </a>
        <a
          href={WHATSAPP}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat on WhatsApp"
          className="rounded-full bg-green-500 p-4 shadow-[0_0_25px_rgba(34,197,94,0.8)] transition hover:scale-110"
        >
          <MessageCircle size={26} />
        </a>
      </div>
    </main>
  );
}