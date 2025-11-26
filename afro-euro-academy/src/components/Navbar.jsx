import { useState } from 'react';
import { Link } from 'react-router-dom';
import { BiMenu, BiX } from 'react-icons/bi';
import { navLinks } from '../data';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-dark text-white sticky top-0 z-50 py-3 shadow-lg">
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold text-secondary tracking-wider">
          AFRO-EURO <span className="text-white text-lg font-normal">SOCCER ACADEMY</span>
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6">
          {navLinks.map((link) => (
            <li key={link.name}>
              {link.path.startsWith('/#') ? (
                <a href={link.path} className="hover:text-secondary transition-colors duration-300">{link.name}</a>
              ) : (
                <Link to={link.path} className="hover:text-secondary transition-colors duration-300">{link.name}</Link>
              )}
            </li>
          ))}
        </ul>

        {/* Mobile Toggle */}
        <button className="md:hidden text-3xl" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <BiX /> : <BiMenu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-dark border-t border-gray-800">
          <ul className="flex flex-col p-4 space-y-4">
            {navLinks.map((link) => (
              <li key={link.name}>
                 {link.path.startsWith('/#') ? (
                  <a href={link.path} onClick={() => setIsOpen(false)} className="block hover:text-secondary">{link.name}</a>
                ) : (
                  <Link to={link.path} onClick={() => setIsOpen(false)} className="block hover:text-secondary">{link.name}</Link>
                )}
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;