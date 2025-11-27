import React from "react";
import { User } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 bg-slate-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* Text Content */}
          <div className="flex-1">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-orange/10 text-brand-orange text-sm font-medium mb-6">
              <User size={16} />
              <span>About Me</span>
            </div>

            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Passionate about creating{" "}
              <span className="text-brand-orange">intuitive</span> digital
              experiences.
            </h2>

            <p className="text-slate-400 text-lg leading-relaxed mb-6">
              Hello my name is Victor Chidera, I am a Frontend Developer with a
              strong focus on building responsive, performant, and accessible
              web applications. My journey started with a curiosity for how
              things work on the web, which has evolved into a career of
              crafting pixel-perfect interfaces.
            </p>

            <p className="text-slate-400 text-lg leading-relaxed mb-8">
              When I'm not coding, I'm exploring the latest design trends,
              optimizing application performance, or contributing to open-source
              projects. I believe in writing clean, maintainable code that
              scales.
            </p>

            <div className="grid grid-cols-2 gap-6">
              <div>
                <h4 className="text-4xl font-bold text-white mb-2">2+</h4>
                <p className="text-slate-500">Years of Experience</p>
              </div>
              <div>
                <h4 className="text-4xl font-bold text-white mb-2">10+</h4>
                <p className="text-slate-500">Projects Completed</p>
              </div>
            </div>
          </div>

          {/* Decorative Visual (Optional: You can put another image here) */}
          <div className="flex-1 relative hidden md:block">
            <div className="absolute inset-0 bg-gradient-to-tr from-brand-orange/20 to-transparent rounded-2xl transform rotate-6 border border-white/5"></div>
            <div className="relative bg-brand-dark p-8 rounded-2xl border border-slate-800 shadow-2xl">
              <code className="text-sm text-slate-300">
                <span className="text-purple-400">const</span>{" "}
                <span className="text-yellow-200">developer</span> = {"{"}{" "}
                <br />
                &nbsp;&nbsp;name:{" "}
                <span className="text-green-400">'Victor Chidera'</span>,<br />
                &nbsp;&nbsp;role:{" "}
                <span className="text-green-400">'Frontend Dev'</span>,<br />
                &nbsp;&nbsp;passion:{" "}
                <span className="text-green-400">'Building cool stuff'</span>,
                <br />
                &nbsp;&nbsp;hardWorker:{" "}
                <span className="text-brand-orange">true</span>
                <br />
                {"}"};
              </code>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
