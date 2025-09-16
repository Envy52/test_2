import React from "react";
import { ArrowUpRight } from "lucide-react";

const ServiceProducts = () => {
  return (
    <section className="py-20 px-4 relative overflow-hidden bg-slate-950">
      {/* Aurora lights */}
      <div className="absolute inset-0">
        <div className="absolute -top-24 -left-24 w-80 h-80 bg-cyan-400/25 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-purple-500/25 rounded-full blur-3xl animate-pulse"></div>
      </div>

      <div className="relative container mx-auto bg-slate-900/70 backdrop-blur-xl border border-white/10 rounded-3xl p-10 sm:p-14 shadow-xl flex flex-col md:flex-row gap-8 items-start">
        {/* Левая часть с карточкой */}
        <div className="flex-grow relative z-10 space-y-6">
          <div>
            <h2 className="text-4xl sm:text-5xl font-extrabold text-white mb-4 drop-shadow-lg">
              Товары для обслуживания
            </h2>
            <a
              href="#"
              className="text-cyan-400 font-semibold hover:text-cyan-300 transition-colors"
            >
              Смотреть все →
            </a>
          </div>

          <div className="bg-slate-800/70 backdrop-blur-sm rounded-2xl shadow-lg overflow-hidden hover:shadow-cyan-500/20 hover:-translate-y-2 transition-all duration-300 max-w-md">
            <img
              src="https://via.placeholder.com/400x300"
              alt="Aquabox-2024"
              className="w-full h-64 object-cover"
            />
            <div className="p-6">
              <h3 className="text-2xl font-bold text-white mb-3">
                Aquabox-2024
              </h3>
              <p className="text-gray-300 leading-relaxed">
                Умный вендинговый аппарат для воды — автоматизированное
                устройство, позволяющее быстро наливать воду, оплачивая через
                популярные платёжные системы. Подключён к интернету,
                поддерживает мониторинг, учёт транзакций и удалённое управление.
                Идеально для дворов, бизнес-центров и жилых районов.
              </p>
            </div>
          </div>
        </div>

        {/* Правая часть с кнопкой */}
        <div className="flex-shrink-0 flex items-start relative z-10">
          <button
            className="bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 
             hover:from-cyan-400 hover:via-blue-400 hover:to-purple-500 
             text-white font-bold py-4 px-8 rounded-full 
             flex items-center space-x-3 
             transition-all duration-300 
             shadow-[0_0_20px_rgba(56,189,248,0.5)] 
             hover:shadow-[0_0_35px_rgba(168,85,247,0.6)]"
          >
            <span>Заказать аппарат</span>
            <ArrowUpRight size={22} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default ServiceProducts;
