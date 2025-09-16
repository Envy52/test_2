import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const NavPanel = () => {
  const { t } = useTranslation();

  const navLinks = [
    { href: "/", text: t("nav.about") },
    { href: "/shop", text: t("nav.shop") }, 
    { href: "/product", text: t("nav.product") },
    { href: "#career", text: t("nav.career") },
    { href: "#blog", text: t("nav.blog") },
  ];

  return (
    <nav className="bg-slate-900/95 backdrop-blur-xl shadow-xl sticky top-20 z-40">
      <div className="container mx-auto">
        <ul className="flex justify-center items-center space-x-10 py-8">
          {navLinks.map((link) => (
            <li key={link.text}>
              {link.href.startsWith("/") ? (
                <Link
                  to={link.href}
                  className="relative text-gray-300 font-medium transition-all duration-300 
                             hover:text-transparent hover:bg-clip-text 
                             hover:bg-gradient-to-r hover:from-cyan-400 hover:to-blue-500"
                >
                  {link.text}
                </Link>
              ) : (
                <a
                  href={link.href}
                  className="relative text-gray-300 font-medium transition-all duration-300 
                             hover:text-transparent hover:bg-clip-text 
                             hover:bg-gradient-to-r hover:from-cyan-400 hover:to-blue-500"
                >
                  {link.text}
                </a>
              )}
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default NavPanel;
