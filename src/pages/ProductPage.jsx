import { useTranslation } from "react-i18next";
import { Filter, ShieldCheck, LifeBuoy, Users } from "lucide-react";

export default function ProductPage() {
  const { t } = useTranslation();

  const features = [
    { icon: <Filter size={36} className="text-cyan-400" />, title: t("productPage.features.feature1.title"), description: t("productPage.features.feature1.description") },
    { icon: <ShieldCheck size={36} className="text-cyan-400" />, title: t("productPage.features.feature2.title"), description: t("productPage.features.feature2.description") },
    { icon: <LifeBuoy size={36} className="text-cyan-400" />, title: t("productPage.features.feature3.title"), description: t("productPage.features.feature3.description") },
    { icon: <Users size={36} className="text-cyan-400" />, title: t("productPage.features.feature4.title"), description: t("productPage.features.feature4.description") },
  ];

  return (
    <div className="bg-slate-950 text-white py-20 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-10 left-1/4 w-72 h-72 bg-cyan-500/30 blur-3xl rounded-full animate-pulse"></div>
        <div className="absolute bottom-10 right-1/4 w-96 h-96 bg-purple-500/30 blur-3xl rounded-full animate-pulse delay-700"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <section className="bg-slate-900/70 backdrop-blur-xl border border-white/10 rounded-3xl p-8 md:p-12 mb-24 shadow-xl">
          <div className="flex flex-col md:flex-row justify-between items-start">
            <div className="md:w-2/3">
              <div className="flex items-center gap-3 mb-4">
                <span className="w-3 h-3 bg-cyan-400 rounded-full animate-pulse"></span>
                <p className="font-semibold text-cyan-400 tracking-wider">{t("productPage.label")}</p>
              </div>
              <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight drop-shadow-[0_4px_8px_rgba(0,0,0,0.6)]">
                {t("productPage.heading")}
              </h1>
            </div>
            <div className="md:w-1/3 mt-8 md:mt-2 md:pl-8">
              <p className="text-gray-300 text-lg drop-shadow-[0_2px_6px_rgba(0,0,0,0.5)]">{t("productPage.subheading")}</p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-4xl font-extrabold text-center mb-12 bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 bg-clip-text text-transparent">
            {t("productPage.features.heading")}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-slate-900/70 backdrop-blur-xl p-8 rounded-3xl border border-white/10 hover:border-cyan-400 transition-all duration-300 shadow-xl hover:shadow-cyan-500/20 transform hover:-translate-y-2 group">
                <div className="mb-5 transform transition-transform duration-300 group-hover:scale-110">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-gray-300 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
