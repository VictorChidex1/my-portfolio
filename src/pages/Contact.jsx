import React from "react";

const Contact = () => {
  return (
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
};

export default Contact;
