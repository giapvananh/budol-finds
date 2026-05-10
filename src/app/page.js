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
    <main className="min-h-screen bg-gradient-to-br from-orange-50 to-slate-100 text-neutral-900">
      <div className="mx-auto max-w-[1320px] px-5 py-7 pb-16">
        <header className="mb-7 flex items-center justify-between gap-5 max-md:flex-col max-md:items-start">
          <div className="flex items-center gap-4">
            <div className="flex h-[58px] w-[58px] items-center justify-center rounded-[18px] bg-gradient-to-br from-orange-500 to-[#ee4d2d] text-2xl font-black text-white shadow-xl">
              BF
            </div>

            <div>
              <h1 className="text-[28px] font-black leading-none">
                Budol Finds PH
              </h1>
              <p className="mt-1 text-[13px] font-semibold text-neutral-500">
                Trending Shopee Home Deals
              </p>
            </div>
          </div>

          <a
            href="#products"
            className="rounded-full bg-gradient-to-br from-orange-500 to-[#ee4d2d] px-6 py-4 text-sm font-extrabold text-white shadow-lg"
          >
            🛒 Shop Deals
          </a>
        </header>

        <section className="relative grid min-h-[520px] grid-cols-[1.1fr_0.9fr] items-center gap-8 overflow-hidden rounded-[36px] bg-gradient-to-br from-orange-100 to-orange-200 px-[60px] py-[70px] shadow-2xl max-lg:grid-cols-1 max-md:px-6 max-md:py-10">
          <div className="relative z-10">
            <div className="mb-7 inline-flex rounded-full bg-white px-5 py-3 text-sm font-extrabold text-[#ee4d2d] shadow-lg">
              🔥 Viral Shopee Finds
            </div>

            <h2 className="mb-5 text-[74px] font-black leading-none max-md:text-5xl">
              Smart Home <span className="text-[#ee4d2d]">Deals</span>
            </h2>

            <p className="mb-8 max-w-xl text-[22px] font-medium leading-relaxed text-neutral-700 max-md:text-[17px]">
              Trending gadgets everyone in the Philippines is adding to cart
              right now.
            </p>

            <a
              href="#products"
              className="inline-flex rounded-[18px] bg-gradient-to-br from-orange-500 to-[#ee4d2d] px-8 py-5 text-[17px] font-black text-white shadow-xl"
            >
              🛍️ SHOP BEST DEALS
            </a>
          </div>

          <div className="relative h-full min-h-[420px] max-lg:hidden">
            <div className="absolute right-[-170px] top-[-140px] h-[640px] w-[640px] rounded-full bg-gradient-to-br from-orange-300 to-orange-500 opacity-90" />

            <img
              className="absolute left-5 top-10 h-[230px] w-[230px] rounded-[30px] object-cover shadow-xl"
              src="https://images.pexels.com/photos/356056/pexels-photo-356056.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Smart gadget"
            />

            <img
              className="absolute right-10 top-20 h-[340px] w-[280px] rounded-[30px] object-cover shadow-xl"
              src="https://images.pexels.com/photos/4108279/pexels-photo-4108279.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Home product"
            />

            <img
              className="absolute bottom-2 left-[120px] h-[220px] w-[220px] rounded-[30px] object-cover shadow-xl"
              src="https://images.pexels.com/photos/4219862/pexels-photo-4219862.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Trending product"
            />

            <div className="absolute bottom-8 right-20 flex h-[170px] w-[170px] flex-col items-center justify-center rounded-[36px] bg-gradient-to-br from-orange-500 to-[#ee4d2d] text-white shadow-xl">
              <small className="text-lg font-extrabold">UP TO</small>
              <strong className="text-[68px] font-black leading-none">
                70%
              </strong>
              <span className="text-xl font-extrabold">OFF</span>
            </div>
          </div>
        </section>

        <div className="my-10 flex items-center justify-between">
          <h2 className="text-[42px] font-black max-md:text-3xl">
            Today&apos;s Best Deals 🔥
          </h2>

          <a
            href="#products"
            className="rounded-full bg-gradient-to-br from-orange-500 to-[#ee4d2d] px-6 py-4 text-sm font-extrabold text-white shadow-lg max-md:hidden"
          >
            View All Deals →
          </a>
        </div>

        <section
          id="products"
          className="grid grid-cols-[repeat(auto-fit,minmax(260px,1fr))] gap-7 max-md:grid-cols-2 max-md:gap-3"
        >
          {products.length === 0 && (
            <div className="col-span-full p-12 text-center font-bold text-neutral-500">
              No products found. Please check Google Sheet.
            </div>
          )}

          {products.map((item, index) => {
            const title = pick(item, ["title", "tiêu đề"]);
            const price = pick(item, ["price", "giá"]);
            const oldPrice = pick(item, ["old_price", "giá cũ"]);
            const image = pick(item, ["image", "hình ảnh"]);
            const badge = pick(item, ["badge", "huy hiệu"]) || "HOT";
            const link = pick(item, [
              "link",
              "shopee_link",
              "liên kết Shopee",
            ]);

            return (
              <article
                key={`${title}-${index}`}
                className="overflow-hidden rounded-[28px] bg-white shadow-xl transition hover:-translate-y-2 hover:scale-[1.02] max-md:rounded-[18px]"
              >
                <div className="relative">
                  <div className="absolute left-4 top-4 z-10 rounded-full bg-gradient-to-br from-orange-500 to-[#ee4d2d] px-4 py-2 text-xs font-black text-white">
                    🔥 {badge}
                  </div>

                  <img
                    className="block h-[250px] w-full bg-neutral-200 object-cover max-md:h-[170px]"
                    src={image || FALLBACK_IMAGE}
                    alt={title || "Product"}
                    loading="lazy"
                  />
                </div>

                <div className="p-5 max-md:p-3">
                  <h3 className="min-h-[50px] text-base font-extrabold leading-normal max-md:min-h-10 max-md:text-[13px]">
                    {title}
                  </h3>

                  <div className="mt-3 flex items-center justify-between gap-2">
                    <div className="text-[13px] font-semibold text-neutral-500 max-md:text-[11px]">
                      ⭐ 4.9 • {index + 8}.2k sold
                    </div>

                    <div className="rounded-lg bg-yellow-300 px-2 py-1 text-[11px] font-black text-neutral-900 max-md:text-[9px]">
                      SAVE 33%
                    </div>
                  </div>

                  <div className="mt-4 flex items-end gap-3">
                    <span className="text-[26px] font-black text-[#ee4d2d] max-md:text-lg">
                      {price}
                    </span>

                    {oldPrice && (
                      <span className="text-[13px] text-neutral-400 line-through max-md:text-[11px]">
                        {oldPrice}
                      </span>
                    )}
                  </div>

                  <a
                    href={link || "#"}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-5 flex w-full items-center justify-center rounded-[18px] bg-gradient-to-br from-orange-500 to-[#ee4d2d] p-4 text-[15px] font-black text-white transition hover:scale-[1.03] max-md:rounded-[13px] max-md:p-3 max-md:text-xs"
                  >
                    🛒 BUY NOW
                  </a>
                </div>
              </article>
            );
          })}
        </section>

        <footer className="mt-10 text-center text-[13px] text-neutral-500">
          © Budol Finds PH — Products loaded from Google Sheet
        </footer>
      </div>
    </main>
  );
}