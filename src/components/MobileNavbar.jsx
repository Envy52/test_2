import React from 'react';

const MobileNavbar = () => {
  const navLinks = [
    { text: "Главная", href: "#" },
    { text: "О нас", href: "#about" },
    { text: "Преимущества", href: "#features" },
    { text: "Как начать", href: "#start" },
    { text: "Контакты", href: "#contact" },
  ]; 

  return (
    <nav className="md:hidden bg-slate-900/95 border-t border-slate-700 backdrop-blur-md">
      <ul className="flex flex-col items-center p-4 space-y-2">
        {navLinks.map((link) => (
          <li key={link.text} className="w-full">
            <a 
              href={link.href} 
              className="block text-center text-gray-200 font-medium py-3 rounded-xl transition-all duration-300 
                        hover:bg-gradient-to-r hover:from-blue-600 hover:via-indigo-600 hover:to-purple-700 
                        hover:shadow-lg hover:scale-[1.02]"
            >
              {link.text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default MobileNavbar;
