import { useState } from "react";
import { allExperiences } from "../data/ExperiencesData";

const Experience = () => {
  const [expandedItems, setExpandedItems] = useState({});
  const [showAll, setShowAll] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const toggleExpand = (id) => {
    setExpandedItems((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const visibleExperiences = showAll
    ? allExperiences
    : allExperiences.slice(0, 2);

  return (
    <section id="experience" className="max-w-7xl mx-auto px-6 py-20 relative">
      <div className="text-center mb-20">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight ">
          Experience
        </h2>
        <div className="w-30 h-1 bg-blue-600 dark:bg-blue-500 rounded mt-2 mx-auto"></div>
      </div>

      <div className="relative max-w-5xl mx-auto">
        <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-purple-500 to-slate-800"></div>

        <div className="space-y-12 md:space-y-16 relative">
          {visibleExperiences.map((exp, index) => {
            const isEven = index % 2 === 0;
            const isExpanded = expandedItems[exp.id];

            return (
              <div
                key={exp.id}
                className={`flex flex-col md:flex-row items-start md:items-center gap-8 md:gap-16 relative ${
                  isEven ? "" : "md:flex-row-reverse"
                }`}
              >
                <div className="absolute left-4 md:left-1/2 transform -translate-x-[5px] md:-translate-x-1/2 w-3 h-3 bg-blue-500 rounded-full shadow-[0_0_10px_#3b82f6] z-10"></div>

                <div className="w-full md:w-1/2 flex justify-start md:justify-center pl-10 md:pl-0">
                  <button
                    onClick={() => setSelectedImage(exp.image)}
                    className="relative w-36 h-48 md:w-48 md:h-64 flex items-center justify-center cursor-zoom-in outline-none transition-transform duration-300 hover:scale-105 group"
                  >
                    <div className="absolute inset-[-10px] bg-blue-500/30 rounded-3xl blur-xl opacity-85 group-hover:opacity-100 group-hover:bg-blue-400/40 transition duration-500 z-0 pointer-events-none"></div>
                    <div className="absolute inset-[-5px] bg-cyan-400/20 rounded-3xl blur-2xl opacity-75 group-hover:opacity-100 transition duration-500 z-0 pointer-events-none"></div>
                    <div className="relative w-full h-full rounded-2xl border border-slate-700/60 overflow-hidden z-10 shadow-2xl group-hover:border-blue-400 transition-colors duration-300">
                      <img
                        src={exp.image}
                        alt={exp.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </button>
                </div>

                <div className="w-full md:w-1/2 pl-10 md:pl-0 text-left">
                  <div className="p-6 bg-[#120F17]/10 backdrop-blur-sm border border-slate-800/80 rounded-2xl shadow-xl hover:border-slate-700/60 transition-all duration-300">
                    <span className="text-[10px] font-extrabold tracking-widest px-2.5 py-1 rounded-full bg-slate-800 text-slate-400 border border-slate-700">
                      {exp.type}
                    </span>
                    <h4 className="text-lg md:text-xl font-bold  mt-3 leading-snug">
                      {exp.title}
                    </h4>
                    <p className="text-sm font-medium text-blue-400 mt-1">
                      {exp.subtitle}
                    </p>
                    <p className="text-xs mt-1 font-mono">{exp.date}</p>
                    <div
                      className={`transition-all duration-500 overflow-hidden ${
                        isExpanded
                          ? "max-h-[1000px] opacity-100 mt-4"
                          : "max-h-0 opacity-0"
                      }`}
                    >
                      <ul className="list-disc pl-5 space-y-2  text-xs md:text-sm border-t border-slate-800/60 pt-3">
                        {exp.bullets.map((bullet, idx) => (
                          <li key={idx} className="leading-relaxed">
                            {bullet}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <button
                      onClick={() => toggleExpand(exp.id)}
                      className="mt-4 flex items-center gap-1 text-xs font-semibold hover:text-blue-400 transition-colors duration-200"
                    >
                      <span>
                        {isExpanded ? "Show Less" : "View Details..."}
                      </span>
                      <svg
                        className={`w-3 h-3 transform transition-transform duration-300 ${isExpanded ? "rotate-180" : ""}`}
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div
          className={`absolute bottom-0 left-0 right-0 flex flex-col items-center justify-end pb-2 pointer-events-none transition-all duration-500 z-20 ${
            showAll
              ? "h-0 overflow-hidden"
              : "h-48 bg-gradient-to-t from-[#120F17] via-[#120F17]/90 via-[#120F17]/50 to-transparent backdrop-blur-[2px]"
          }`}
        >
          {!showAll && (
            <button
              onClick={() => setShowAll(true)}
              className="pointer-events-auto mb-4 px-6 py-2.5 text-xs md:text-sm font-bold tracking-wide text-white bg-blue-600/90 hover:bg-blue-600 rounded-xl shadow-[0_4px_20px_rgba(37,99,235,0.4)] transition-all duration-300 hover:scale-105"
            >
              See All Experience
            </button>
          )}
        </div>
      </div>

      {showAll && (
        <div className="flex justify-center mt-12">
          <button
            onClick={() => {
              setShowAll(false);
              document
                .getElementById("experience")
                .scrollIntoView({ behavior: "smooth" });
            }}
            className="px-6 py-2.5 text-xs md:text-sm font-bold tracking-wide text-white bg-blue-600/90 border border-slate-800 hover:border-slate-700 hover:text-white rounded-xl transition-all duration-300"
          >
            Show Less
          </button>
        </div>
      )}

      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md transition-opacity duration-300"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-6 right-6 text-slate-400 hover:text-white transition-colors duration-200 z-50"
            onClick={() => setSelectedImage(null)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="28"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>

          <div
            className="relative max-w-xl md:max-w-2xl max-h-[85vh] flex items-center justify-center transition-transform duration-300 transform scale-100"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="absolute inset-[-20px] bg-blue-500/25 rounded-[32px] blur-2xl pointer-events-none z-0"></div>
            <div className="absolute inset-[-10px] bg-cyan-400/15 rounded-[32px] blur-3xl pointer-events-none z-0"></div>

            <div className="relative w-full h-full rounded-2xl border border-slate-700/60 overflow-hidden z-10 shadow-[0_0_50px_rgba(0,0,0,0.8)]">
              <img
                src={selectedImage}
                alt="Preview"
                className="w-full max-h-[80vh] object-contain block bg-[#120F17]/20"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Experience;
