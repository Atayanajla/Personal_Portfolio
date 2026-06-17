import { useEffect, useState } from "react";

const ProjectDetailModal = ({ project, onClose }) => {
  const [currentImgIndex, setCurrentImgIndex] = useState(0);
  useEffect(() => {
    if (project) {
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [project]);

  if (!project) return null;

  const handlePrevImg = (e) => {
    e.stopPropagation();
    setCurrentImgIndex((prev) =>
      prev === 0 ? project.images.length - 1 : prev - 1,
    );
  };

  const handleNextImg = (e) => {
    e.stopPropagation();
    setCurrentImgIndex((prev) =>
      prev === project.images.length - 1 ? 0 : prev + 1,
    );
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center px-4 md:px-6 py-10 overflow-hidden">
      <div
        className="fixed inset-0 bg-slate-950/85 backdrop-blur-md transition-opacity duration-300 cursor-pointer"
        onClick={onClose}
      />
      <div className="relative w-full max-w-4xl rounded-2xl border border-slate-800/80 bg-slate-900 text-slate-100 shadow-2xl transition-all duration-300 max-h-full flex flex-col z-10 animate-scaleUp">
        <button
          onClick={onClose}
          className="absolute -top-5 -right-2 md:-top-6 md:-right-6 z-50 flex items-center justify-center p-2.5 rounded-full border border-slate-800 bg-slate-900 text-slate-400 hover:text-white hover:bg-slate-800 hover:scale-110 shadow-2xl transition-all duration-300 cursor-pointer group"
          title="Close Modal"
        >
          <svg
            viewBox="0 0 24 24"
            stroke="currentColor"
            fill="none"
            className="w-5 h-5 md:w-6 md:h-6 transform transition-transform group-hover:rotate-90"
            strokeWidth={2.5}
          >
            <path
              strokeLinejoin="round"
              strokeLinecap="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        <div className="overflow-y-auto p-6 md:p-8 space-y-6 scrollbar-thin scrollbar-thumb-slate-800">
          <div className="relative w-full h-64 md:h-96 rounded-xl overflow-hidden border border-slate-800 bg-slate-950 group/carousel">
            <img
              src={project.images[currentImgIndex]}
              alt={`${project.title} - ${currentImgIndex + 1}`}
              className="w-full h-full object-contain transition-all duration-500"
            />

            {project.images.length > 1 && (
              <>
                <button
                  onClick={handlePrevImg}
                  className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-slate-900/70 text-slate-300 hover:bg-slate-800 hover:text-white backdrop-blur-sm transition-all opacity-0 group-hover/carousel:opacity-100 cursor-pointer"
                >
                  <svg
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    fill="none"
                    className="w-5 h-5"
                    strokeWidth={3}
                  >
                    <path
                      strokeLinejoin="round"
                      strokeLinecap="round"
                      d="M15 19l-7-7 7-7"
                    />
                  </svg>
                </button>

                <button
                  onClick={handleNextImg}
                  className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-slate-900/70 text-slate-300 hover:bg-slate-800 hover:text-white backdrop-blur-sm transition-all opacity-0 group-hover/carousel:opacity-100 cursor-pointer"
                >
                  <svg
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    fill="none"
                    className="w-5 h-5"
                    strokeWidth={3}
                  >
                    <path
                      strokeLinejoin="round"
                      strokeLinecap="round"
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </button>

                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5 px-3 py-1 rounded-full bg-slate-950/70 backdrop-blur-sm text-[10px] font-medium text-slate-400">
                  <span className="text-white">{currentImgIndex + 1}</span> /{" "}
                  {project.images.length}
                </div>
              </>
            )}
          </div>

          <div className="space-y-4">
            <h3 className="text-2xl md:text-3xl font-bold text-white tracking-wide">
              {project.title}
            </h3>

            <div className="flex flex-wrap gap-2 pt-1">
              {project.tags.map((tag, idx) => (
                <span
                  key={idx}
                  className="text-xs font-semibold px-3 py-1 rounded-full bg-gradient-to-r from-blue-500/10 to-indigo-500/10 text-blue-400 border border-blue-500/20 shadow-sm"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <hr className="border-slate-800/60" />

          <div className="space-y-4">
            <h4 className="text-sm font-bold uppercase tracking-widest text-slate-400">
              Project Description
            </h4>
            <p className="text-sm md:text-base text-slate-300 font-light leading-relaxed whitespace-pre-line">
              {project.description}
            </p>
          </div>

          {(project.codeLink || project.webLink) && (
            <div className="flex flex-wrap gap-4 pt-4">
              {project.codeLink && (
                <a
                  href={project.codeLink}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-bold text-white bg-slate-800 hover:bg-slate-700 rounded-xl transition-all cursor-pointer"
                >
                  Source Code
                </a>
              )}
              {project.webLink && (
                <a
                  href={project.webLink}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-bold text-white bg-blue-600 hover:bg-blue-500 rounded-xl transition-all cursor-pointer"
                >
                  Live Demo
                </a>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectDetailModal;
