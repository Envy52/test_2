import { Link } from 'react-router-dom';
import { Droplet, Youtube, Instagram, Send } from 'lucide-react';

const Header = () => {
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
              Чистая вода для всех
            </span>
          </div>
        </Link>

        <div className="flex items-center space-x-6">
          <a href="#" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-cyan-400 transition-colors duration-300">
            <Send size={24} />
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-red-500 transition-colors duration-300">
            <Youtube size={24} />
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-pink-500 transition-colors duration-300">
            <Instagram size={24} />
          </a>

          <div className="relative">
            <select className="appearance-none bg-slate-800/50 border border-slate-600 text-white py-2 px-3 pr-8 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400 transition duration-300">
              <option value="ru">RU</option>
              <option value="en">EN</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-300">
              <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
              </svg>
            </div>
          </div>
        </div>

      </div>
    </header>
  );
};

export default Header;
