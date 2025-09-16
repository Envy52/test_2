import { useTranslation } from "react-i18next";

const LogoIcon = () => (
  <svg
    width="40"
    height="40"
    viewBox="0 0 40 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="text-transparent bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text"
  >
    <path
      d="M5 15C15 5 25 25 35 15"
      stroke="currentColor"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M5 25C15 15 25 35 35 25"
      stroke="currentColor"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const Footer = () => {
  const { t } = useTranslation();

  const navItems = [
    { key: "about", href: "#" },
    { key: "shop", href: "#" },
    { key: "career", href: "#" },
    { key: "product", href: "#" },
    { key: "blog", href: "#" },
  ];

  return (
    <footer className="relative overflow-hidden bg-slate-900/80 backdrop-blur-xl border-t border-white/10 py-16">
      <div className="absolute -top-24 -left-24 w-72 h-72 bg-cyan-400/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-purple-400/20 rounded-full blur-3xl animate-pulse"></div>

      <div className="relative container mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 px-4 text-slate-300">
        <div className="flex items-center md:items-start">
          <div className="flex items-center space-x-3">
            <LogoIcon />
            <div>
              <span className="text-2xl font-bold bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                AQUABOX
              </span>
              <p className="text-sm tracking-widest text-slate-400">
                CLEAR WATER
              </p>
            </div>
          </div>
        </div>

        <div>
          <h3 className="font-bold text-white mb-4 text-lg">
            {t("footer.navTitle")}
          </h3>
          <ul className="space-y-2 columns-2">
            {navItems.map((item) => (
              <li key={item.key}>
                <a
                  href={item.href}
                  className="hover:text-cyan-300 transition-colors duration-300"
                >
                  {t(`nav.${item.key}`)}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-bold text-white mb-4 text-lg">
            {t("footer.contact")}
          </h3>
          <ul className="space-y-2">
            <li>
              <a
                href="mailto:karimovcomment@gmail.com"
                className="hover:text-purple-300 transition-colors duration-300"
              >
                karimovcomment@gmail.com
              </a>
            </li>
            <li>
              <a
                href="tel:+998900211051"
                className="hover:text-purple-300 transition-colors duration-300"
              >
                +998 90 021 10 51
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="relative mt-10 text-center text-slate-400 text-sm">
        {t("footer.rights")}
      </div>
    </footer>
  );
};

export default Footer;
