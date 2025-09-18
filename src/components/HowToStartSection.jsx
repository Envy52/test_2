import React from "react"; 
import { Phone, FileText, ShoppingCart, Wrench, DollarSign } from "lucide-react";
import { useTranslation } from "react-i18next";

const HowToStartSection = () => {
  const { t } = useTranslation();

  const steps = [
    { icon: <Phone size={24} />, text: t("howToStart.step1") },
    { icon: <FileText size={24} />, text: t("howToStart.step2") },
    { icon: <ShoppingCart size={24} />, text: t("howToStart.step3") },
    { icon: <Wrench size={24} />, text: t("howToStart.step4") },
    { icon: <DollarSign size={24} />, text: t("howToStart.step5") },
  ];

  return (
    <section className="py-20 px-4 relative overflow-hidden bg-slate-950">
      <div className="absolute -top-24 -left-24 w-80 h-80 bg-cyan-400/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>

      <div className="relative container mx-auto bg-slate-900/70 backdrop-blur-xl border border-white/10 rounded-3xl p-10 sm:p-14 shadow-xl">
        <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-12 drop-shadow-lg text-center lg:text-left">
          {t("howToStart.title")}
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="flex flex-col space-y-8">
            {steps.map((step, index) => (
              <div
                key={index}
                className="flex items-center space-x-5 group hover:translate-x-2 transition-transform"
              >
                <span className="text-3xl font-extrabold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent drop-shadow-md">
                  {index + 1}
                </span>
                <div className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white rounded-full p-3 flex-shrink-0 shadow-md">
                  {step.icon}
                </div>
                <span className="text-xl font-semibold text-slate-200">
                  {step.text}
                </span>
              </div>
            ))}
          </div>

          <div className="flex justify-center lg:justify-end">
            <img
              src="/images/hero.jpg" 
              alt={t("howToStart.imageAlt")}
              className="rounded-2xl w-full max-w-md shadow-lg shadow-cyan-500/20 hover:scale-[1.02] transition-transform duration-300"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowToStartSection;
