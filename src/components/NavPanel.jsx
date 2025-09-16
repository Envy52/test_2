import { Link } from "react-router-dom";

const NavPanel = () => {
  const navLinks = [
    { href: "/", text: "О компании" },
    { href: "/shop", text: "Aquabox Shop" }, 
    { href: "/product", text: "Продукт" },
    { href: "#career", text: "Карьера" },
    { href: "#blog", text: "Блог" },
  ];

  return (
    <nav className="bg-slate-900/80 backdrop-blur-xl shadow-xl sticky top-0 z-50">
      <div className="container mx-auto">
        <ul className="flex justify-center items-center space-x-10 py-5">
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
