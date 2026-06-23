import { useState } from "react";
import { projectsData } from "../data/ProjectsData";
import ProjectDetailModal from "../components/ProjectDetailModal";

const Showcase = () => {
  const [activeShowcase, setActiveShowcase] = useState("PROJECT");
  const [selectedImage, setSelectedImage] = useState(null);
  const [showAll, setShowAll] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [showAllCertificates, setShowAllCertificates] = useState(false);

  const visibleProjects = showAll ? projectsData : projectsData.slice(0, 6);

  const certificates = [
    {
      src: "/certificate/BNSP.jpg",
      alt: "Sertifikat BNSP Competency",
    },
    { src: "/certificate/sertif1.jpg", alt: "Sertifikat 1" },
    { src: "/certificate/sertif2.jpg", alt: "Sertifikat 2" },
    { src: "/certificate/sertif3.jpg", alt: "Sertifikat 3" },
    { src: "/certificate/sertif4.jpg", alt: "Sertifikat 4" },
    { src: "/certificate/sertif5.jpg", alt: "Sertifikat 5" },
    { src: "/certificate/sertif6.jpg", alt: "Sertifikat 6" },
    { src: "/certificate/sertif7.jpg", alt: "Sertifikat 7" },
  ];

  return (
    <section id="showcase" className="max-w-7xl mx-auto px-6 py-20">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
          Showcase
        </h2>
        <div className="w-30 h-1 bg-blue-600 dark:bg-blue-500 rounded mt-2 mx-auto md:mx-auto"></div>
      </div>
      <div className="flex justify-center mb-12">
        <div className="flex bg-slate-200/70 dark:bg-slate-900 p-1.5 rounded-2xl border border-slate-300/60 dark:border-slate-800 w-full max-w-xl justify-between gap-1">
          <button
            onClick={() => setActiveShowcase("SKILL")}
            className={`w-full py-2.5 text-xs md:text-sm font-semibold rounded-xl transition-all duration-300 flex items-center justify-center gap-2 ${
              activeShowcase === "SKILL"
                ? "bg-white dark:bg-slate-800 shadow-sm text-slate-900 dark:text-white"
                : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200"
            }`}
          >
            <span>Tech Stack</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              viewBox="0 0 24 24"
              className="w-4 h-4 md:w-5 md:h-5"
            >
              <path d="m18 16 4-4-4-4" />
              <path d="m6 8-4 4 4 4" />
              <path d="m14.5 4-5 16" />
            </svg>
          </button>

          <button
            onClick={() => setActiveShowcase("PROJECT")}
            className={`w-full py-2.5 text-xs md:text-sm font-semibold rounded-xl transition-all duration-300 flex items-center justify-center gap-2 ${
              activeShowcase === "PROJECT"
                ? "bg-white dark:bg-slate-800 shadow-sm text-slate-900 dark:text-white"
                : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200"
            }`}
          >
            <span>Project</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              viewBox="0 0 24 24"
              className="w-4 h-4 md:w-5 md:h-5"
            >
              <path d="M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2z" />
            </svg>
          </button>

          <button
            onClick={() => setActiveShowcase("CERTIFICATE")}
            className={`w-full py-2.5 text-xs md:text-sm font-semibold rounded-xl transition-all duration-300 flex items-center justify-center gap-2 ${
              activeShowcase === "CERTIFICATE"
                ? "bg-white dark:bg-slate-800 shadow-sm text-slate-900 dark:text-white"
                : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200"
            }`}
          >
            <span>Certificate</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              viewBox="0 0 24 24"
              className="w-4 h-4 md:w-5 md:h-5"
            >
              <circle cx="12" cy="8" r="6" />
              <path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11" />
            </svg>
          </button>
        </div>
      </div>

      <div className="min-h-[400px]">
        {activeShowcase === "SKILL" && (
          <div className="max-w-5xl mx-auto animate-fadeIn px-4">
            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-8 gap-6 justify-items-center">
              <div className="flex flex-col items-center gap-2">
                <div className="w-20 h-20  dark:bg-slate-800/10 rounded-2xl flex items-center justify-center p-4 border border-slate-200/50 dark:border-slate-700/50 shadow-sm transition-transform hover:scale-105">
                  <img
                    src="/icons/html-5.png"
                    alt="HTML"
                    className="w-full h-full object-contain"
                  />
                </div>
                <span className="text-xs font-semibold">HTML</span>
              </div>

              <div className="flex flex-col items-center gap-2">
                <div className="w-20 h-20  dark:bg-slate-800/10 rounded-2xl flex items-center justify-center p-4 border border-slate-200/50 dark:border-slate-700/50 shadow-sm transition-transform hover:scale-105">
                  <img
                    src="/icons/css.png"
                    alt="CSS"
                    className="w-full h-full object-contain"
                  />
                </div>
                <span className="text-xs font-semibold">CSS</span>
              </div>

              <div className="flex flex-col items-center gap-2">
                <div className="w-20 h-20  dark:bg-slate-800/10 rounded-2xl flex items-center justify-center p-4 border border-slate-200/50 dark:border-slate-700/50 shadow-sm transition-transform hover:scale-105">
                  <img
                    src="/icons/java-script.png"
                    alt="JS"
                    className="w-full h-full object-contain"
                  />
                </div>
                <span className="text-xs font-semibold">JavaScript</span>
              </div>

              <div className="flex flex-col items-center gap-2">
                <div className="w-20 h-20  dark:bg-slate-800/10 rounded-2xl flex items-center justify-center p-4 border border-slate-200/50 dark:border-slate-700/50 shadow-sm transition-transform hover:scale-105">
                  <img
                    src="/icons/php.png"
                    alt="PHP"
                    className="w-full h-full object-contain"
                  />
                </div>
                <span className="text-xs font-semibold">PHP</span>
              </div>

              <div className="flex flex-col items-center gap-2">
                <div className="w-20 h-20  dark:bg-slate-800/10 rounded-2xl flex items-center justify-center p-4 border border-slate-200/50 dark:border-slate-700/50 shadow-sm transition-transform hover:scale-105">
                  <img
                    src="/icons/python.png"
                    alt="Python"
                    className="w-full h-full object-contain"
                  />
                </div>
                <span className="text-xs font-semibold">Python</span>
              </div>

              <div className="flex flex-col items-center gap-2">
                <div className="w-20 h-20  dark:bg-slate-800/10 rounded-2xl flex items-center justify-center p-4 border border-slate-200/50 dark:border-slate-700/50 shadow-sm transition-transform hover:scale-105">
                  <img
                    src="/icons/Laravel.png"
                    alt="Laravel"
                    className="w-full h-full object-contain"
                  />
                </div>
                <span className="text-xs font-semibold">Laravel</span>
              </div>

              <div className="flex flex-col items-center gap-2">
                <div className="w-20 h-20  dark:bg-slate-800/10 rounded-2xl flex items-center justify-center p-4 border border-slate-200/50 dark:border-slate-700/50 shadow-sm transition-transform hover:scale-105">
                  <img
                    src="/icons/react.png"
                    alt="React"
                    className="w-full h-full object-contain"
                  />
                </div>
                <span className="text-xs font-semibold">ReactJS</span>
              </div>

              <div className="flex flex-col items-center gap-2">
                <div className="w-20 h-20  dark:bg-slate-800/10 rounded-2xl flex items-center justify-center p-4 border border-slate-200/50 dark:border-slate-700/50 shadow-sm transition-transform hover:scale-105">
                  <img
                    src="/icons/database.png"
                    alt="MySQL"
                    className="w-full h-full object-contain"
                  />
                </div>
                <span className="text-xs font-semibold">MySQL</span>
              </div>

              <div className="flex flex-col items-center gap-2">
                <div className="w-20 h-20  dark:bg-slate-800/10 rounded-2xl flex items-center justify-center p-4 border border-slate-200/50 dark:border-slate-700/50 shadow-sm transition-transform hover:scale-105">
                  <img
                    src="/icons/react.png"
                    alt="React"
                    className="w-full h-full object-contain"
                  />
                </div>
                <span className="text-xs font-semibold">React Native</span>
              </div>

              <div className="flex flex-col items-center gap-2">
                <div className="w-20 h-20  dark:bg-slate-800/10 rounded-2xl flex items-center justify-center p-4 border border-slate-200/50 dark:border-slate-700/50 shadow-sm transition-transform hover:scale-105">
                  <img
                    src="/icons/Tailwind.png"
                    alt="Tailwind"
                    className="w-full h-full object-contain"
                  />
                </div>
                <span className="text-xs font-semibold">Tailwind CSS</span>
              </div>

              <div className="flex flex-col items-center gap-2">
                <div className="w-20 h-20  dark:bg-slate-800/10 rounded-2xl flex items-center justify-center p-4 border border-slate-200/50 dark:border-slate-700/50 shadow-sm transition-transform hover:scale-105">
                  <img
                    src="/icons/Bootstrap.png"
                    alt="Bootstrap"
                    className="w-full h-full object-contain"
                  />
                </div>
                <span className="text-xs font-semibold">Bootstrap</span>
              </div>

              <div className="flex flex-col items-center gap-2">
                <div className="w-20 h-20  dark:bg-slate-800/10 rounded-2xl flex items-center justify-center p-4 border border-slate-200/50 dark:border-slate-700/50 shadow-sm transition-transform hover:scale-105">
                  <img
                    src="/icons/Vercel.png"
                    alt="Vercel"
                    className="w-full h-full object-contain"
                  />
                </div>
                <span className="text-xs font-semibold">Vercel</span>
              </div>

              <div className="flex flex-col items-center gap-2">
                <div className="w-20 h-20  dark:bg-slate-800/10 rounded-2xl flex items-center justify-center p-4 border border-slate-200/50 dark:border-slate-700/50 shadow-sm transition-transform hover:scale-105">
                  <img
                    src="/icons/Vitejs.png"
                    alt="Vitejs"
                    className="w-full h-full object-contain"
                  />
                </div>
                <span className="text-xs font-semibold">Vite</span>
              </div>

              <div className="flex flex-col items-center gap-2">
                <div className="w-20 h-20  dark:bg-slate-800/10 rounded-2xl flex items-center justify-center p-4 border border-slate-200/50 dark:border-slate-700/50 shadow-sm transition-transform hover:scale-105">
                  <img
                    src="/icons/codeigniter.png"
                    alt="codeigniter"
                    className="w-full h-full object-contain"
                  />
                </div>
                <span className="text-xs font-semibold">Codeigniter4</span>
              </div>

              <div className="flex flex-col items-center gap-2">
                <div className="w-20 h-20  dark:bg-slate-800/10 rounded-2xl flex items-center justify-center p-4 border border-slate-200/50 dark:border-slate-700/50 shadow-sm transition-transform hover:scale-105">
                  <img
                    src="/icons/postman.jpg"
                    alt="postman"
                    className="w-full h-full object-contain"
                  />
                </div>
                <span className="text-xs font-semibold">Postman</span>
              </div>

              <div className="flex flex-col items-center gap-2">
                <div className="w-20 h-20  dark:bg-slate-800/10 rounded-2xl flex items-center justify-center p-4 border border-slate-200/50 dark:border-slate-700/50 shadow-sm transition-transform hover:scale-105">
                  <img
                    src="/icons/figma.png"
                    alt="figma"
                    className="w-full h-full object-contain"
                  />
                </div>
                <span className="text-xs font-semibold">figma</span>
              </div>

              <div className="flex flex-col items-center gap-2">
                <div className="w-20 h-20  dark:bg-slate-800/10 rounded-2xl flex items-center justify-center p-4 border border-slate-200/50 dark:border-slate-700/50 shadow-sm transition-transform hover:scale-105">
                  <img
                    src="/icons/Canva.png"
                    alt="Canva"
                    className="w-full h-full object-contain"
                  />
                </div>
                <span className="text-xs font-semibold">Canva</span>
              </div>
            </div>
          </div>
        )}

        {activeShowcase === "PROJECT" && (
          <div className="max-w-6xl mx-auto space-y-8 animate-fadeIn">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-12 gap-x-8 pt-6">
              {visibleProjects.map((project) => (
                <div
                  key={project.id}
                  className="relative flex w-full flex-col rounded-2xl bg-slate-900/10 backdrop-blur-md border border-slate-800/80  shadow-xl hover:shadow-blue-500/10 transition-all duration-300 hover:-translate-y-2 group"
                >
                  <div className="relative mx-4 -mt-6 h-44 overflow-hidden rounded-xl border border-slate-700/50 shadow-lg bg-slate-950">
                    <img
                      src={project.images[0]}
                      alt={project.title}
                      className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                  </div>

                  {/* BAGIAN TENGAH: KONTEN TEKS */}
                  <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                    <div>
                      <h5 className="mb-2 line-clamp-1 font-sans text-xl font-bold tracking-wide group-hover:text-blue-400 transition-colors duration-300">
                        {project.title}
                      </h5>
                      <p className="font-sans text-sm font-light leading-relaxed line-clamp-3">
                        {project.description}
                      </p>
                    </div>

                    {/* Tagging Tech Stack */}
                    <div className="flex flex-wrap gap-1.5 pt-2">
                      {project.tags.slice(0, 3).map((tag, idx) => (
                        <span
                          key={idx}
                          className="text-[10px] font-medium bg-blue-500/10 text-blue-400 border border-blue-500/20 px-2 py-0.5 rounded-md"
                        >
                          {tag}
                        </span>
                      ))}
                      {project.tags.length > 3 && (
                        <span className="text-[10px] font-medium bg-slate-800 text-slate-400 px-1.5 py-0.5 rounded-md">
                          +{project.tags.length - 3}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* BAGIAN BAWAH: TOMBOL DETAIL */}
                  <div className="p-6 pt-0">
                    <button
                      onClick={() => setSelectedProject(project)} // Menampilkan detail pop-up project yang di-klik
                      className="group/btn relative w-full inline-flex items-center justify-center px-4 py-2.5 text-xs font-bold text-white rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 shadow-lg shadow-blue-500/20 hover:shadow-blue-500/30 transition-all duration-300 hover:-translate-y-0.5 cursor-pointer"
                    >
                      <span className="relative flex items-center gap-2">
                        Details
                        <svg
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          fill="none"
                          className="w-4 h-4 transform transition-transform group-hover/btn:translate-x-1"
                          strokeWidth={2.5}
                        >
                          <path
                            strokeLinejoin="round"
                            strokeLinecap="round"
                            d="M17 8l4 4m0 0l-4 4m4-4H3"
                          />
                        </svg>
                      </span>
                    </button>
                  </div>
                </div>
              ))}
              <ProjectDetailModal
                key={selectedProject?.id}
                project={selectedProject}
                onClose={() => setSelectedProject(null)}
              />
            </div>

            {/* PANEL NAVIGASI DI POJOK KIRI BAWAH (Tanpa buram, langsung cut, Auto-Scroll) */}
            {projectsData.length > 6 && (
              <div className="flex justify-start pt-4 pl-2 animate-fadeIn">
                {!showAll ? (
                  <button
                    onClick={() => setShowAll(true)}
                    className="group flex items-center gap-2 text-xs md:text-sm font-bold tracking-wide text-blue-400 hover:text-blue-300 transition-colors duration-300 cursor-pointer"
                  >
                    View All Projects
                    <svg
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      fill="none"
                      className="w-4 h-4 transform transition-transform group-hover:translate-x-1"
                      strokeWidth={2.5}
                    >
                      <path
                        strokeLinejoin="round"
                        strokeLinecap="round"
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </button>
                ) : (
                  <button
                    onClick={() => {
                      setShowAll(false);
                      // Otomatis scroll ke atas section project secara halus agar konsisten dengan Experience
                      document
                        .getElementById("showcase") // 🌟 Sesuaikan dengan ID pembungkus paling atas portofoliomu jika berbeda
                        ?.scrollIntoView({ behavior: "smooth" });
                    }}
                    className="group flex items-center gap-2 text-xs md:text-sm font-bold tracking-wide hover:text-slate-300 transition-colors duration-300 cursor-pointer"
                  >
                    <svg
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      fill="none"
                      className="w-4 h-4 transform transition-transform group-hover:-translate-x-1"
                      strokeWidth={2.5}
                    >
                      <path
                        strokeLinejoin="round"
                        strokeLinecap="round"
                        d="M15 19l-7-7 7-7"
                      />
                    </svg>
                    Show Less
                  </button>
                )}
              </div>
            )}
          </div>
        )}

        {activeShowcase === "CERTIFICATE" && (
          <div
            id="certificates-section"
            className="max-w-5xl mx-auto space-y-8 animate-fadeIn"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {(showAllCertificates
                ? certificates
                : certificates.slice(0, 6)
              ).map((cert, index) => (
                <div
                  key={index}
                  onClick={() => setSelectedImage(cert.src)}
                  className="aspect-[4/3] bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl overflow-hidden shadow-sm hover:scale-[1.02] transition cursor-zoom-in group relative"
                >
                  <img
                    src={cert.src}
                    alt={cert.alt}
                    className="w-full h-full object-cover select-none"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition" />
                </div>
              ))}
            </div>

            {certificates.length > 6 && (
              <div className="flex justify-start pt-4 pl-2 animate-fadeIn">
                {!showAllCertificates ? (
                  <button
                    onClick={() => setShowAllCertificates(true)}
                    className="group flex items-center gap-2 text-xs md:text-sm font-bold tracking-wide text-blue-400 hover:text-blue-300 transition-colors duration-300 cursor-pointer"
                  >
                    View All Certificates
                    <svg
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      fill="none"
                      className="w-4 h-4 transform transition-transform group-hover:translate-x-1"
                      strokeWidth={2.5}
                    >
                      <path
                        strokeLinejoin="round"
                        strokeLinecap="round"
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </button>
                ) : (
                  <button
                    onClick={() => {
                      setShowAllCertificates(false);
                      document
                        .getElementById("showcase")
                        ?.scrollIntoView({ behavior: "smooth" });
                    }}
                    className="group flex items-center gap-2 text-xs md:text-sm font-bold tracking-wide hover:text-slate-300 transition-colors duration-300 cursor-pointer"
                  >
                    <svg
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      fill="none"
                      className="w-4 h-4 transform transition-transform group-hover:-translate-x-1"
                      strokeWidth={2.5}
                    >
                      <path
                        strokeLinejoin="round"
                        strokeLinecap="round"
                        d="M15 19l-7-7 7-7"
                      />
                    </svg>
                    Show Less
                  </button>
                )}
              </div>
            )}
          </div>
        )}
        {selectedImage && (
          <div
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm transition-opacity duration-300"
            onClick={() => setSelectedImage(null)}
          >
            <div
              className="relative max-w-5xl max-h-[90vh] p-1 flex flex-col items-center justify-center animate-in zoom-in-95 duration-200"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute -top-10 right-2 text-white hover:text-slate-300 text-sm font-medium flex items-center gap-1.5 cursor-pointer bg-black/30 px-4 py-1.5 rounded-full backdrop-blur-md"
              >
                ✕ Close
              </button>

              <img
                src={selectedImage}
                alt="Sertifikat Preview Besar"
                className="max-w-full max-h-[80vh] object-contain rounded-xl shadow-2xl border border-white/10"
              />
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Showcase;
