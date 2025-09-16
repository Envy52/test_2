import React from 'react';
import { useTranslation } from 'react-i18next';

const SupportSection = () => {
  const { t } = useTranslation();

  return (
    <section className="py-20 px-4 relative overflow-hidden bg-slate-950">
      <div className="absolute -top-24 -left-24 w-80 h-80 bg-cyan-400/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute top-0 left-1/3 w-72 h-72 bg-blue-400/15 rounded-full blur-3xl animate-pulse delay-200"></div>
      <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-pink-500/15 rounded-full blur-3xl animate-pulse delay-400"></div>
      <div className="absolute bottom-1/3 left-1/4 w-80 h-80 bg-purple-400/15 rounded-full blur-3xl animate-pulse delay-300"></div>
      <div className="absolute bottom-0 right-1/3 w-72 h-72 bg-cyan-300/15 rounded-full blur-3xl animate-pulse delay-500"></div>
      <div className="absolute top-2/3 right-1/5 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-600"></div>
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-cyan-400/10 rounded-full blur-3xl animate-pulse delay-700"></div>

      <div className="relative container mx-auto bg-slate-900/70 backdrop-blur-xl border border-white/10 rounded-3xl p-10 sm:p-14 shadow-xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <h2 className="text-4xl md:text-6xl font-extrabold text-white leading-tight drop-shadow-lg hover:translate-x-1 transition-transform duration-300">
            {t('support.title1')} <span className="text-cyan-400">{t('support.title2')}</span>
          </h2>

          <div className="space-y-6">
            <p className="text-2xl md:text-3xl font-semibold text-white leading-snug hover:translate-x-1 transition-transform duration-300">
              {t('support.text1')} <span className="text-cyan-400 drop-shadow-md">{t('support.highlight1')}</span> {t('support.text1_cont')}
            </p>
            <p className="text-2xl md:text-3xl font-semibold text-white leading-snug hover:translate-x-1 transition-transform duration-300">
              {t('support.text2')} <span className="text-cyan-400 drop-shadow-md">{t('support.highlight2')}</span> {t('support.text2_cont')}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SupportSection;
