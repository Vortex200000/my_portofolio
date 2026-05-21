import React, { useState, useEffect } from "react";
import ProjectCard from "./ProjectCard";
import ImageGallery from "./ImageGallery";

export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  category: string;
  images: string[];
}

const Portfolio: React.FC = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    // Load projects from localStorage or use default projects
    const savedProjects = localStorage.getItem("portfolio-projects");
    if (savedProjects) {
      setProjects(JSON.parse(savedProjects));
    } else {
      setProjects(defaultProjects);
      localStorage.setItem(
        "portfolio-projects",
        JSON.stringify(defaultProjects),
      );
    }
  }, []);

  const defaultProjects: Project[] = [
    {
      id: "1",
      title: "Vapp",
      description:
        "Vapp is an audio / video calling application with responsive ui and its created with web_rtc for audio / video calls implemntation and fcm for push notifications , firebase for signaling the achevement of creating this application is to get high quality voip ",
      image:
        "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
      technologies: ["Flutter", "Dart", "Firebase", "Stripe API"],
      githubUrl: "https://github.com/omaressam/ecommerce-app",
      liveUrl:
        "https://play.google.com/store/apps/details?id=com.example.ecommerce",
      category: "mobile",
      images: [
        "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
        "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=600&h=400&fit=crop",
        "https://images.unsplash.com/photo-1556742111-a301076d9d18?w=600&h=400&fit=crop",
      ],
    },
    {
      id: "2",
      title: "Task Management App",
      description:
        "A productivity app for managing tasks and projects with real-time collaboration features, built using Flutter and Firebase.",
      image:
        "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop",
      technologies: ["Flutter", "Firebase", "Provider", "Cloud Firestore"],
      githubUrl: "https://github.com/omaressam/task-manager",
      category: "mobile",
      images: [
        "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop",
        "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=600&h=400&fit=crop",
      ],
    },
    {
      id: "3",
      title: "Weather Forecast App",
      description:
        "A beautiful weather application with location-based forecasts, interactive maps, and customizable widgets.",
      image:
        "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=600&h=400&fit=crop",
      technologies: ["Flutter", "OpenWeather API", "Geolocator", "Charts"],
      githubUrl: "https://github.com/omaressam/weather-app",
      liveUrl:
        "https://play.google.com/store/apps/details?id=com.example.weather",
      category: "mobile",
      images: [
        "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=600&h=400&fit=crop",
        "https://images.unsplash.com/photo-1592210454359-9043f067919b?w=600&h=400&fit=crop",
      ],
    },
    {
      id: "4",
      title: "Flutter UI Kit",
      description:
        "A comprehensive UI component library for Flutter developers with 50+ customizable widgets and screens.",
      image:
        "https://images.unsplash.com/photo-1558655146-d09347e92766?w=600&h=400&fit=crop",
      technologies: ["Flutter", "Dart", "Material Design", "Cupertino"],
      githubUrl: "https://github.com/omaressam/flutter-ui-kit",
      category: "ui",
      images: [
        "https://images.unsplash.com/photo-1558655146-d09347e92766?w=600&h=400&fit=crop",
        "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=600&h=400&fit=crop",
      ],
    },
  ];

  const categories = [
    { id: "all", name: "All Projects", icon: "bi-grid" },
    { id: "mobile", name: "Mobile Apps", icon: "bi-phone" },
    { id: "ui", name: "UI/UX", icon: "bi-palette" },
    { id: "web", name: "Web Apps", icon: "bi-globe" },
  ];

  const filteredProjects =
    filter === "all"
      ? projects
      : projects.filter((project) => project.category === filter);

  return (
    <section id="portfolio" className="py-20 bg-gray-50 dark:bg-dark-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            My Portfolio
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Explore my latest projects and mobile applications. Each project
            represents my passion for creating exceptional user experiences.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12 animate-slide-up">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setFilter(category.id)}
              className={`inline-flex items-center px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                filter === category.id
                  ? "bg-primary-600 text-white shadow-lg transform scale-105"
                  : "bg-white dark:bg-dark-700 text-gray-700 dark:text-gray-300 hover:bg-primary-50 dark:hover:bg-dark-600 border border-gray-200 dark:border-dark-600"
              }`}
            >
              <i className={`${category.icon} mr-2`}></i>
              {category.name}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              onClick={() => setSelectedProject(project)}
              animationDelay={index * 0.1}
            />
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-12">
            <i className="bi bi-folder-x text-6xl text-gray-400 dark:text-gray-600 mb-4"></i>
            <p className="text-xl text-gray-500 dark:text-gray-400">
              No projects found in this category.
            </p>
          </div>
        )}

        {/* Image Gallery Modal */}
        {selectedProject && (
          <ImageGallery
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </div>
    </section>
  );
};

export default Portfolio;
