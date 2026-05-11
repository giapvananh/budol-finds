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
              Viral Shopee Deals 🔥
            </p>
          </div>
        </div>
      </header>

      <section className="mx-auto max-w-7xl px-3 py-5">
        <div className="relative overflow-hidden rounded-[30px] bg-gradient-to-br from-orange-100 via-orange-50 to-white p-6 shadow-xl md:p-12">
          <div className="grid items-center gap-8 md:grid-cols-2">
            <div className="relative z-10">
              <div className="mb-5 inline-flex rounded-full bg-white px-5 py-3 text-sm font-black text-orange-600 shadow-lg">
                🔥 VIRAL SHOPEE FINDS
              </div>

              <h2 className="text-5xl font-black leading-[0.95] tracking-tight md:text-7xl">
                Smart Home{" "}
                <span className="block bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
                  Deals
                </span>
              </h2>

              <p className="mt-6 max-w-lg text-lg font-semibold leading-relaxed text-neutral-600 md:text-xl">
                Trending gadgets everyone in the Philippines is adding to cart
                right now.
              </p>

              <a
                href="#products"
                className="mt-7 inline-flex rounded-2xl bg-gradient-to-r from-orange-500 to-red-500 px-7 py-4 text-base font-black text-white shadow-xl"
              >
                🛍️ SHOP BEST DEALS
              </a>

              <div className="mt-7 flex items-center gap-3">
                <div className="flex -space-x-2">
                  {["A", "B", "C", "D"].map((x) => (
                    <div
                      key={x}
                      className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-white bg-orange-200 text-xs font-black"
                    >
                      {x}
                    </div>
                  ))}
                </div>
                <div className="flex items-center gap-2 text-sm font-bold text-neutral-700">
                  <span className="h-3 w-3 rounded-full bg-green-500" />
                  12,458+ people are shopping now
                </div>
              </div>
            </div>

            <div className="relative hidden min-h-[420px] md:block">
              <div className="absolute right-0 top-0 h-[380px] w-[380px] rounded-full bg-orange-300/50" />
              <div className="absolute right-4 top-10 text-5xl">⚡</div>
              <div className="absolute left-12 top-44 text-4xl">✨</div>

              <img
                className="absolute right-12 top-0 h-36 w-36 rounded-3xl object-cover shadow-xl"
                src="https://images.pexels.com/photos/8566473/pexels-photo-8566473.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Camera"
              />

              <img
                className="absolute bottom-16 left-8 h-64 w-64 rounded-full object-cover shadow-2xl"
                src="https://images.pexels.com/photos/4108726/pexels-photo-4108726.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Robot vacuum"
              />

              <img
                className="absolute bottom-8 right-0 h-80 w-56 rounded-[32px] object-cover shadow-2xl"
                src="https://images.pexels.com/photos/4108279/pexels-photo-4108279.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Air purifier"
              />

              <div className="absolute bottom-10 right-28 flex h-40 w-40 flex-col items-center justify-center rounded-full bg-gradient-to-br from-orange-500 to-red-500 text-white shadow-2xl">
                <span className="text-lg font-black">UP TO</span>
                <span className="text-6xl font-black leading-none">70%</span>
                <span className="text-xl font-black">OFF</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-3">
        <div className="grid grid-cols-2 gap-3 rounded-3xl bg-white p-5 shadow-lg md:grid-cols-4">
          {[
            ["🚚", "Free Shipping", "On all orders"],
            ["🛡️", "100% Authentic", "Original products"],
            ["✅", "Secure Checkout", "Safe & reliable"],
            ["💵", "COD Available", "Pay when you receive"],
          ].map(([icon, title, desc]) => (
            <div key={title} className="flex items-center gap-3">
              <div className="text-3xl">{icon}</div>
              <div>
                <div className="font-black">{title}</div>
                <div className="text-sm font-medium text-neutral-500">
                  {desc}
                </div>
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
            <div className="font-bold">Hurry up! Deals you don&apos;t want to miss</div>
          </div>
        </div>
      </section>

      <footer className="border-t border-neutral-200 bg-white py-8 text-center text-sm font-semibold text-neutral-500">
        © Budol Finds PH — Products loaded from Google Sheet
      </footer>
    </main>
  );
}