import React, { useState, useEffect } from "react";
import {
  Menu,
  X,
  Github,
  Linkedin,
  Mail,
  ChevronRight,
  User,
  ExternalLink,
  Code,
  BookOpen,
  Layers,
} from "lucide-react";

// --- Mock Data (We will replace this with your real data later) ---

const projects = [
  {
    id: 1,
    title: "FoodFlow",
    category: "Full Stack App",
    description:
      "A comprehensive food delivery management system optimizing restaurant workflows. Built with the same Dark Blue & Orange theme.",
    tech: ["React", "Node.js", "Tailwind"],
    link: "#",
  },
  {
    id: 2,
    title: "E-Commerce Dashboard",
    category: "UI/UX Design",
    description:
      "Analytics dashboard for online retailers with real-time data visualization.",
    tech: ["Vue.js", "Firebase", "D3.js"],
    link: "#",
  },
  {
    id: 3,
    title: "TaskMaster",
    category: "Productivity",
    description: "A collaborative task management tool for remote teams.",
    tech: ["React Native", "Redux"],
    link: "#",
  },
];

const blogPosts = [
  {
    id: 1,
    title: "Optimizing React Performance",
    excerpt:
      "Deep dive into useMemo, useCallback, and React.memo for high-performance apps.",
    date: "Oct 24, 2024",
    readTime: "5 min read",
  },
  {
    id: 2,
    title: "The Future of CSS in JS",
    excerpt:
      "Exploring the shift towards zero-runtime CSS solutions and Tailwind adoption.",
    date: "Nov 02, 2024",
    readTime: "4 min read",
  },
  {
    id: 3,
    title: "Building Scalable APIs",
    excerpt:
      "Best practices for structuring RESTful services in Node.js environments.",
    date: "Nov 15, 2024",
    readTime: "7 min read",
  },
];

// --- Components ---

const Navigation = ({ activeTab, setActiveTab, isMenuOpen, setIsMenuOpen }) => {
  const navLinks = [
    { id: "home", label: "Home", icon: User },
    { id: "works", label: "Works", icon: Layers },
    { id: "blog", label: "Blog", icon: BookOpen },
    { id: "contact", label: "Contact", icon: Mail },
  ];

  return (
    <nav className="fixed top-0 w-full bg-brand-dark/95 backdrop-blur-md border-b border-slate-800 z-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div
            className="flex-shrink-0 cursor-pointer"
            onClick={() => setActiveTab("home")}
          >
            <span className="text-2xl font-bold text-white">
              Dev<span className="text-brand-orange">Portfolio</span>.
            </span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => setActiveTab(link.id)}
                  className={`${
                    activeTab === link.id
                      ? "text-brand-orange"
                      : "text-brand-light hover:text-white"
                  } px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 flex items-center gap-2`}
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>

          {/* Mobile Menu Button */}
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

      {/* Mobile Nav */}
      {isMenuOpen && (
        <div className="md:hidden bg-brand-dark border-b border-slate-800">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => {
                  setActiveTab(link.id);
                  setIsMenuOpen(false);
                }}
                className={`${
                  activeTab === link.id
                    ? "text-brand-orange bg-slate-800"
                    : "text-brand-light hover:text-white"
                } block px-3 py-2 rounded-md text-base font-medium w-full text-left flex items-center gap-2`}
              >
                <link.icon size={18} />
                {link.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

const Hero = ({ setActiveTab }) => (
  <section className="min-h-screen flex items-center justify-center pt-16 bg-brand-dark">
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col-reverse md:flex-row items-center gap-12">
      <div className="flex-1 text-center md:text-left">
        <h2 className="text-brand-orange font-semibold tracking-wide uppercase mb-2">
          Full Stack Developer
        </h2>
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
          Building Digital <br />
          <span className="text-slate-400">Experiences.</span>
        </h1>
        <p className="text-lg text-brand-light mb-8 max-w-lg mx-auto md:mx-0">
          I craft accessible, pixel-perfect, and performant web experiences
          using the FoodFlow color palette.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
          <button
            onClick={() => setActiveTab("works")}
            className="px-8 py-3 bg-brand-orange hover:bg-orange-600 text-white font-bold rounded-lg transition-colors duration-300 flex items-center justify-center gap-2"
          >
            View My Work <ChevronRight size={20} />
          </button>
          <button
            onClick={() => setActiveTab("contact")}
            className="px-8 py-3 border border-slate-600 hover:border-brand-orange text-brand-light hover:text-brand-orange font-bold rounded-lg transition-colors duration-300"
          >
            Contact Me
          </button>
        </div>

        <div className="mt-12 flex gap-6 justify-center md:justify-start">
          <a
            href="#"
            className="text-slate-400 hover:text-brand-orange transition-colors"
          >
            <Github size={24} />
          </a>
          <a
            href="#"
            className="text-slate-400 hover:text-brand-orange transition-colors"
          >
            <Linkedin size={24} />
          </a>
          <a
            href="#"
            className="text-slate-400 hover:text-brand-orange transition-colors"
          >
            <Mail size={24} />
          </a>
        </div>
      </div>

      <div className="flex-1 relative">
        <div className="w-72 h-72 md:w-96 md:h-96 bg-gradient-to-tr from-brand-orange to-purple-600 rounded-full blur-3xl opacity-20 absolute top-0 right-0 animate-pulse"></div>
        <div className="relative w-64 h-64 md:w-80 md:h-80 mx-auto bg-slate-800 rounded-2xl rotate-3 border border-slate-700 overflow-hidden shadow-2xl flex items-center justify-center">
          <User size={64} className="text-slate-600" />
        </div>
      </div>
    </div>
  </section>
);

const Works = () => (
  <section className="py-24 pt-32 bg-brand-dark min-h-screen">
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Selected Works
        </h2>
        <div className="w-20 h-1 bg-brand-orange"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <div
            key={project.id}
            className="group bg-slate-900 rounded-xl overflow-hidden border border-slate-800 hover:border-brand-orange/50 transition-all duration-300 hover:-translate-y-2"
          >
            <div className="h-48 bg-slate-800 relative overflow-hidden flex items-center justify-center">
              <Code
                className="text-slate-600 group-hover:text-brand-orange transition-colors"
                size={48}
              />
            </div>
            <div className="p-6">
              <span className="text-brand-orange text-xs font-bold uppercase tracking-wider">
                {project.category}
              </span>
              <h3 className="text-xl font-bold text-white mt-2 mb-3">
                {project.title}
              </h3>
              <p className="text-slate-400 text-sm mb-4">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((t, i) => (
                  <span
                    key={i}
                    className="px-2 py-1 bg-brand-dark text-slate-300 text-xs rounded border border-slate-700"
                  >
                    {t}
                  </span>
                ))}
              </div>
              <a
                href={project.link}
                className="inline-flex items-center text-white hover:text-brand-orange font-medium transition-colors"
              >
                View Project <ExternalLink size={16} className="ml-2" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const Blog = () => (
  <section className="py-24 pt-32 bg-brand-dark min-h-screen">
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="mb-12 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Latest Articles
        </h2>
        <p className="text-slate-400">
          Thoughts on development, design, and tech.
        </p>
      </div>

      <div className="space-y-6">
        {blogPosts.map((post) => (
          <article
            key={post.id}
            className="bg-slate-900/50 rounded-2xl p-6 md:p-8 border border-slate-800 hover:border-brand-orange/50 transition-colors cursor-pointer group"
          >
            <div className="flex flex-col md:flex-row gap-6 justify-between items-start">
              <div className="flex-1">
                <div className="flex items-center gap-3 text-sm text-slate-400 mb-2">
                  <span>{post.date}</span>
                  <span className="w-1 h-1 bg-brand-orange rounded-full"></span>
                  <span>{post.readTime}</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-brand-orange transition-colors">
                  {post.title}
                </h3>
                <p className="text-slate-400 mb-4">{post.excerpt}</p>
              </div>
              <div className="hidden md:flex items-center self-center">
                <div className="w-12 h-12 rounded-full bg-slate-800 flex items-center justify-center group-hover:bg-brand-orange transition-colors">
                  <ChevronRight className="text-white" />
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  </section>
);

const Contact = () => (
  <section className="py-24 pt-32 min-h-screen flex items-center bg-brand-dark">
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
      <div className="bg-slate-900 rounded-3xl p-8 md:p-12 border border-slate-800 shadow-2xl">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-white mb-4">
            Let's Work Together
          </h2>
          <p className="text-slate-400">
            Have a project in mind or just want to say hi? I'm always open to
            new opportunities.
          </p>
        </div>

        <form className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">
                Name
              </label>
              <input
                type="text"
                className="w-full bg-brand-dark border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-brand-orange transition-colors"
                placeholder="John Doe"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">
                Email
              </label>
              <input
                type="email"
                className="w-full bg-brand-dark border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-brand-orange transition-colors"
                placeholder="john@example.com"
              />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-300 mb-2">
              Message
            </label>
            <textarea
              rows="4"
              className="w-full bg-brand-dark border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-brand-orange transition-colors"
              placeholder="Tell me about your project..."
            ></textarea>
          </div>
          <button className="w-full bg-brand-orange hover:bg-orange-600 text-white font-bold py-4 rounded-lg transition-all duration-300 transform hover:scale-[1.01]">
            Send Message
          </button>
        </form>
      </div>
    </div>
  </section>
);

export default function App() {
  const [activeTab, setActiveTab] = useState("home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Scroll to top when tab changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [activeTab]);

  return (
    <div className="min-h-screen bg-brand-dark text-slate-200 font-sans">
      <Navigation
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
      />

      <main className="flex-grow">
        {activeTab === "home" && <Hero setActiveTab={setActiveTab} />}
        {activeTab === "works" && <Works />}
        {activeTab === "blog" && <Blog />}
        {activeTab === "contact" && <Contact />}
      </main>
    </div>
  );
}
