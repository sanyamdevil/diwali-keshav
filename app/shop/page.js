"use client";

import { useEffect, useMemo, useState } from "react";
import { Yatra_One, Poppins } from "next/font/google";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectCoverflow } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import { Sparkles, X, Search, SlidersHorizontal, MessageCircle } from "lucide-react";

const display = Yatra_One({ subsets: ["latin"], weight: "400" });
const body = Poppins({ subsets: ["latin"], weight: ["400", "500", "600", "700", "800"] });

/* ---------- EDIT HERE ---------- */
const WHATSAPP_NUMBER = "918168585528"; // country code + number, no + or spaces

// Images must be placed in /public as 1.jpeg ... 24.jpeg
const products = [
  { id: 1, name: "Golden Star Anar", price: 550, image: "/1.jpeg" },
  { id: 2, name: "Tim Tim Anar", price: 450, image: "/2.jpeg" },
  { id: 3, name: "2 in 1 Flowerpot", price: 700, image: "/3.jpeg" },
  { id: 4, name: "Hydro Bomb", price: 250, image: "/4.jpeg" },
  { id: 5, name: "Colorkoti Fancy", price: 450, image: "/5.jpeg" },
  { id: 6, name: "Ashoka Flower Pot", price: 220, image: "/6.jpeg" },
  { id: 7, name: "Sizzling Peacock", price: 450, image: "/7.jpeg" },
  { id: 8, name: "Bullet Deluxe", price: 180, image: "/8.jpeg" },
  { id: 9, name: "Cornation Chakkar Special", price: 300, image: "/9.jpeg" },
  { id: 10, name: "Chakkar Deluxe", price: 280, image: "/10.jpeg" },
  { id: 11, name: "Fuljhadi 30cm", price: 80, image: "/11.jpeg" },
  { id: 12, name: "Fuljhadi 80cm", price: 180, image: "/12.jpeg" },
  { id: 13, name: "Skyshot 3 pcs", price: 550, image: "/13.jpeg" },
  { id: 14, name: "Cornation Penta Shot", price: 300, image: "/14.jpeg" },
  { id: 15, name: "1000 Bomb Ladi", price: 650, image: "/15.jpeg" },
  { id: 16, name: "Delight 12 Shot", price: 300, image: "/16.jpeg" },
  { id: 17, name: "Hand Crackling", price: 600, image: "/17.jpeg" },
  { id: 18, name: "Hand 18 Shots", price: 600, image: "/18.jpeg" },
  { id: 19, name: "Mercury Crackling Rocket (6pcs)", price: 350, image: "/19.jpeg" },
  { id: 20, name: "Mercury Whistling Rocket (10pcs)", price: 450, image: "/20.jpeg" },
  { id: 21, name: "Mercury Siren (3pcs)", price: 500, image: "/21.jpeg" },
  { id: 22, name: "60 Shots", price: 1300, image: "/22.jpeg" },
  { id: 23, name: "120 Shots", price: 2500, image: "/23.jpeg" },
  { id: 24, name: "3 Inch Sutli", price: 180, image: "/24.jpeg" },
];

const BACKGROUNDS = [
  "/diwali1.jpg", "/diwali2.jpg", "/diwali3.jpg", "/diwali4.jpg",
  "/diwali5.jpg", "/diwali6.jpg", "/diwali7.jpg",
];

const PRICE_RANGES = [
  { key: "all", label: "All prices", test: () => true },
  { key: "u200", label: "Under ₹200", test: (p) => p < 200 },
  { key: "200-500", label: "₹200 – ₹500", test: (p) => p >= 200 && p <= 500 },
  { key: "500-1000", label: "₹500 – ₹1000", test: (p) => p > 500 && p <= 1000 },
  { key: "o1000", label: "Above ₹1000", test: (p) => p > 1000 },
];

const SORTS = [
  { key: "default", label: "Default" },
  { key: "low", label: "Price: low to high" },
  { key: "high", label: "Price: high to low" },
  { key: "az", label: "Name: A to Z" },
];

const inr = (n) => `₹${n.toLocaleString("en-IN")}`;

const buyLink = (p) =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    `Hello Keshav Fireworks, I want to buy ${p.name} (${inr(p.price)}).`
  )}`;

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
      Array.from({ length: 24 }, (_, k) => ({
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

function CrackerImage({ src, alt, className = "" }) {
  const [failed, setFailed] = useState(false);
  return failed ? (
    <div className={`${className} flex items-center justify-center bg-gradient-to-br from-[#4a0d4f] to-[#7a1d1d]`}>
      <Sparkles className="text-amber-300" size={36} />
    </div>
  ) : (
    <img src={src} alt={alt} loading="lazy" draggable={false} onError={() => setFailed(true)} className={className} />
  );
}

/* Opens WhatsApp chat with the owner and a ready message for this cracker */
function BuyButton({ product, size = "sm", className = "" }) {
  const big = size === "lg";
  return (
    <a
      href={buyLink(product)}
      target="_blank"
      rel="noopener noreferrer"
      onClick={(e) => e.stopPropagation()}
      aria-label={`Buy ${product.name} on WhatsApp`}
      className={`pointer-events-auto inline-flex shrink-0 items-center justify-center gap-1.5 rounded-full bg-gradient-to-r from-green-500 to-emerald-400 font-extrabold text-[#06290f] shadow-[0_0_18px_rgba(34,197,94,0.6)] transition hover:scale-105 focus:outline-none focus-visible:ring-4 focus-visible:ring-amber-200 ${
        big ? "px-6 py-3 text-base" : "px-3 py-1.5 text-xs sm:px-4 sm:py-2 sm:text-sm"
      } ${className}`}
    >
      <MessageCircle size={big ? 20 : 14} /> Buy
    </a>
  );
}

/* Image card used by both the carousel and the grid */
function CrackerCard({ product, onOpen, className = "" }) {
  return (
    <div className={`group relative aspect-[4/5] overflow-hidden ${className}`}>
      <button
        type="button"
        onClick={() => onOpen(product)}
        aria-label={`View ${product.name}`}
        className="absolute inset-0 focus:outline-none focus-visible:ring-4 focus-visible:ring-inset focus-visible:ring-amber-200"
      >
        <CrackerImage
          src={product.image}
          alt={product.name}
          className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
        />
      </button>
      <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/95 via-black/70 to-transparent px-3 pb-3 pt-14 sm:px-4 sm:pb-4">
        <p className="min-h-[2.25rem] text-xs font-bold leading-tight sm:text-base">{product.name}</p>
        <div className="mt-1 flex items-center justify-between gap-2">
          <p className={`${display.className} text-xl text-amber-300 sm:text-2xl`}>{inr(product.price)}</p>
          <BuyButton product={product} />
        </div>
      </div>
    </div>
  );
}

function Chip({ active, onClick, children }) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={active}
      className={`rounded-full border px-3.5 py-1.5 text-xs font-semibold transition focus:outline-none focus-visible:ring-4 focus-visible:ring-amber-200 sm:text-sm ${
        active
          ? "border-amber-300 bg-gradient-to-r from-amber-400 to-orange-500 text-[#2a0a3d]"
          : "border-amber-300/40 bg-black/40 text-amber-100 hover:bg-amber-300/20"
      }`}
    >
      {children}
    </button>
  );
}

export default function ShopPage() {
  const [active, setActive] = useState(null);
  const [query, setQuery] = useState("");
  const [range, setRange] = useState("all");
  const [sort, setSort] = useState("default");
  const [panelOpen, setPanelOpen] = useState(false);

  const isFiltering = query.trim() !== "" || range !== "all" || sort !== "default";
  const filterCount = (range !== "all" ? 1 : 0) + (sort !== "default" ? 1 : 0);

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    const test = PRICE_RANGES.find((r) => r.key === range).test;
    let list = products.filter((p) => p.name.toLowerCase().includes(q) && test(p.price));
    if (sort === "low") list = [...list].sort((a, b) => a.price - b.price);
    if (sort === "high") list = [...list].sort((a, b) => b.price - a.price);
    if (sort === "az") list = [...list].sort((a, b) => a.name.localeCompare(b.name));
    return list;
  }, [query, range, sort]);

  const clearAll = () => {
    setQuery("");
    setRange("all");
    setSort("default");
  };

  useEffect(() => {
    if (!active) return;
    const onKey = (e) => e.key === "Escape" && setActive(null);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [active]);

  return (
    <main className={`${body.className} relative min-h-screen overflow-x-hidden text-white`}>
      <RotatingBackground />
      <Sparks />

      {/* TITLE */}
      <section className="px-4 pb-5 pt-10 text-center sm:pt-16">
        <motion.h1
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className={`${display.className} text-5xl drop-shadow-[0_4px_20px_rgba(0,0,0,0.8)] sm:text-7xl`}
        >
          <span className="bg-gradient-to-r from-amber-200 via-orange-400 to-pink-500 bg-clip-text text-transparent">
            Our Crackers
          </span>
        </motion.h1>
      </section>

      {/* SEARCH + FILTER */}
      <section className="mx-auto max-w-3xl px-4 pb-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25 }}
          className="flex items-center gap-2 sm:gap-3"
        >
          <label className="relative flex-1">
            <span className="sr-only">Search crackers by name</span>
            <Search className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-amber-300" size={18} />
            <input
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search cracker name"
              className="w-full rounded-full border-2 border-amber-300/60 bg-black/50 py-3 pl-11 pr-4 text-sm font-medium text-white placeholder:text-white/50 backdrop-blur focus:border-amber-300 focus:outline-none focus:ring-4 focus:ring-amber-300/30 sm:text-base"
            />
          </label>

          <button
            type="button"
            onClick={() => setPanelOpen((v) => !v)}
            aria-expanded={panelOpen}
            aria-controls="filter-panel"
            className={`relative inline-flex items-center gap-2 rounded-full border-2 px-4 py-3 text-sm font-bold backdrop-blur transition focus:outline-none focus-visible:ring-4 focus-visible:ring-amber-200 sm:px-6 sm:text-base ${
              panelOpen
                ? "border-amber-300 bg-gradient-to-r from-amber-400 to-orange-500 text-[#2a0a3d]"
                : "border-amber-300/60 bg-black/50 text-amber-100 hover:bg-amber-300/20"
            }`}
          >
            <SlidersHorizontal size={18} />
            <span className="hidden sm:inline">Filter</span>
            {filterCount > 0 && (
              <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-pink-600 text-[11px] font-extrabold text-white">
                {filterCount}
              </span>
            )}
          </button>
        </motion.div>

        <AnimatePresence initial={false}>
          {panelOpen && (
            <motion.div
              id="filter-panel"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.35, ease: "easeInOut" }}
              className="overflow-hidden"
            >
              <div className="mt-3 space-y-4 rounded-3xl border border-amber-300/50 bg-black/60 p-4 backdrop-blur-md sm:p-5">
                <div>
                  <p className="mb-2 text-sm font-bold text-amber-300">Price</p>
                  <div className="flex flex-wrap gap-2">
                    {PRICE_RANGES.map((r) => (
                      <Chip key={r.key} active={range === r.key} onClick={() => setRange(r.key)}>
                        {r.label}
                      </Chip>
                    ))}
                  </div>
                </div>
                <div>
                  <p className="mb-2 text-sm font-bold text-amber-300">Sort by</p>
                  <div className="flex flex-wrap gap-2">
                    {SORTS.map((s) => (
                      <Chip key={s.key} active={sort === s.key} onClick={() => setSort(s.key)}>
                        {s.label}
                      </Chip>
                    ))}
                  </div>
                </div>
                {isFiltering && (
                  <button
                    type="button"
                    onClick={clearAll}
                    className="inline-flex items-center gap-1.5 rounded-full bg-pink-600 px-4 py-2 text-sm font-bold transition hover:bg-pink-500 focus:outline-none focus-visible:ring-4 focus-visible:ring-amber-200"
                  >
                    <X size={16} /> Clear all
                  </button>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </section>

      {/* COVERFLOW CAROUSEL (hidden while searching or filtering) */}
      {!isFiltering && (
        <section className="pb-6">
          <Swiper
            modules={[Autoplay, EffectCoverflow]}
            effect="coverflow"
            grabCursor
            centeredSlides
            loop
            slidesPerView={1.5}
            autoplay={{ delay: 2600, disableOnInteraction: false, pauseOnMouseEnter: true }}
            coverflowEffect={{ rotate: 28, stretch: 0, depth: 140, modifier: 1.2, slideShadows: false }}
            breakpoints={{
              640: { slidesPerView: 2.4 },
              1024: { slidesPerView: 3.4 },
              1400: { slidesPerView: 4.2 },
            }}
            className="!py-8"
          >
            {products.map((p) => (
              <SwiperSlide key={p.id} className="!h-auto">
                {({ isActive }) => (
                  <CrackerCard
                    product={p}
                    onOpen={setActive}
                    className={`rounded-3xl border-2 transition-all duration-500 ${
                      isActive
                        ? "border-amber-300 shadow-[0_0_50px_rgba(255,150,40,0.65)]"
                        : "border-amber-300/30 opacity-80"
                    }`}
                  />
                )}
              </SwiperSlide>
            ))}
          </Swiper>
        </section>
      )}

      {/* GRID */}
      <section className="mx-auto max-w-7xl px-4 pb-24 pt-4 sm:px-6">
        {results.length === 0 ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="mx-auto max-w-md rounded-3xl border border-amber-300/50 bg-black/60 px-6 py-10 text-center backdrop-blur-md"
          >
            <Sparkles className="mx-auto mb-3 text-amber-300" size={36} />
            <p className="text-lg font-bold">No crackers found</p>
            <p className="mt-1 text-sm text-white/80">Try a different name or clear the filters.</p>
            <button
              type="button"
              onClick={clearAll}
              className="mt-5 rounded-full bg-gradient-to-r from-amber-400 via-orange-500 to-pink-500 px-6 py-2.5 font-extrabold text-[#2a0a3d] transition hover:scale-105 focus:outline-none focus-visible:ring-4 focus-visible:ring-amber-200"
            >
              Show all crackers
            </button>
          </motion.div>
        ) : (
          <motion.div layout className="grid grid-cols-2 gap-3 sm:gap-5 md:grid-cols-3 lg:grid-cols-4">
            <AnimatePresence mode="popLayout">
              {results.map((p, idx) => (
                <motion.div
                  layout
                  key={p.id}
                  initial={{ opacity: 0, y: 40, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.45, delay: Math.min(idx, 7) * 0.05 }}
                  whileHover={{ y: -8 }}
                >
                  <CrackerCard
                    product={p}
                    onOpen={setActive}
                    className="rounded-2xl border border-amber-300/50 bg-black/60 shadow-[0_8px_30px_rgba(0,0,0,0.5)] transition-shadow hover:border-amber-300 hover:shadow-[0_0_35px_rgba(255,150,40,0.55)]"
                  />
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        )}
      </section>

      {/* IMAGE VIEWER */}
      <AnimatePresence>
        {active && (
          <motion.div
            key="viewer"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActive(null)}
            role="dialog"
            aria-modal="true"
            aria-label={active.name}
            className="fixed inset-0 z-[60] flex items-center justify-center bg-black/85 p-4 backdrop-blur-sm"
          >
            <motion.div
              initial={{ scale: 0.8, y: 30, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.8, y: 30, opacity: 0 }}
              transition={{ type: "spring", stiffness: 160, damping: 18 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-md overflow-hidden rounded-3xl border-2 border-amber-300 shadow-[0_0_60px_rgba(255,150,40,0.6)]"
            >
              <CrackerImage src={active.image} alt={active.name} className="max-h-[70vh] w-full object-cover" />
              <div className="flex items-center justify-between gap-3 bg-gradient-to-t from-black via-black/90 to-black/70 px-5 py-4">
                <div className="min-w-0">
                  <p className="text-lg font-bold leading-tight">{active.name}</p>
                  <p className={`${display.className} mt-1 text-3xl text-amber-300`}>{inr(active.price)}</p>
                </div>
                <BuyButton product={active} size="lg" />
              </div>
              <button
                type="button"
                onClick={() => setActive(null)}
                aria-label="Close"
                className="absolute right-3 top-3 rounded-full bg-black/70 p-2 transition hover:bg-pink-600 focus:outline-none focus-visible:ring-4 focus-visible:ring-amber-200"
              >
                <X size={22} />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}