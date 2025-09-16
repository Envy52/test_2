import React, { useEffect, useRef, useState } from "react";
import AnimatedNumber from "./AnimatedNumber";
import { PieChart, TrendingUp, Clock, Donut, BarChart, Circle, AreaChart } from "lucide-react";
import { useTranslation } from "react-i18next";

const FeaturesSection = () => {
  const [startAnimation, setStartAnimation] = useState(false);
  const sectionRef = useRef(null);
  const { t } = useTranslation();

  const cards = [
    { id: "n90", number: 90, unit: "%", title: t("features.marketFree"), icon: <PieChart size={60} className="text-cyan-400 opacity-40" /> },
    { id: "n41m", number: 41000000, unit: "сум", title: t("features.lowEntry"), icon: <TrendingUp size={60} className="text-purple-400 opacity-40" /> },
    { id: "n247", number: 24, number2: 7, unit: "", title: t("features.works247"), icon: <Clock size={60} className="text-cyan-400 opacity-40" /> },
    { id: "n80", number: 80, unit: "%", title: t("features.yearlyIncome"), icon: <Donut size={60} className="text-purple-400 opacity-40" /> },
    { id: "n1_8m", number: 1800000, unit: "сум", title: t("features.avgMonthlyIncome"), icon: <AreaChart size={60} className="text-cyan-400 opacity-40"/>, colSpan: "lg:col-span-2"  },
    { id: "n18m", number: 18000000, unit: "сум", title: t("features.profit10Machines"), icon: <BarChart size={60} className="text-purple-400 opacity-30" />, colSpan: "lg:col-span-2" },
    { id: "nMinVznos", number: 100, unit: "%", title: t("features.minContribution"), icon: <Circle size={60} className="text-cyan-400 opacity-40" />, reverse: true },
    { id: "nRassrochka", number: 14, unit: "%", title: t("features.creditInstallment"), subtitle: t("features.creditSubtitle"), button: t("features.learnMore"), colSpan: "lg:col-span-3", reverse: true },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setStartAnimation(true);
          observer.disconnect(); 
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="relative py-20 px-4 bg-slate-950 overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute w-72 h-72 bg-cyan-500/20 blur-3xl rounded-full top-10 left-10 animate-pulse"></div>
        <div className="absolute w-96 h-96 bg-purple-500/20 blur-3xl rounded-full bottom-10 right-10 animate-pulse delay-500"></div>
      </div>

      <div className="container mx-auto relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-extrabold text-white">{t("features.title")}</h2>
          <p className="mt-4 text-lg text-slate-300 max-w-3xl mx-auto">
            {t("features.description")}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cards.map((card) => (
            <div
              key={card.id}
              className={`relative p-6 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 flex flex-col justify-between shadow-lg hover:shadow-cyan-500/30 transition-transform hover:-translate-y-1 ${card.colSpan || ""}`}
            >
              <div>
                <div className="flex items-baseline gap-2">
                  <span className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                    <AnimatedNumber from={card.number} to={card.number} reverse={card.reverse} start={startAnimation} />
                  </span>
                  {card.number2 && (
                    <>
                      <span className="text-4xl md:text-5xl font-bold text-cyan-400">/</span>
                      <span className="text-4xl md:text-5xl font-bold text-cyan-400">
                        <AnimatedNumber from={card.number2} to={card.number2} start={startAnimation} />
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
