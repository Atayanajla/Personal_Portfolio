import { useState } from "react";
import { projectsData } from "../data/ProjectsData";
import ProjectDetailModal from "../components/ProjectDetailModal";

const AllProject = () => {
  const [filter, setFilter] = useState("ALL");
  const [selectedProject, setSelectedProject] = useState(null);

  const filteredProjects =
    filter === "ALL"
      ? projectsData
      : projectsData.filter(
          (project) =>
            project.type && project.type.toLowerCase() === filter.toLowerCase(),
        );

  return (
    <div className="max-w-6xl mx-auto px-6 py-20">
      <div className="text-center mb-16 space-y-3">
        <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight">
          Past Showcase &{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-indigo-500 to-cyan-400">
            Proven Projects
          </span>
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 mx-auto rounded-full" />
      </div>

      <div className="flex justify-center gap-3 mb-16">
        {["ALL", "web", "mobile"].map((cat) => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={`px-5 py-2 text-xs md:text-sm font-bold tracking-wide rounded-xl border transition-all duration-300 cursor-pointer capitalize ${
              filter.toLowerCase() === cat.toLowerCase()
                ? "bg-blue-500 text-white border-blue-500 shadow-lg shadow-blue-500/20"
                : "bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 text-slate-500 hover:border-slate-300 dark:hover:border-slate-700"
            }`}
          >
            {cat === "ALL" ? "All" : cat}
          </button>
        ))}
      </div>

      <div className="space-y-10">
        {filteredProjects.map((project) => (
          <div
            key={project.id}
            className="group flex flex-col md:flex-row bg-white dark:bg-slate-900/10 border border-slate-200/80 dark:border-slate-800/80 rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl hover:border-slate-300 dark:hover:border-slate-700 transition-all duration-500"
          >
            <div className="p-8 md:p-10 flex-1 flex flex-col justify-between space-y-6">
              <div className="space-y-3">
                <h4 className="text-xl md:text-2xl font-bold group-hover:text-blue-500 transition-colors duration-300">
                  {project.title}
                </h4>

                <p className="text-sm leading-relaxed line-clamp-3 md:line-clamp-4">
                  {project.description}
                </p>

                {project.tags && (
                  <div className="flex flex-wrap gap-2 pt-2">
                    {project.tags.slice(0, 3).map((tag, index) => (
                      <span
                        key={index}
                        className="text-xs font-medium px-3 py-1 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 rounded-full border border-slate-200/40 dark:border-slate-700/40"
                      >
                        {tag}
                      </span>
                    ))}
                    {project.tags.length > 3 && (
                      <span className="text-xs font-medium px-2 py-1 text-slate-400">
                        +{project.tags.length - 3} more
                      </span>
                    )}
                  </div>
                )}
              </div>

              <div className="pt-2">
                <button
                  onClick={() => setSelectedProject(project)}
                  className="inline-flex items-center gap-2 px-6 py-3 text-xs md:text-sm font-bold tracking-wide rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 hover:bg-blue-500 hover:text-white dark:hover:bg-blue-500 shadow-sm transition-all duration-300 cursor-pointer group/btn"
                >
                  Detail Project
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
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </button>
              </div>
            </div>

            <div className="w-full md:w-[40%] lg:w-[35%] h-[260px] md:h-[320px] overflow-hidden relative shrink-0 bg-slate-100 dark:bg-slate-800/50">
              <img
                src={project.images && project.images[0]}
                alt={project.title}
                className="w-full h-full object-cover object-top transform transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-white/5 to-transparent dark:from-slate-950/5 pointer-events-none" />
            </div>
          </div>
        ))}
      </div>

      {selectedProject && (
        <ProjectDetailModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </div>
  );
};

export default AllProject;
