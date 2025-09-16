import React, { useState } from "react";
import AnimatedNumber from "./AnimatedNumber";
import { PieChart, TrendingUp, Clock, Donut, BarChart, Circle, AreaChart } from "lucide-react";

const FeaturesSection = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  const cards = [
    { id: "n90", number: 90, unit: "%", title: "Рынка Узбекистана свободно", icon: <PieChart size={60} className="text-cyan-400 opacity-40" /> },
    { id: "n41m", number: 41000000, unit: "сум", title: "Низкий порог входа в бизнес", icon: <TrendingUp size={60} className="text-purple-400 opacity-40" /> },
    { id: "n247", number: 24, number2: 7, unit: "", title: "Аппарат работает круглосуточно", icon: <Clock size={60} className="text-cyan-400 opacity-40" /> },
    { id: "n80", number: 80, unit: "%", title: "Годовых — доход бизнеса", icon: <Donut size={60} className="text-purple-400 opacity-40" /> },
    { id: "n1_8m", number: 1800000, unit: "сум", title: "Средний месячный доход с 1 аппарата", icon: <AreaChart size={60} className="text-cyan-400 opacity-40" /> },
    { id: "n18m", number: 18000000, unit: "сум", title: "Прибыль в месяц в сети 10 аппаратов", icon: <BarChart size={60} className="text-purple-400 opacity-30" />, colSpan: "lg:col-span-2" },
    { id: "nMinVznos", number: 100, unit: "%", title: "Минимальный взнос", icon: <Circle size={60} className="text-cyan-400 opacity-40" /> },
    { id: "nRassrochka", number: 14, unit: "%", title: "Рассрочка в кредит", subtitle: "Выберите нас поставщиком в smart-market.uz", button: "Узнать подробнее", colSpan: "lg:col-span-3" },
  ];

  return (
    <section className="relative py-20 px-4 bg-slate-950 overflow-hidden">
      {/* Aurora glow - 9 шаров */}
      <div className="absolute inset-0">
        <div className="absolute w-72 h-72 bg-cyan-500/20 blur-3xl rounded-full top-10 left-10 animate-pulse"></div>
        <div className="absolute w-96 h-96 bg-purple-500/20 blur-3xl rounded-full bottom-10 right-10 animate-pulse delay-500"></div>
        <div className="absolute w-72 h-72 bg-blue-400/20 blur-3xl rounded-full top-20 left-1/2 -translate-x-1/2 animate-pulse delay-200"></div>
        <div className="absolute w-80 h-80 bg-pink-500/15 blur-3xl rounded-full bottom-20 left-1/2 -translate-x-1/2 animate-pulse delay-700"></div>
        <div className="absolute w-60 h-60 bg-purple-400/20 blur-3xl rounded-full top-0 right-20 animate-pulse delay-300"></div>
        <div className="absolute w-64 h-64 bg-cyan-300/15 blur-3xl rounded-full top-1/3 left-1/4 animate-pulse delay-400"></div>
        <div className="absolute w-72 h-72 bg-blue-300/20 blur-3xl rounded-full bottom-1/4 right-1/3 animate-pulse delay-600"></div>
        <div className="absolute w-56 h-56 bg-purple-500/10 blur-3xl rounded-full top-2/3 right-1/5 animate-pulse delay-200"></div>
        <div className="absolute w-80 h-80 bg-cyan-400/15 blur-3xl rounded-full bottom-0 left-0 animate-pulse delay-500"></div>
      </div>

      <div className="container mx-auto relative z-10">
        {/* Заголовок */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-extrabold text-white">
            Что мы предлагаем?
          </h2>
          <p className="mt-4 text-lg text-slate-300 max-w-3xl mx-auto">
            Поможем вам открыть бизнес по продаже питьевой воды в вашем городе: оборудование, бесплатное обучение, консультации по продвижению, бизнес-сообщество!
          </p>
        </div>

        {/* Сетка карточек */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cards.map((card) => (
            <div
              key={card.id}
              className={`relative p-6 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 flex flex-col justify-between shadow-lg hover:shadow-cyan-500/30 transition-transform hover:-translate-y-1 ${card.colSpan || ""}`}
              onMouseEnter={() => setHoveredCard(card.id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div>
                <div className="flex items-baseline gap-2">
                  <span className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                    <AnimatedNumber to={card.number} from={0} startAnimation={hoveredCard === card.id} />
                  </span>
                  {card.number2 && (
                    <>
                      <span className="text-4xl md:text-5xl font-bold text-cyan-400">/</span>
                      <span className="text-4xl md:text-5xl font-bold text-cyan-400">
                        <AnimatedNumber to={card.number2} from={0} startAnimation={hoveredCard === card.id} />
                      </span>
                    </>
                  )}
                  <span className="text-4xl md:text-5xl font-bold text-cyan-400 ml-1">{card.unit}</span>
                </div>
                <p className="mt-2 text-xl font-semibold text-slate-200">{card.title}</p>
                {card.subtitle && <p className="mt-1 text-slate-400">{card.subtitle}</p>}
              </div>
              {card.icon && <div className="mt-4">{card.icon}</div>}
              {card.button && (
                <a
                  href="#"
                  className="mt-6 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-bold py-3 px-6 rounded-full self-start hover:opacity-90 transition"
                >
                  {card.button}
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
