const products = [
  {
    id: 1,
    title: "Аппарат для продажи воды Эйр 500",
    year: "2024 год",
    description:
      "Аппарат по очистке и продаже питьевой воды. Состоит из модуля розлива и системы очистки в антивандальном корпусе.",
    image: "/images/aquabox500.png",
  },
  {
    id: 2,
    title: "Аппарат для продажи воды Эйр 300",
    year: "2023 год",
    description:
      "Компактный аппарат для продажи воды с закрытой системой очистки.",
    image: "/images/aquabox300.png",
  },
  {
    id: 3,
    title: "Аппарат для продажи воды НаноФрост",
    year: "2023 год",
    description: "Антикризисное решение для бизнеса с минимальными затратами.",
    image: "/images/aquaboxnano.png",
  },
];

export default function AquaboxShop() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-blue-900 py-12 relative overflow-hidden">
      <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-extrabold text-center text-white mb-12 drop-shadow-lg">
          Каталог аппаратов
        </h1>

        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-gradient-to-br from-indigo-800 via-purple-800 to-blue-800 text-gray-100 rounded-2xl shadow-2xl overflow-hidden flex flex-col transform transition-transform duration-300 hover:scale-105 hover:shadow-purple-500/30"
            >
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-64 object-contain bg-white/10 p-6 backdrop-blur-sm"
              />

              <div className="p-6 flex flex-col flex-grow">
                <h2 className="text-xl font-bold text-white">
                  {product.title}
                </h2>
                <p className="text-sm text-cyan-300 mb-4">{product.year}</p>
                <p className="text-sm mb-6 flex-grow text-gray-200">
                  {product.description}
                </p>

                <div className="mt-auto text-center">
                  <p className="text-2xl font-semibold text-cyan-300 mb-4">
                    Цена по запросу
                  </p>
                  <button
                    className="w-full bg-gradient-to-r from-cyan-400 to-purple-400 text-slate-900 font-bold py-2 px-4 rounded-full transition-all duration-300 hover:opacity-90 shadow-lg"
                  >
                    Подробнее
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
