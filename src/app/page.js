const API_URL =
  "https://opensheet.elk.sh/1SpBNvD2CdhvnaIep3Ssputr-0EsH2pwPnrZWl0p1Ktw/Sheet1";

const FALLBACK_IMAGE = "https://placehold.co/600x600?text=Product";

async function getProducts() {
  try {
    const res = await fetch(API_URL, {
      next: { revalidate: 300 },
    });

    if (!res.ok) return [];

    const data = await res.json();
    return Array.isArray(data) ? data : [];
  } catch {
    return [];
  }
}

function pick(item, keys) {
  for (const key of keys) {
    if (item?.[key]) return item[key];
  }
  return "";
}

export default async function Home() {
  const products = await getProducts();

  return (
    <main className="min-h-screen bg-[#f8fafc] text-neutral-950">
      <header className="sticky top-0 z-50 border-b border-neutral-100 bg-white/95 shadow-sm backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center gap-4 px-4 py-4">
          <button className="text-3xl font-black">☰</button>

          <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-orange-500 to-red-500 text-2xl font-black text-white shadow-lg">
            BF
          </div>

          <div>
            <div className="flex items-center gap-2">
              <h1 className="text-xl font-black md:text-3xl">
                Budol Finds PH
              </h1>
              <span className="rounded-full bg-orange-500 px-2 py-1 text-xs text-white">
                ✓
              </span>
            </div>
            <p className="text-sm font-semibold text-neutral-500 md:text-lg">
              Viral Finds • Trending Now 🔥
            </p>
          </div>
        </div>
      </header>

      <section className="mx-auto max-w-7xl px-3 py-4">
        <div className="overflow-hidden rounded-[32px] bg-[#f7f2ea] p-4 shadow-xl">
          <div className="relative h-[260px] overflow-hidden rounded-[28px] md:h-[340px]">
            <img
              src="https://images.pexels.com/photos/4239037/pexels-photo-4239037.jpeg?auto=compress&cs=tinysrgb&w=1200"
              alt="Cleaning product"
              className="absolute inset-0 h-full w-full object-cover"
            />

            <div className="absolute inset-0 bg-black/45" />

            <div className="relative z-10 flex h-full flex-col justify-between p-5 text-white md:p-8">
              <div>
                <div className="inline-flex rounded-full bg-black/50 px-4 py-2 text-xs font-black backdrop-blur">
                  🔥 #1 TRENDING
                </div>

                <h2 className="mt-4 text-[42px] font-black leading-[0.9] tracking-tight md:text-7xl">
                  CLEAN EASY
                </h2>

                <h3 className="text-[46px] font-black leading-[0.9] tracking-tight text-yellow-300 md:text-8xl">
                  EVERYWHERE
                </h3>

                <p className="mt-4 max-w-md text-sm font-semibold leading-relaxed text-white/90 md:text-lg">
                  Perfect for daily home cleaning, aesthetic rooms, and cozy
                  living spaces.
                </p>
              </div>

              <div className="flex items-end justify-between">
                <a
                  href="#products"
                  className="rounded-2xl bg-gradient-to-r from-pink-500 to-orange-500 px-6 py-3 text-sm font-black text-white shadow-xl md:text-base"
                >
                  SHOP NOW ›
                </a>

                <div className="flex h-24 w-24 flex-col items-center justify-center rounded-full bg-orange-500 text-center font-black shadow-2xl md:h-32 md:w-32">
                  <span className="text-3xl leading-none md:text-5xl">
                    80%
                  </span>
                  <span className="text-sm md:text-lg">OFF</span>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-4 flex justify-center gap-2">
            {[0, 1, 2, 3, 4].map((dot, index) => (
              <span
                key={dot}
                className={`h-3 w-3 rounded-full ${
                  index === 0 ? "bg-orange-500" : "bg-neutral-300"
                }`}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-3">
        <div className="grid grid-cols-4 gap-2 rounded-3xl bg-white p-3 shadow-lg">
          {[
            ["🚚", "Free Shipping", "All orders"],
            ["🛡️", "Authentic", "Original"],
            ["✅", "Secure", "Safe"],
            ["💵", "COD", "Pay later"],
          ].map(([icon, title, desc]) => (
            <div key={title} className="flex flex-col items-center text-center">
              <div className="text-2xl md:text-3xl">{icon}</div>

              <div className="mt-1 text-[11px] font-black leading-tight md:text-sm">
                {title}
              </div>

              <div className="text-[10px] font-medium text-neutral-500 md:text-xs">
                {desc}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-3 py-5">
        <div className="grid grid-cols-4 gap-3 rounded-3xl bg-white p-5 shadow-lg md:grid-cols-7">
          {[
            ["📷", "Smart Home"],
            ["🎧", "Gadgets"],
            ["🎮", "Gaming"],
            ["🧴", "Beauty"],
            ["🍳", "Kitchen"],
            ["🛋️", "Home Living"],
            ["🟣", "All Categories"],
          ].map(([icon, name]) => (
            <div key={name} className="text-center">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-orange-100 text-2xl md:h-20 md:w-20 md:text-4xl">
                {icon}
              </div>
              <div className="mt-2 text-xs font-black md:text-base">{name}</div>
            </div>
          ))}
        </div>
      </section>

      <section id="products" className="mx-auto max-w-7xl px-3 py-4">
        <div className="mb-5 flex items-center justify-between">
          <h2 className="text-2xl font-black md:text-4xl">
            🔥 Today&apos;s Best Deals
          </h2>

          <a href="#products" className="font-black text-orange-600">
            View All ›
          </a>
        </div>

        {products.length === 0 && (
          <div className="rounded-3xl bg-white p-10 text-center font-bold text-neutral-500 shadow">
            No products found. Please check Google Sheet.
          </div>
        )}

        <div className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">
          {products.map((item, index) => {
            const title = pick(item, ["title", "tiêu đề"]);
            const price = pick(item, ["price", "giá"]);
            const oldPrice = pick(item, ["old_price", "giá cũ"]);
            const image = pick(item, ["image", "hình ảnh"]);
            const badge = pick(item, ["badge", "huy hiệu"]) || "HOT";
            const link = pick(item, ["link", "shopee_link", "liên kết Shopee"]);

            return (
              <article
                key={`${title}-${index}`}
                className="overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-neutral-100"
              >
                <div className="relative aspect-square bg-neutral-100">
                  <div className="absolute left-3 top-3 z-10 rounded-xl bg-orange-500 px-3 py-1 text-xs font-black text-white">
                    {badge}
                  </div>

                  <img
                    src={image || FALLBACK_IMAGE}
                    alt={title || "Product"}
                    loading="lazy"
                    className="h-full w-full object-cover"
                  />
                </div>

                <div className="p-3 md:p-4">
                  <h3 className="line-clamp-2 min-h-[44px] text-sm font-black md:text-base">
                    {title}
                  </h3>

                  <div className="mt-2 text-xs font-bold text-neutral-500">
                    ⭐ 4.9 | {index + 8}.2k sold
                  </div>

                  <div className="mt-3 flex items-center gap-2">
                    <span className="text-xl font-black text-orange-600 md:text-2xl">
                      {price}
                    </span>

                    {oldPrice && (
                      <span className="text-xs text-neutral-400 line-through">
                        {oldPrice}
                      </span>
                    )}
                  </div>

                  <a
                    href={link || "#"}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 flex w-full items-center justify-center rounded-xl bg-gradient-to-r from-orange-500 to-red-500 py-3 text-sm font-black text-white"
                  >
                    Buy Now 🛒
                  </a>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-3 py-8">
        <div className="rounded-3xl bg-gradient-to-r from-orange-500 to-red-500 p-6 text-white shadow-xl">
          <div className="flex flex-col justify-between gap-4 md:flex-row md:items-center">
            <div className="text-3xl font-black">⚡ FLASH SALE</div>

            <div className="flex gap-3 text-center">
              {["02", "45", "18"].map((time, i) => (
                <div key={i} className="rounded-2xl bg-black/25 px-5 py-3">
                  <div className="text-3xl font-black">{time}</div>
                  <div className="text-xs font-bold">
                    {["HRS", "MINS", "SECS"][i]}
                  </div>
                </div>
              ))}
            </div>

            <div className="font-bold">
              Hurry up! Deals you don&apos;t want to miss
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-neutral-200 bg-white py-8 text-center text-sm font-semibold text-neutral-500">
        © Budol Finds PH — Products loaded from Google Sheet
      </footer>
    </main>
  );
}