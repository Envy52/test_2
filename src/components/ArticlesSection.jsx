import { ArrowUpRight } from "lucide-react";
import { useTranslation } from "react-i18next";

const ArticlesSection = () => {
  const { t } = useTranslation();
  const articles = t("articles.items", { returnObjects: true });

  return (
    <div className="relative bg-slate-950 py-16 sm:py-24 px-4 overflow-hidden">
      <div className="absolute top-10 left-20 w-72 h-72 bg-purple-500/30 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-cyan-400/20 rounded-full blur-3xl animate-pulse delay-700"></div>
      <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-blue-400/20 rounded-full blur-3xl animate-pulse"></div>

      <div className="relative container mx-auto max-w-5xl">
        <div className="flex justify-between items-center mb-10 border-b border-white/10 pb-4">
          <h2 className="text-3xl sm:text-4xl font-bold text-white drop-shadow-lg">
            {t("articles.sectionTitle")}
          </h2>
          <a 
            href="#" 
            className="text-cyan-400 font-semibold hover:text-cyan-300 transition-colors"
          >
            {t("articles.viewAll")}
          </a>
        </div>

        <div className="space-y-8">
          {articles.map((article, index) => (
            <a 
              key={index} 
              href={article.link} 
              className="block group transition-transform duration-300 hover:-translate-y-1"
            >
              <div className="grid grid-cols-1 sm:grid-cols-12 gap-6 sm:gap-8 items-center border-b border-white/10 pb-8">
                
                <div className="sm:col-span-2 text-cyan-300 font-medium text-lg">
                  {article.date}
                </div>
                
                <div className="sm:col-span-3">
                  <div className="rounded-2xl overflow-hidden shadow-xl hover:shadow-cyan-500/20 transition-shadow duration-300">
                    <img 
                      src={article.imageUrl || "https://via.placeholder.com/150"} 
                      alt={article.title} 
                      className="w-full h-full object-cover aspect-square sm:aspect-auto"
                    />
                  </div>
                </div>
                
                <div className="sm:col-span-6">
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors">
                    {article.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    {article.excerpt}
                  </p>
                </div>
                
                <div className="sm:col-span-1 flex justify-end">
                  <ArrowUpRight 
                    className="w-8 h-8 text-gray-400 group-hover:text-cyan-300 transition-colors" 
                  />
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ArticlesSection;
