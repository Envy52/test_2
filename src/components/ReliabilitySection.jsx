import React from 'react';
import { useTranslation } from 'react-i18next';
import { ShieldCheck, Cog, Award } from 'lucide-react';

const ReliabilitySection = () => {
  const { t } = useTranslation();

  const features = [
    {
      icon: <ShieldCheck size={28} />,
      text: t('reliability.feature1'),
    },
    {
      icon: <Cog size={28} />,
      text: t('reliability.feature2'),
    },
    {
      icon: <Award size={28} />,
      text: t('reliability.feature3'),
    },
  ];

  return (
    <section className="bg-slate-950 py-20 px-4 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute -top-20 left-1/4 w-80 h-80 bg-cyan-400/25 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-24 right-1/4 w-96 h-96 bg-purple-500/25 rounded-full blur-3xl animate-pulse"></div>
      </div>

      <div className="relative container mx-auto bg-slate-900/70 backdrop-blur-xl border border-white/10 rounded-3xl p-10 sm:p-14 shadow-xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          <div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-10 drop-shadow-lg">
              {t('reliability.title')} <span className="text-cyan-400">{t('reliability.highlight')}</span>
            </h2>
            <div className="space-y-8">
              {features.map((feature, index) => (
                <div 
                  key={index} 
                  className="flex items-center gap-4 group hover:translate-x-2 transition-transform duration-300"
                >
                  <div className="bg-gradient-to-r from-cyan-400 to-purple-500 text-white p-4 rounded-full shadow-lg flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                    {feature.icon}
                  </div>
                  <p className="text-gray-300 text-lg leading-relaxed">
                    {feature.text}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-center lg:justify-end">
            <img
              src='/images/reliability.png' 
              alt={t('reliability.imageAlt')}
              className="rounded-2xl w-full max-w-md shadow-lg shadow-cyan-500/20 hover:scale-[1.02] transition-transform duration-300"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReliabilitySection;
