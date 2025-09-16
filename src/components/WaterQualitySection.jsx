import React from 'react';

const WaterQualitySection = () => {
  const backgroundImageUrl =
    'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=2832&auto=format&fit=crop';

  return (
    <section className="py-20 px-4 relative overflow-hidden bg-slate-950">
      <div className="absolute inset-0">
        <div className="absolute -top-24 -left-20 w-80 h-80 bg-cyan-400/25 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-24 -right-20 w-96 h-96 bg-purple-500/25 rounded-full blur-3xl animate-pulse"></div>
      </div>

      <div className="relative container mx-auto bg-slate-900/70 backdrop-blur-xl border border-white/10 rounded-3xl p-10 sm:p-14 shadow-xl">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-center">
          <div className="lg:col-span-1">
            <h3 className="text-5xl md:text-6xl font-extrabold text-white mb-6 drop-shadow-lg">
              Качество <br /> воды
            </h3>
          </div>

          <div className="lg:col-span-2 space-y-6">
            <p className="text-2xl md:text-3xl font-semibold text-white leading-snug">
              Аппарат оснащен{' '}
              <span className="text-cyan-400 drop-shadow-md">
                лучшими фильтрами
              </span>{' '}
              для очистки воды. Мы обеспечиваем качество воды для ваших покупателей.
            </p>
            <p className="text-2xl md:text-3xl font-semibold text-white leading-snug">
              Всегда свежая вода, прошедшая{' '}
              <span className="text-cyan-400 drop-shadow-md">
                8 ступеней очистки
              </span>
              .
            </p>
          </div>
        </div>

        <div className="absolute -top-20 -right-10 w-72 h-72 bg-cyan-500/30 blur-3xl rounded-full animate-pulse"></div>
        <div className="absolute -bottom-20 -left-10 w-72 h-72 bg-purple-500/30 blur-3xl rounded-full animate-pulse"></div>
      </div>
    </section>
  );
};

export default WaterQualitySection;
