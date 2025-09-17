import { Link } from "react-router-dom";
import { Droplet, Youtube, Instagram, Send } from "lucide-react";
import { useTranslation } from "react-i18next";
import { useState, useEffect, useRef } from "react";
import ReactCountryFlag from "react-country-flag";

const Header = () => {
  const { t, i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const languages = [
    { code: "tr", label: "Türkçe", flag: "TR" },
    { code: "ru", label: "Русский", flag: "RU" },
    { code: "uz", label: "Oʻzbekcha", flag: "UZ" },
    { code: "en", label: "English", flag: "GB" },
  ];

  useEffect(() => {
    const savedLang = localStorage.getItem("language");
    if (savedLang && savedLang !== i18n.language) {
      i18n.changeLanguage(savedLang);
    }
  }, [i18n]);

  const currentLang =
    languages.find((lang) => lang.code === i18n.language) || languages[0];

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
    localStorage.setItem("language", lang);
    setIsOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className="sticky top-0 z-50 bg-slate-900/80 backdrop-blur-xl shadow-xl">
      <div className="container mx-auto flex items-center justify-between p-4">
        <Link to="/" className="flex items-center space-x-4">
          <div className="bg-gradient-to-r from-cyan-400 to-purple-500 p-2 rounded-full shadow-lg">
            <Droplet className="text-white drop-shadow-lg" size={36} />
          </div>
          <div className="flex flex-col">
            <span className="text-2xl font-extrabold text-white tracking-wide drop-shadow-[0_2px_6px_rgba(0,0,0,0.7)]">
              AQUABOX
            </span>
            <span className="text-gray-300 text-sm sm:text-base font-medium drop-shadow-[0_1px_3px_rgba(0,0,0,0.5)]">
              {t("slogan")}
            </span>
          </div>
        </Link>

        <div className="flex items-center space-x-6">
          <a href="#" className="text-gray-300 hover:text-cyan-400 transition-colors duration-300">
            <Send size={24} />
          </a>
          <a href="#" className="text-gray-300 hover:text-red-500 transition-colors duration-300">
            <Youtube size={24} />
          </a>
          <a href="#" className="text-gray-300 hover:text-pink-500 transition-colors duration-300">
            <Instagram size={24} />
          </a>

          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="flex items-center space-x-2 bg-slate-800/50 border border-slate-600 text-white py-2 px-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400 transition duration-300"
            >
              <ReactCountryFlag
                countryCode={currentLang.flag}
                svg
                style={{ width: "20px", height: "14px" }}
              />
              <span className="hidden sm:inline">{currentLang.label}</span>
              <svg
                className={`w-4 h-4 ml-1 transition-transform ${
                  isOpen ? "rotate-180" : "rotate-0"
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            <div
              className={`absolute right-0 mt-2 w-40 bg-slate-800 border border-slate-600 rounded-lg shadow-lg overflow-hidden z-50 transform transition-all duration-300 ${
                isOpen ? "opacity-100 scale-100" : "opacity-0 scale-95 pointer-events-none"
              }`}
            >
              {languages.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => changeLanguage(lang.code)}
                  className="flex items-center space-x-2 w-full px-4 py-2 text-left text-white hover:bg-slate-700 transition-colors"
                >
                  <ReactCountryFlag
                    countryCode={lang.flag}
                    svg
                    style={{ width: "20px", height: "14px" }}
                  />
                  <span className="hidden md:inline">{lang.label}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
