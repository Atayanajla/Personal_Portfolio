const Contact = () => {
  return (
    <section id="contact" className="max-w-7xl mx-auto px-6">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
          Let's Connect
        </h2>
        <div className="w-40 h-1 bg-blue-600 dark:bg-blue-500 rounded mt-2 mx-auto md:mx-auto"></div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
        <div className="space-y-3">
          <div className="p-6 md:p-8 bg-white dark:bg-slate-900/10 border border-slate-200 dark:border-slate-800 rounded-3xl shadow-xl space-y-6">
            <h4 className="text-xl font-bold text-blue-500">Contact Me</h4>
            <div className="space-y-4">
              <div className="flex items-center gap-4 p-4 bg-gradient-to-r from-red-500 via-rose-600 to-amber-600 rounded-2xl text-white shadow-md shadow-red-500/10">
                <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center shrink-0">
                  <img
                    src="./src/assets/icons/gmail.png"
                    alt="email"
                    className="w-6 h-6 object-contain"
                  />
                </div>
                <div>
                  <p className="text-xs font-medium text-red-100">Email</p>
                  <p className="text-sm font-semibold tracking-wide">
                    atayanajla269@gmail.com
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 bg-gradient-to-r from-emerald-500 via-green-600 to-teal-600 rounded-2xl text-white shadow-md shadow-emerald-500/10">
                <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center shrink-0">
                  <img
                    src="./src/assets/icons/whatsapp.png"
                    alt="WhatsApp"
                    className="w-6 h-6 object-contain"
                  />
                </div>
                <div>
                  <p className="text-xs font-medium text-emerald-100">
                    WhatsApp
                  </p>
                  <p className="text-sm font-semibold tracking-wide">
                    +62 822-8514-9895
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="p-6 md:p-8 bg-white dark:bg-slate-900/10 border border-slate-200 dark:border-slate-800 rounded-3xl shadow-xl">
            <div className="flex items-center gap-4 p-4 bg-gradient-to-r from-teal-500 via-emerald-500 to-cyan-500 rounded-2xl text-white shadow-md shadow-teal-500/10 border border-teal-400/20">
              <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center shrink-0">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  className="w-6 h-6 text-white animate-bounce"
                  strokeWidth={2.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
                  />
                </svg>
              </div>
              <div>
                <p className="text-xs font-medium">Base Location</p>
                <p className="text-sm font-bold tracking-wide">
                  Padang, Indonesia
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="p-6 md:p-8 bg-white dark:bg-slate-900/10 border border-slate-200 dark:border-slate-800 rounded-3xl shadow-xl space-y-6">
          <h4 className="text-xl font-bold text-blue-500">Connect With Me</h4>
          <div className="space-y-4">
            {/* LinkedIn */}
            <a
              href="https://linkedin.com/in/ataya-najla-883160243"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-4 bg-gradient-to-r from-blue-600 via-sky-600 to-blue-700 rounded-2xl text-white shadow-md shadow-blue-600/10 hover:scale-[1.02] transition duration-300 block cursor-pointer group"
            >
              <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center shrink-0">
                <img
                  src="./src/assets/icons/linkedin.png"
                  alt="linkedin"
                  className="w-6 h-6 object-contain"
                />
              </div>
              <div>
                <p className="text-xs font-medium text-blue-100">LinkedIn</p>
                <p className="text-sm font-semibold tracking-wide">
                  Ataya Najla
                </p>
              </div>
            </a>

            <a
              href="https://github.com/Atayanajla"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-4 bg-gradient-to-r from-slate-800 via-neutral-900 to-zinc-800 rounded-2xl text-white shadow-md shadow-slate-900/10 hover:scale-[1.02] transition duration-300 block cursor-pointer group"
            >
              <div className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center shrink-0">
                <img
                  src="./src/assets/icons/github.png"
                  alt="github"
                  className="w-6 h-6 object-contain brightness-0 invert-0"
                />
              </div>
              <div>
                <p className="text-xs font-medium text-slate-300">GitHub</p>
                <p className="text-sm font-semibold tracking-wide">
                  atayanajla
                </p>
              </div>
            </a>
            <a
              href="https://www.instagram.com/atayanajla29?igsh=cmo3NXdtbm5wbjgx"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-4 bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 rounded-2xl text-white shadow-md shadow-pink-600/10 hover:scale-[1.02] transition duration-300 block cursor-pointer group"
            >
              <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center shrink-0">
                <img
                  src="./src/assets/icons/instagram.png"
                  alt="instagram"
                  className="w-6 h-6 object-contain"
                />
              </div>
              <div>
                <p className="text-xs font-medium text-pink-100">Instagram</p>
                <p className="text-sm font-semibold tracking-wide">
                  @atayanajla29
                </p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
