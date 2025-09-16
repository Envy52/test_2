import React from "react";
import { Mountain } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative pt-8 px-4">
      <div className="container mx-auto mb-20">
        <div className="relative w-full h-[600px] rounded-3xl overflow-hidden shadow-2xl bg-gradient-to-br from-indigo-900 via-slate-900 to-purple-900">
          <div className="absolute inset-0">
            <div className="absolute top-0 left-0 w-72 h-72 bg-cyan-500/30 blur-3xl rounded-full animate-pulse"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/30 blur-3xl rounded-full animate-pulse delay-700"></div>
            <div className="absolute inset-0 bg-black/60 mix-blend-overlay"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 via-blue-500/10 to-purple-600/20 mix-blend-overlay"></div>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(56,189,248,0.2),transparent_60%)]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(168,85,247,0.25),transparent_60%)]" />
          </div>

          <div className="relative z-10 h-full flex flex-col justify-between p-12 text-white">
            <div>
              <div className="inline-flex items-center space-x-3 bg-gradient-to-r from-cyan-500/30 to-purple-600/30 backdrop-blur-md px-4 py-2 rounded-full border border-white/10 shadow-lg">
                <Mountain size={20} className="text-cyan-300" />
                <span className="font-semibold text-sm">
                  Свежесть Тянь-Шаня рядом с домом
                </span>
              </div>
            </div>

            <div>
              <h1 className="text-5xl sm:text-6xl font-extrabold leading-tight drop-shadow-[0_4px_8px_rgba(0,0,0,0.6)]">
                Первый в Узбекистане
                <br />
                <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                  производитель аппаратов
                </span>
                <br />
                по очистке воды
              </h1>
              <p className="mt-6 text-xl text-slate-200 drop-shadow-[0_2px_6px_rgba(0,0,0,0.7)] max-w-2xl">
                Низкий порог входа в бизнес по продаже воды
              </p>

              <div className="mt-8">
                <a
                  href="#"
                  className="px-6 py-3 rounded-full font-semibold text-lg bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 shadow-[0_0_20px_rgba(56,189,248,0.5)] hover:shadow-[0_0_35px_rgba(168,85,247,0.6)] transition-all duration-300"
                >
                  Узнать больше
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
