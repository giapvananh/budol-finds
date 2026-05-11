const API_URL =
  "https://opensheet.elk.sh/1SpBNvD2CdhvnaIep3Ssputr-0EsH2pwPnrZWl0p1Ktw/Sheet1";

const FALLBACK_IMAGE =
  "https://placehold.co/600x600/f5f5f5/111?text=Product";

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
    <main className="min-h-screen bg-[#f6f7fb] text-black">
      <header className="sticky top-0 z-50 border-b border-neutral-100 bg-white/95 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center gap-4 px-4 py-4">
          <button className="text-3xl font-black">☰</button>

          <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-pink-500 to-orange-500 text-2xl font-black text-white shadow-lg">
            BF
          </div>

          <div>
            <h1 className="text-2xl font-black">Budol Finds PH</h1>
            <p className="text-sm font-black uppercase tracking-wide text-neutral-500">
              Viral Finds • Trending Now 🔥
            </p>
          </div>
        </div>
      </header>

      <section className="mx-auto max-w-7xl px-3 py-4">
        <div className="overflow-hidden rounded-[36px] bg-[#f5ede1] p-4 shadow-xl">
          <div className="relative overflow-hidden rounded-[30px] bg-gradient-to-br from-[#30261f] via-[#5b4737] to-[#1f1b18] p-6 text-white">
            <div className="absolute inset-0 bg-black/30" />

            <div className="absolute right-[-40px] top-[-40px] h-44 w-44 rounded-full bg-orange-500/70 blur-2xl" />
            <div className="absolute bottom-[-60px] left-[-60px] h-52 w-52 rounded-full bg-pink-500/40 blur-3xl" />

            <div className="relative z-10">
              <div className="inline-flex rounded-full bg-black/50 px-4 py-2 text-xs font-black">
                🔥 #1 TRENDING
              </div>

              <h2 className="mt-5 text-[46px] font-black leading-[0.9] tracking-tight md:text-7xl">
                SMART FINDS
              </h2>

              <h3 className="text-[46px] font-black leading-[0.9] tracking-tight text-orange-400 md:text-7xl">
                BETTER LIVING
              </h3>

              <p className="mt-5 max-w-md text-base font-semibold leading-relaxed text-white/90 md:text-xl">
                Top picks for your home, lifestyle & everyday essentials.
              </p>

              <a
                href="#products"
                className="mt-6 inline-flex rounded-2xl bg-gradient-to-r from-pink-500 to-orange-500 px-8 py-4 text-base font-black text-white shadow-xl"
              >
                SHOP NOW ›
              </a>
            </div>

            <div className="relative z-10 mt-10 flex items-end justify-center gap-4">
              <div className="flex h-24 w-20 items-center justify-center rounded-3xl bg-white text-5xl shadow-xl">
                ⌚
              </div>

              <div className="flex h-32 w-24 items-center justify-center rounded-3xl bg-white text-6xl shadow-xl">
                🎧
              </div>

              <div className="flex h-40 w-28 items-center justify-center rounded-3xl bg-white text-6xl shadow-xl">
                🍚
              </div>

              <div className="flex h-28 w-24 items-center justify-center rounded-3xl bg-white text-5xl shadow-xl">
                📷
              </div>
            </div>

            <div className="absolute right-3 top-3 z-20 flex h-28 w-28 flex-col items-center justify-center rounded-full bg-orange-500 text-center font-black text-white shadow-2xl">
              <span className="text-xs">UP TO</span>
              <span className="text-4xl leading-none">80%</span>
              <span className="text-sm">OFF</span>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-3">
        <div className="grid grid-cols-4 gap-2 rounded-3xl bg-white p-4 shadow-lg">
          {[
            ["🚚", "Free Shipping", "All orders"],
            ["🛡️", "Authentic", "Original"],
            ["✅", "Secure", "Safe"],
            ["💵", "COD", "Pay later"],
          ].map(([icon, title, desc]) => (
            <div key={title} className="text-center">
              <div className="text-2xl">{icon}</div>
              <div className="mt-1 text-[10px] font-black">{title}</div>
              <div className="text-[8px] text-neutral-500">{desc}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-3 py-5">
        <div className="overflow-x-auto rounded-3xl bg-white p-4 shadow-lg">
          <div className="flex min-w-max gap-5">
            {[
              ["📷", "Smart Home"],
              ["🎧", "Gadgets"],
              ["🎮", "Gaming"],
              ["🧴", "Beauty"],
              ["🍳", "Kitchen"],
              ["🛋️", "Home Living"],
              ["🟣", "All Categories"],
            ].map(([icon, name]) => (
              <div key={name} className="w-[70px] flex-shrink-0 text-center">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-orange-100 text-3xl">
                  {icon}
                </div>

                <div className="mt-2 whitespace-nowrap text-[7px] font-semibold">
                  {name}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="products" className="mx-auto max-w-7xl px-3 py-4">
        <div className="mb-5 flex items-center justify-between">
          <h2 className="text-2xl font-black">🔥 Today&apos;s Best Deals</h2>

          <a href="#products" className="text-sm font-black text-orange-600">
            View All ›
          </a>
        </div>

        {products.length === 0 && (
          <div className="rounded-3xl bg-white p-10 text-center font-bold text-neutral-500 shadow">
            No products found. Please check Google Sheet.
          </div>
        )}

        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
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
                className="overflow-hidden rounded-3xl bg-white shadow-lg"
              >
                <div className="relative aspect-square bg-neutral-100">
                  <div className="absolute left-3 top-3 z-10 rounded-xl bg-orange-500 px-3 py-1 text-[10px] font-black text-white">
                    {badge}
                  </div>

                  <img
                    src={image || FALLBACK_IMAGE}
                    alt={title || "Product"}
                    loading="lazy"
                    className="h-full w-full object-cover"
                  />
                </div>

                <div className="p-3">
                  <h3 className="line-clamp-2 min-h-[40px] text-sm font-black">
                    {title}
                  </h3>

                  <div className="mt-2 text-[10px] font-bold text-neutral-500">
                    ⭐ 4.9 • {index + 8}.2k sold
                  </div>

                  <div className="mt-2 flex items-end gap-2">
                    <span className="text-xl font-black text-orange-600">
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
                    className="mt-3 flex w-full items-center justify-center rounded-xl bg-gradient-to-r from-orange-500 to-red-500 py-3 text-sm font-black text-white"
                  >
                    Buy Now 🛒
                  </a>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <footer className="mt-10 border-t border-neutral-200 bg-white py-8 text-center text-sm font-semibold text-neutral-500">
        © Budol Finds PH — Viral Shopee Finds
      </footer>
    </main>
  );
}