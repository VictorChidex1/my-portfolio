import React from "react";
import { Link } from "react-router-dom";
import { Github, Linkedin, Mail, Twitter, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import profilePic from "../assets/images/profile.png";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center pt-16 bg-brand-dark overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col-reverse md:flex-row items-center gap-12">
        <div className="flex-1 text-center md:text-left z-10">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-brand-orange font-semibold tracking-wide uppercase mb-2"
          >
            Frontend Developer
          </motion.h2>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl md:text-7xl font-bold text-white mb-6"
          >
            Building Digital <br />
            <span className="text-slate-400">Experiences.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg text-brand-light mb-8 max-w-lg mx-auto md:mx-0"
          >
            I craft accessible, pixel-perfect, and performant web experiences.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
          >
            <Link
              to="/works"
              className="px-8 py-3 bg-brand-orange hover:bg-orange-600 text-white font-bold rounded-lg transition-colors duration-300 flex items-center justify-center gap-2"
            >
              View My Work <ChevronRight size={20} />
            </Link>
            <Link
              to="/contact"
              className="px-8 py-3 border border-slate-600 hover:border-brand-orange text-brand-light hover:text-brand-orange font-bold rounded-lg transition-colors duration-300 flex items-center justify-center"
            >
              Contact Me
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-12 flex gap-6 justify-center md:justify-start"
          >
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
          </motion.div>
        </div>

        {/* IMAGE SIDE - We added animation here too */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex-1 relative"
        >
          <div className="w-72 h-72 md:w-96 md:h-96 bg-gradient-to-tr from-brand-orange to-purple-600 rounded-full blur-3xl opacity-20 absolute top-0 right-0 animate-pulse"></div>
          <div className="relative w-64 h-64 md:w-80 md:h-80 mx-auto bg-slate-800 rounded-2xl rotate-3 border border-slate-700 overflow-hidden shadow-2xl flex items-center justify-center">
            {/* If you don't have the image yet, this fallback prevents crashes */}
            <img
              src={profilePic}
              alt="Frontend Developer Profile"
              className="w-full h-full object-cover opacity-90 hover:opacity-100 transition-opacity"
              onError={(e) => {
                e.target.style.display = "none";
              }} // Hides image if missing
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
