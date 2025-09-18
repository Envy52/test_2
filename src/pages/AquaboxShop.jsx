import { Info } from "lucide-react";
import { useTranslation } from "react-i18next";

export default function AquaboxShop() {
  const { t } = useTranslation();

  const products = [
    {
      id: 1,
      title: t("products.rs27.title"),
      year: t("products.rs27.year"),
      description: t("products.rs27.description"),
      image: "/images/aquabox300.png",
    },
    {
      id: 2,
      title: t("products.rs28.title"),
      year: t("products.rs28.year"),
      description: t("products.rs28.description"),
      image: "/images/aquaboxnano.png",
    },
  ];

  return (
    <section className="py-20 px-4 relative overflow-hidden bg-slate-950 text-white">
      <div className="absolute -top-24 -left-24 w-80 h-80 bg-cyan-500/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>

      <div className="relative max-w-7xl mx-auto grid gap-10 md:grid-cols-2 lg:grid-cols-3">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-slate-900/70 backdrop-blur-xl border border-white/10 rounded-3xl p-6 flex flex-col items-center text-center shadow-xl hover:shadow-purple-500/20 transition-shadow duration-300"
          >
            <img
              src={product.image}
              alt={product.title}
              className="w-full h-auto max-h-[450px] object-contain mb-4 rounded-2xl shadow-lg"
            />
            <h2 className="text-xl font-bold text-white mb-2 flex items-center justify-center gap-2">
              {product.title} <Info size={18} />
            </h2>
            <p className="text-indigo-300 text-sm mb-2">{product.year}</p>
            <p className="text-gray-300 mb-4">{product.description}</p>
            <button className="bg-gradient-to-r from-cyan-400 to-purple-500 text-white font-bold py-2 px-6 rounded-full shadow-md hover:scale-105 transition-transform duration-300">
              {t("products.buttonDetails")}
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
