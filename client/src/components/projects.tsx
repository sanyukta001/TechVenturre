import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { ExternalLink, Github } from "lucide-react";
import { type ProjectType } from "@shared/schema";

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState("all");

  const { data: projects = [], isLoading } = useQuery<ProjectType[]>({
    queryKey: ["/api/projects"],
  });

  const filters = [
    { id: "all", label: "All Projects" },
    { id: "web", label: "Web Development" },
    { id: "mobile", label: "Mobile Apps" },
    { id: "ecommerce", label: "E-commerce" },
  ];

  const filteredProjects = projects.filter(project => 
    activeFilter === "all" || project.category === activeFilter
  );

  const getCategoryColor = (category: string) => {
    const colors = {
      web: "bg-blue-100 text-primary",
      mobile: "bg-green-100 text-green-700",
      ecommerce: "bg-orange-100 text-orange-700",
      dashboard: "bg-cyan-100 text-cyan-700",
      social: "bg-pink-100 text-pink-700",
      marketplace: "bg-purple-100 text-purple-700"
    };
    return colors[category as keyof typeof colors] || "bg-gray-100 text-gray-700";
  };

  if (isLoading) {
    return (
      <section id="projects" className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-secondary mb-6">Featured Projects</h2>
            <p className="text-xl text-slate-600">
              Showcasing our latest work and successful client collaborations
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="bg-white rounded-2xl overflow-hidden shadow-lg animate-pulse">
                <div className="w-full h-48 bg-slate-200"></div>
                <div className="p-6">
                  <div className="h-4 bg-slate-200 rounded mb-3"></div>
                  <div className="h-6 bg-slate-200 rounded mb-3"></div>
                  <div className="h-16 bg-slate-200 rounded mb-4"></div>
                  <div className="flex gap-2">
                    <div className="h-6 w-16 bg-slate-200 rounded"></div>
                    <div className="h-6 w-16 bg-slate-200 rounded"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="projects" className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-secondary mb-6">Featured Projects</h2>
          <p className="text-xl text-slate-600">
            Showcasing our latest work and successful client collaborations
          </p>
        </div>
        
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-6 py-2 rounded-lg font-medium transition-colors ${
                activeFilter === filter.id
                  ? "bg-primary text-white"
                  : "bg-slate-200 text-slate-700 hover:bg-slate-300"
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.length === 0 ? (
            <div className="col-span-full text-center py-12">
              <p className="text-slate-600 text-lg">No projects found for the selected category.</p>
            </div>
          ) : (
            filteredProjects.map((project) => (
              <div
                key={project._id}
                className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2"
              >
                <img
                  src={project.imageUrl}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform"
                />
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className={`${getCategoryColor(project.category)} px-3 py-1 rounded-full text-sm font-medium capitalize`}>
                      {project.category}
                    </span>
                    <div className="flex space-x-2">
                      {project.projectUrl && (
                        <a
                          href={project.projectUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-slate-400 hover:text-primary transition-colors"
                        >
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      )}
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-slate-400 hover:text-primary transition-colors"
                        >
                          <Github className="w-4 h-4" />
                        </a>
                      )}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-secondary mb-3">{project.title}</h3>
                  <p className="text-slate-600 mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="bg-slate-50 text-slate-700 px-2 py-1 rounded text-xs"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
        
        <div className="text-center mt-12">
          <button className="bg-primary text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
            View All Projects
            <span className="ml-2">→</span>
          </button>
        </div>
      </div>
    </section>
  );
}
