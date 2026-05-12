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
  <div className="relative overflow-hidden rounded-[32px] bg-gradient-to-br from-[#1a120f] via-[#3d241c] to-[#0f0b0a] p-5 shadow-2xl">

    <div className="absolute right-[-40px] top-[-40px] h-44 w-44 rounded-full bg-orange-500 opacity-30 blur-3xl"></div>

    <div className="relative z-10 flex items-center justify-between gap-4">

      <div className="max-w-[58%]">

        <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-black/50 px-4 py-2 text-xs font-black text-white">
          🔥 TRENDING NOW
        </div>

        <h1 className="text-4xl font-black leading-[0.9] text-white">
          SMART
          <span className="block text-orange-400">
            FINDS
          </span>
        </h1>

        <p className="mt-3 text-sm font-medium leading-relaxed text-white/80">
          Viral products Filipinos are buying today.
        </p>

        <button className="mt-5 rounded-2xl bg-gradient-to-r from-pink-500 to-orange-500 px-6 py-3 text-sm font-black text-white shadow-xl">
          SHOP NOW →
        </button>

      </div>

      <div className="flex flex-1 items-end justify-end gap-3">

        <div className="overflow-hidden rounded-[28px] bg-white p-2 shadow-xl">
          <img
            src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=800&auto=format&fit=crop"
            className="h-28 w-20 rounded-2xl object-cover"
          />
        </div>

        <div className="overflow-hidden rounded-[28px] bg-white p-2 shadow-xl">
          <img
            src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=800&auto=format&fit=crop"
            className="h-36 w-24 rounded-2xl object-cover"
          />
        </div>

        <div className="overflow-hidden rounded-[28px] bg-white p-2 shadow-xl">
          <img
            src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=800&auto=format&fit=crop"
            className="h-32 w-22 rounded-2xl object-cover"
          />
        </div>

      </div>
    </div>

    <div className="absolute bottom-5 right-5 rounded-full bg-orange-500 px-5 py-4 text-center shadow-2xl">
      <div className="text-xs font-black text-white">
        UP TO
      </div>

      <div className="text-3xl font-black leading-none text-white">
        80%
      </div>

      <div className="text-sm font-black text-white">
        OFF
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
<section className="mx-auto max-w-7xl px-4 py-10">
  <div className="rounded-3xl bg-white p-6 shadow-lg">
    <h2 className="text-2xl font-black">
      Best Viral Shopee Finds in the Philippines
    </h2>

    <p className="mt-4 text-sm leading-7 text-neutral-600">
      Budol Finds PH helps Filipinos discover trending Shopee gadgets,
      smart home products, viral TikTok finds, affordable beauty items,
      gaming accessories, kitchen tools, and everyday deals updated daily.
    </p>

    <p className="mt-4 text-sm leading-7 text-neutral-600">
      Explore the latest affordable Shopee finds, wireless earbuds, smart home
      essentials, desk setup accessories, beauty must-haves, and viral products
      people are buying in the Philippines today.
    </p>

    <p className="mt-4 text-sm leading-7 text-neutral-600">
      We curate popular products from Shopee so you can quickly find useful,
      budget-friendly, and trending items without spending hours searching.
    </p>
  </div>
</section>
      <footer className="mt-10 border-t border-neutral-200 bg-white py-8 text-center text-sm font-semibold text-neutral-500">
        © Budol Finds PH — Viral Shopee Finds
      </footer>
    </main>
  );
}