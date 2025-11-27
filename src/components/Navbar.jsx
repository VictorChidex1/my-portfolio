import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, User, Layers, BookOpen, Mail } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { path: "/", label: "Home", icon: User },
    { path: "/works", label: "Works", icon: Layers },
    { path: "/blog", label: "Blog", icon: BookOpen },
    { path: "/contact", label: "Contact", icon: Mail },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="fixed top-0 w-full bg-brand-dark/95 backdrop-blur-md border-b border-slate-800 z-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex-shrink-0 cursor-pointer">
            <span className="text-2xl font-bold text-white">
              Victor<span className="text-brand-orange">Chidera</span>.
            </span>
          </Link>

          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`${
                    isActive(link.path)
                      ? "text-brand-orange"
                      : "text-brand-light hover:text-white"
                  } px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 flex items-center gap-2`}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-brand-light hover:text-white p-2"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-brand-dark border-b border-slate-800">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsMenuOpen(false)}
                className={`${
                  isActive(link.path)
                    ? "text-brand-orange bg-slate-800"
                    : "text-brand-light hover:text-white"
                } block px-3 py-2 rounded-md text-base font-medium w-full text-left flex items-center gap-2`}
              >
                <link.icon size={18} />
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
