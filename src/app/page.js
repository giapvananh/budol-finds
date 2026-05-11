"use client";

import { useEffect, useMemo, useState } from "react";

const API_URL =
  "https://opensheet.elk.sh/1SpBNvD2CdhvnaIep3Ssputr-0EsH2pwPnrZWl0p1Ktw/Sheet1";

const FALLBACK_IMAGE = "https://placehold.co/600x450?text=Product";

function pick(item, keys) {
  for (const key of keys) {
    if (item?.[key]) return item[key];
  }
  return "";
}

function getRandomShopeeLink(product) {
  const randomLinks = product?.random_links
    ? product.random_links
        .split("|")
        .map((link) => link.trim())
        .filter(Boolean)
    : [];

  if (randomLinks.length > 0) {
    return randomLinks[Math.floor(Math.random() * randomLinks.length)];
  }

  return product?.link || "#";
}

function randomNumber(seed, min, max) {
  return ((seed * 37) % (max - min + 1)) + min;
}

export default function Home() {
  const [products, setProducts] = useState([]);
  const [hero, setHero] = useState(null);
  const [timeLeft, setTimeLeft] = useState({
    days: "02",
    hours: "45",
    mins: "18",
    secs: "37",
  });

  useEffect(() => {
    async function loadProducts() {
      try {
        const res = await fetch(API_URL);
        const data = await res.json();
        const list = Array.isArray(data) ? data : [];

        setProducts(list);

        if (list.length > 0) {
          const randomHero = list[Math.floor(Math.random() * list.length)];
          setHero(randomHero);
        }
      } catch {
        setProducts([]);
      }
    }

    loadProducts();
  }, []);

  useEffect(() => {
    const endTime = new Date();
    endTime.setHours(endTime.getHours() + 45);

    const timer = setInterval(() => {
      const now = new Date();
      const diff = endTime - now;

      if (diff <= 0) return;

      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
      const mins = Math.floor((diff / (1000 * 60)) % 60);
      const secs = Math.floor((diff / 1000) % 60);

      setTimeLeft({
        days: String(days).padStart(2, "0"),
        hours: String(hours).padStart(2, "0"),
        mins: String(mins).padStart(2, "0"),
        secs: String(secs).padStart(2, "0"),
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const visibleProducts = useMemo(() => products.slice(0, 12), [products]);

  function openProduct(product) {
    const url = getRandomShopeeLink(product);
    if (url !== "#") window.open(url, "_blank", "noopener,noreferrer");
  }

  return (
    <main className="min-h-screen bg-[#fff7f4] pb-24 text-neutral-950">
      <header className="sticky top-0 z-50 bg-white/95 shadow-sm backdrop-blur">
        <div className="flex items-center justify-between px-4 py-3">
          <div className="flex items-center gap-3">
            <button className="text-3xl font-black">☰</button>

            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-pink-500 to-orange-500 text-xl font-black text-white shadow">
              BF
            </div>

            <div>
              <h1 className="text-xl font-black leading-none">
                Budol Finds PH
              </h1>
              <p className="mt-1 text-xs font-black text-neutral-500">
                VIRAL FINDS • TRENDING NOW 🔥
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4 text-3xl">
            <span>⌕</span>
            <span className="relative">
              🛒
              <b className="absolute -right-2 -top-2 rounded-full bg-red-500 px-1.5 text-xs text-white">
                3
              </b>
            </span>
          </div>
        </div>
      </header>

      {hero && (
        <section className="px-4 pt-4">
          <div
            onClick={() => openProduct(hero)}
            className="relative cursor-pointer overflow-hidden rounded-[26px] bg-black shadow-xl active:scale-[0.99]"
          >
            <img
              src={pick(hero, ["hero_image", "image", "hình ảnh"]) || FALLBACK_IMAGE}
              alt={pick(hero, ["title", "tiêu đề"])}
              className="h-[310px] w-full object-cover opacity-75"
            />

            <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/55 to-black/15" />

            <div className="absolute inset-0 p-5 text-white">
              <div className="inline-flex rounded-full bg-black/55 px-3 py-2 text-xs font-black">
                🔥 #1 TRENDING IN PHILIPPINES
              </div>

              <h2 className="mt-5 max-w-[250px] text-[38px] font-black leading-[0.92]">
                {pick(hero, ["hero_title"]) || "LEVEL UP"}
                <br />
                <span className="text-yellow-400">
                  {pick(hero, ["hero_highlight"]) || "YOUR ROOM"}
                </span>
              </h2>

              <div className="mt-4 space-y-1 text-sm font-black">
                <p>🔥 AESTHETIC VIBES</p>
                <p>😎 PERFECT FOR CHILL NIGHTS</p>
                <p>❤️ GIRLS LOVE THIS</p>
              </div>

              <button className="mt-5 rounded-2xl bg-gradient-to-r from-pink-500 to-orange-500 px-8 py-4 text-lg font-black shadow-xl">
                SHOP NOW ›
              </button>
            </div>

            <div className="absolute right-4 top-5 flex h-24 w-24 items-center justify-center rounded-full bg-orange-500 text-center text-2xl font-black text-white shadow-xl">
              80%
              <br />
              OFF
            </div>

            <div className="absolute bottom-5 right-4 rounded-2xl bg-black/70 px-4 py-2 text-white">
              <div className="text-xl font-black">🔥 12.3K+</div>
              <div className="text-[10px] font-bold">SOLD TODAY</div>
            </div>

            <div className="absolute bottom-5 left-1/2 flex -translate-x-1/2 gap-2">
              {[1, 2, 3, 4, 5].map((dot) => (
                <span
                  key={dot}
                  className="h-2.5 w-2.5 rounded-full bg-white/70"
                />
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="px-4 pt-4">
        <div className="rounded-[22px] bg-gradient-to-r from-pink-500 to-orange-500 p-4 text-white shadow-lg">
          <div className="flex items-center justify-between gap-3">
            <div>
              <div className="text-2xl font-black">⚡ FLASH SALE</div>
              <div className="text-xs font-black">LIMITED TIME ONLY!</div>
            </div>

            <div className="flex gap-1.5 text-center">
              {[
                [timeLeft.days, "DAYS"],
                [timeLeft.hours, "HRS"],
                [timeLeft.mins, "MINS"],
                [timeLeft.secs, "SECS"],
              ].map(([num, label]) => (
                <div key={label} className="rounded-xl bg-black/25 px-2.5 py-2">
                  <div className="text-xl font-black">{num}</div>
                  <div className="text-[9px] font-bold">{label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 pt-4">
        <div className="grid grid-cols-4 gap-2 rounded-2xl bg-white p-3 text-center shadow">
          {[
            ["🚚", "FREE", "Shipping"],
            ["💵", "COD", "Available"],
            ["🛡️", "100%", "Authentic"],
            ["🔄", "Easy", "Returns"],
          ].map(([icon, title, desc]) => (
            <div key={title}>
              <div className="text-2xl">{icon}</div>
              <div className="mt-1 text-[11px] font-black">{title}</div>
              <div className="text-[10px] font-semibold text-neutral-500">
                {desc}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="px-4 pt-5">
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-2xl font-black">🔥 TRENDING NOW</h2>
          <button className="font-black text-pink-500">See All ›</button>
        </div>

        {products.length === 0 && (
          <div className="rounded-3xl bg-white p-10 text-center font-bold text-neutral-500 shadow">
            Loading products...
          </div>
        )}

        <div className="grid grid-cols-2 gap-4">
          {visibleProducts.map((product, index) => {
            const title = pick(product, ["title", "tiêu đề"]);
            const price = pick(product, ["price", "giá"]);
            const oldPrice = pick(product, ["old_price", "giá cũ"]);
            const image = pick(product, ["image", "hình ảnh"]);
            const badge = pick(product, ["badge", "huy hiệu"]) || "HOT";
            const viewCount = randomNumber(index + 1, 19, 49);
            const soldCount = randomNumber(index + 4, 6, 15);

            return (
              <article
                key={`${title}-${index}`}
                onClick={() => openProduct(product)}
                className="cursor-pointer overflow-hidden rounded-[22px] bg-white shadow-lg active:scale-[0.98]"
              >
                <div className="relative aspect-[4/3] bg-neutral-100">
                  <img
                    src={image || FALLBACK_IMAGE}
                    alt={title || "Product"}
                    className="h-full w-full object-cover"
                    loading="lazy"
                  />

                  <div className="absolute left-2 top-2 rounded-xl bg-pink-500 px-2.5 py-1 text-xs font-black text-white">
                    {badge}
                  </div>

                  <div className="absolute right-2 top-2 rounded-full bg-black/50 px-2 py-1 text-white">
                    ♡
                  </div>

                  <div className="absolute bottom-2 left-2 rounded-full bg-pink-500 px-2.5 py-1 text-[10px] font-black text-white">
                    👁 {viewCount} viewing now
                  </div>
                </div>

                <div className="p-3">
                  <h3 className="line-clamp-2 min-h-[42px] text-sm font-black leading-snug">
                    {title}
                  </h3>

                  <div className="mt-1 text-xs font-bold text-neutral-500">
                    ⭐ 4.9 | {soldCount}.2K sold
                  </div>

                  <div className="mt-2 flex items-center gap-2">
                    <span className="text-2xl font-black text-red-600">
                      {price}
                    </span>

                    {oldPrice && (
                      <span className="text-xs text-neutral-400 line-through">
                        {oldPrice}
                      </span>
                    )}

                    <span className="rounded-lg bg-pink-100 px-2 py-1 text-xs font-black text-red-500">
                      -{randomNumber(index + 3, 40, 77)}%
                    </span>
                  </div>

                  <button className="mt-3 w-full rounded-xl bg-gradient-to-r from-pink-500 to-orange-500 py-3 text-sm font-black text-white shadow">
                    🛒 BUY NOW
                  </button>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <section className="px-4 pt-5">
        <div className="rounded-2xl bg-gradient-to-r from-[#1c1026] to-pink-600 p-4 text-white shadow-lg">
          <div className="flex items-center justify-between gap-3">
            <div>
              <div className="text-lg font-black">🎁 NEW USERS ONLY!</div>
              <div className="text-sm font-bold">Get 15% OFF your first order</div>
            </div>

            <div className="rounded-xl bg-white px-4 py-2 text-center text-lg font-black text-pink-500">
              BF15
            </div>
          </div>
        </div>
      </section>

      <footer className="fixed bottom-0 left-0 right-0 z-50 rounded-t-3xl bg-white px-6 py-3 shadow-[0_-8px_25px_rgba(0,0,0,0.08)]">
        <div className="flex justify-between text-center text-xs font-bold text-neutral-500">
          <div className="text-pink-500">
            🏠
            <br />
            Home
          </div>
          <div>
            🔥
            <br />
            Trending
          </div>
          <div>
            🏷️
            <br />
            Deals
          </div>
          <div>
            👤
            <br />
            Account
          </div>
        </div>
      </footer>
    </main>
  );
}