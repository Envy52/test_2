import React from 'react';

const SupportSection = () => {
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
            Постоянное <span className="text-cyan-400">сопровождение бизнеса</span>
          </h2>

          <div className="space-y-6">
            <p className="text-2xl md:text-3xl font-semibold text-white leading-snug hover:translate-x-1 transition-transform duration-300">
              Мы будем постоянно следить за{' '}
              <span className="text-cyan-400 drop-shadow-md">качеством воды</span> 
              в ваших аппаратах, а также своевременно производить замену фильтров и техническое обслуживание.
            </p>
            <p className="text-2xl md:text-3xl font-semibold text-white leading-snug hover:translate-x-1 transition-transform duration-300">
              Наш сервис позволит поддерживать аппараты в{' '}
              <span className="text-cyan-400 drop-shadow-md">идеальном состоянии</span> 
              на долгие годы.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SupportSection;
