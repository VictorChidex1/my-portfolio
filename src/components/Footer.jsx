import React from "react";
import { Link } from "react-router-dom";
import { Github, Linkedin, Mail, Twitter } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 border-t border-slate-800 py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content: 3 Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Column 1: Brand & Description */}
          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold text-white mb-4">
              Dev<span className="text-brand-orange">Portfolio</span>.
            </h3>
            <p className="text-slate-400 text-sm leading-relaxed max-w-xs mx-auto md:mx-0">
              Crafting accessible, pixel-perfect, and performant web experiences
              for the modern web.
            </p>
          </div>

          {/* Column 2: Quick Links (NEW SECTION) */}
          <div className="text-center">
            <h4 className="text-white font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/"
                  className="text-slate-400 hover:text-brand-orange transition-colors text-sm"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/works"
                  className="text-slate-400 hover:text-brand-orange transition-colors text-sm"
                >
                  Works
                </Link>
              </li>
              <li>
                <Link
                  to="/blog"
                  className="text-slate-400 hover:text-brand-orange transition-colors text-sm"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-slate-400 hover:text-brand-orange transition-colors text-sm"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Social Links (Your Updated Links) */}
          <div className="text-center md:text-right">
            <h4 className="text-white font-bold mb-4">Connect</h4>
            <div className="flex justify-center md:justify-end gap-6">
              <a
                href="https://github.com/VictorChidex1"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-brand-orange transition-colors duration-300 transform hover:-translate-y-1"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
              <a
                href="https://www.linkedin.com/in/victor-chidera-255526b9"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-brand-orange transition-colors duration-300 transform hover:-translate-y-1"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="https://x.com/Iamkingchidex"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-brand-orange transition-colors duration-300 transform hover:-translate-y-1"
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </a>
              <a
                href="mailto:donchid.online@gmail.com"
                className="text-slate-400 hover:text-brand-orange transition-colors duration-300 transform hover:-translate-y-1"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright Bar */}
        <div className="border-t border-slate-800 pt-8 text-center">
          <p className="text-slate-500 text-xs">
            © {currentYear} Victor Chidera. Built with React & Tailwind.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
