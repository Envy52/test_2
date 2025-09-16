import React from "react";
import { Waves } from "lucide-react";
import { useTranslation } from "react-i18next";

const InfoSection = () => {
  const { t } = useTranslation();

  return (
    <section className="relative pt-12 pb-20 px-4 bg-slate-950 overflow-hidden">
      <div className="absolute -top-20 left-1/4 w-80 h-80 bg-cyan-400/25 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute -bottom-24 right-1/4 w-96 h-96 bg-purple-500/25 rounded-full blur-3xl animate-pulse delay-700"></div>

      <div className="container mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">
          <div className="bg-slate-900/70 backdrop-blur-xl border border-white/10 rounded-3xl p-12 shadow-xl flex flex-col justify-center hover:shadow-cyan-400/30 transition-shadow duration-300">
            <h2 className="text-4xl sm:text-5xl font-extrabold text-white leading-tight drop-shadow-lg">
              {t("info.title")}
            </h2>
            <p className="mt-4 text-lg text-slate-300 leading-relaxed">
              {t("info.description")}
            </p>
          </div>

          <div className="relative rounded-3xl p-12 bg-slate-900/70 backdrop-blur-xl border border-white/10 shadow-xl flex flex-col justify-center items-center hover:shadow-cyan-400/40 transition-shadow duration-300">
            <div className="absolute -top-8 -left-8 w-40 h-40 bg-cyan-400/20 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute -bottom-8 -right-8 w-56 h-56 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-700"></div>

            <div className="bg-gradient-to-r from-cyan-400 to-purple-500 p-6 rounded-full shadow-lg flex items-center justify-center mb-6">
              <Waves size={80} className="text-white drop-shadow-lg" />
            </div>

            <span className="text-5xl sm:text-6xl font-extrabold text-white mt-4 tracking-wide drop-shadow-[0_4px_12px_rgba(0,0,0,0.5)]">
              AQUABOX
            </span>

            <span className="text-xl sm:text-2xl font-medium text-gray-300 tracking-[0.25em] mt-4 drop-shadow-[0_2px_6px_rgba(0,0,0,0.5)]">
              CLEAR WATER
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InfoSection;
