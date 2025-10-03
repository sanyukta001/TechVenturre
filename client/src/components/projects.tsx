import { useState } from "react";
import { ExternalLink, Github } from "lucide-react";

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState("all");

  const projects = [
    {
      _id: "1",
      title: "Quiz App",
      description: "Designed a role-based quiz system with Admin and User roles. Admin can create quizzes and users can participate and see their scores.",
      category: "web",
      imageUrl: "https://picsum.photos/seed/project1/400/300",
      technologies: ["React", "Node.js", "PostgreSQL"],
      projectUrl: "#",
      githubUrl: "#",
    },
    {
      _id: "2",
      title: "Fleet Management System",
      description: "Designed a Fleet Management System to manage vehicles, track odometer runs, and view transaction history. Deployed on GCP with PostgreSQL backend.",
      category: "web",
      imageUrl: "https://picsum.photos/seed/project2/400/300",
      technologies: ["React", "Node.js", "PostgreSQL", "GCP"],
      projectUrl: "#",
      githubUrl: "#",
    },
    {
      _id: "3",
      title: "Admin Panel",
      description: "Admin panel for managing and approving requisitions submitted via the mobile app. Built with React and Node.js, deployed on AWS EC2 with MongoDB.",
      category: "web",
      imageUrl: "https://picsum.photos/seed/project3/400/300",
      technologies: ["React", "Node.js", "MongoDB", "AWS EC2"],
      projectUrl: "#",
      githubUrl: "#",
    },
    {
      _id: "4",
      title: "Travel Application",
      description: "Built a mobile application for employees to request official vehicles. Reduced paperwork and streamlined the requisition process.",
      category: "mobile",
      imageUrl: "https://picsum.photos/seed/project4/400/300",
      technologies: ["Flutter", "Dart", "Node.js"],
      projectUrl: "#",
      githubUrl: "#",
    },
    {
      _id: "5",
      title: "Data Migration System",
      description: "Made a Data Migration System that migrates data from MongoDB to BigQuery for advanced analytics and dashboard creation. Simplified data queries for non-technical users and improved reporting efficiency.",
      category: "web",
      imageUrl: "https://picsum.photos/seed/project5/400/300",
      technologies: ["TypeScript", "Node.js", "GCP", "BigQuery"],
      projectUrl: "#",
      githubUrl: "#",
    },
    {
      _id: "6",
      title: "Decentralized Voting DApp",
      description: "A secure and transparent online voting system built on Ethereum using Solidity and React.js. Enables users to vote anonymously with blockchain-backed integrity, leveraging smart contracts, Web3.js, and a responsive UI.",
      category: "web",
      imageUrl: "https://picsum.photos/seed/project6/400/300",
      technologies: ["Solidity", "React.js", "Node.js", "Web3.js", "Ethereum", "Hardhat", "Chai"],
      projectUrl: "#",
      githubUrl: "#",
    },
    {
      _id: "7",
      title: "Web 3.0 Real Estate App",
      description: "A decentralized real estate platform built with Solidity, React.js, and Node.js. Enables NFT-based property ownership, secure smart contracts on Ethereum, and real-time blockchain interaction via Web3.js with a responsive UI.",
      category: "web",
      imageUrl: "https://picsum.photos/seed/project7/400/300",
      technologies: ["Solidity", "React.js", "Node.js", "Web3.js", "Hardhat", "Ethereum", "Chai"],
      projectUrl: "#",
      githubUrl: "#",
    },
    {
      _id: "8",
      title: "Real Estate Marketplace",
      description: "A modern real estate platform connecting buyers, sellers, and agents with advanced search filters, virtual tours, and integrated CRM.",
      category: "web",
      imageUrl: "https://picsum.photos/seed/project8/400/300",
      technologies: ["Next.js", "Prisma", "MySQL", "Cloudinary", "Mapbox"],
      projectUrl: "#",
      githubUrl: "#",
    },
    {
      _id: "9",
      title: "Social Media Dashboard",
      description: "An analytics dashboard for social media managers to track performance across multiple platforms with automated reporting and insights.",
      category: "web",
      imageUrl: "https://picsum.photos/seed/project9/400/300",
      technologies: ["React", "Chart.js", "Express.js", "Redis", "Social APIs"],
      projectUrl: "#",
      githubUrl: "#",
    },
    {
      _id: "10",
      title: "Mobile Banking App",
      description: "A secure mobile banking application with biometric authentication, real-time notifications, and comprehensive financial management tools.",
      category: "mobile",
      imageUrl: "https://picsum.photos/seed/project10/400/300",
      technologies: ["React Native", "TypeScript", "Firebase", "Biometric API"],
      projectUrl: "#",
      githubUrl: "#",
    },
    {
      _id: "11",
      title: "E-commerce Platform",
      description: "A modern e-commerce platform built with React and Node.js featuring real-time inventory management, payment processing, and analytics dashboard.",
      category: "ecommerce",
      imageUrl: "https://picsum.photos/seed/project11/400/300",
      technologies: ["React", "Node.js", "MongoDB", "Stripe", "Tailwind CSS"],
      projectUrl: "#",
      githubUrl: "#",
    }
  ];

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

  return (
    <section id="projects" className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-secondary mb-6">Featured Projects</h2>
          <p className="text-xl text-slate-600">
            Showcasing our latest work and successful collaborations
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

