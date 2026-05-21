import React, { useState, useEffect } from "react";
import { Project } from "./Portfolio";

interface AdminPanelProps {
  onClose: () => void;
}

const AdminPanel: React.FC<AdminPanelProps> = ({ onClose }) => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [editingProject, setEditingProject] = useState<Project | null>(null);
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    const savedProjects = localStorage.getItem("portfolio-projects");
    if (savedProjects) {
      setProjects(JSON.parse(savedProjects));
    }
  }, []);

  const saveProjects = (updatedProjects: Project[]) => {
    setProjects(updatedProjects);
    localStorage.setItem("portfolio-projects", JSON.stringify(updatedProjects));
  };

  const handleAddProject = () => {
    const newProject: Project = {
      id: Date.now().toString(),
      title: "",
      description: "",
      image: "",
      technologies: [],
      category: "mobile",
      images: [],
      githubUrl: "",
      liveUrl: "",
    };
    setEditingProject(newProject);
    setShowForm(true);
  };

  const handleEditProject = (project: Project) => {
    setEditingProject(project);
    setShowForm(true);
  };

  const handleDeleteProject = (projectId: string) => {
    const updatedProjects = projects.filter((p) => p.id !== projectId);
    saveProjects(updatedProjects);
  };

  const handleSaveProject = (project: Project) => {
    let updatedProjects;
    if (projects.find((p) => p.id === project.id)) {
      updatedProjects = projects.map((p) =>
        p.id === project.id ? project : p
      );
    } else {
      updatedProjects = [...projects, project];
    }
    saveProjects(updatedProjects);
    setShowForm(false);
    setEditingProject(null);
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-white dark:bg-dark-800 rounded-2xl max-w-6xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200 dark:border-dark-700">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
            Portfolio Admin Panel
          </h2>
          <button
            onClick={onClose}
            className="p-2 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 rounded-lg hover:bg-gray-100 dark:hover:bg-dark-700 transition-colors duration-200"
          >
            <i className="bi bi-x-lg text-xl"></i>
          </button>
        </div>

        {!showForm ? (
          <div className="p-6">
            {/* Add Project Button */}
            <div className="mb-6">
              <button
                onClick={handleAddProject}
                className="inline-flex items-center px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white font-medium rounded-lg transition-colors duration-200"
              >
                <i className="bi bi-plus-lg mr-2"></i>
                Add New Project
              </button>
            </div>

            {/* Projects List */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects.map((project) => (
                <div
                  key={project.id}
                  className="bg-gray-50 dark:bg-dark-700 rounded-xl p-4 border border-gray-200 dark:border-dark-600"
                >
                  <img
                    src={
                      project.image ||
                      "https://placehold.co/300x200/e2e8f0/64748b?text=No+Image"
                    }
                    alt={project.title}
                    className="w-full h-32 object-cover rounded-lg mb-3"
                    crossOrigin="anonymous"
                  />
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                    {project.title || "Untitled Project"}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300 mb-3 line-clamp-2">
                    {project.description || "No description"}
                  </p>
                  <div className="flex space-x-2">
                    <button
                      onClick={() => handleEditProject(project)}
                      className="flex-1 px-3 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm rounded-lg transition-colors duration-200"
                    >
                      <i className="bi bi-pencil mr-1"></i>
                      Edit
                    </button>
                    <button
                      onClick={() => handleDeleteProject(project.id)}
                      className="flex-1 px-3 py-2 bg-red-600 hover:bg-red-700 text-white text-sm rounded-lg transition-colors duration-200"
                    >
                      <i className="bi bi-trash mr-1"></i>
                      Delete
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {projects.length === 0 && (
              <div className="text-center py-12">
                <i className="bi bi-folder-x text-6xl text-gray-400 dark:text-gray-600 mb-4"></i>
                <p className="text-xl text-gray-500 dark:text-gray-400 mb-4">
                  No projects yet
                </p>
                <button
                  onClick={handleAddProject}
                  className="inline-flex items-center px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white font-medium rounded-lg transition-colors duration-200"
                >
                  <i className="bi bi-plus-lg mr-2"></i>
                  Add Your First Project
                </button>
              </div>
            )}
          </div>
        ) : (
          <ProjectForm
            project={editingProject}
            onSave={handleSaveProject}
            onCancel={() => {
              setShowForm(false);
              setEditingProject(null);
            }}
          />
        )}
      </div>
    </div>
  );
};

interface ProjectFormProps {
  project: Project | null;
  onSave: (project: Project) => void;
  onCancel: () => void;
}

const ProjectForm: React.FC<ProjectFormProps> = ({
  project,
  onSave,
  onCancel,
}) => {
  const [formData, setFormData] = useState<Project>(
    project || {
      id: Date.now().toString(),
      title: "",
      description: "",
      image: "",
      technologies: [],
      category: "mobile",
      images: [],
      githubUrl: "",
      liveUrl: "",
    }
  );

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleTechnologiesChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const technologies = e.target.value
      .split(",")
      .map((tech) => tech.trim())
      .filter((tech) => tech);
    setFormData((prev) => ({
      ...prev,
      technologies,
    }));
  };

  const handleImagesChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const images = e.target.value
      .split("\n")
      .map((img) => img.trim())
      .filter((img) => img);
    setFormData((prev) => ({
      ...prev,
      images,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave(formData);
  };

  return (
    <div className="p-6">
      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">
        {project?.title ? "Edit Project" : "Add New Project"}
      </h3>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Project Title *
            </label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-gray-300 dark:border-dark-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-dark-700 text-gray-900 dark:text-white"
              placeholder="Enter project title"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Category *
            </label>
            <select
              name="category"
              value={formData.category}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-gray-300 dark:border-dark-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-dark-700 text-gray-900 dark:text-white"
            >
              <option value="mobile">Mobile App</option>
              <option value="web">Web App</option>
              <option value="ui">UI/UX</option>
              <option value="other">Other</option>
            </select>
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Description *
          </label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            required
            rows={4}
            className="w-full px-4 py-3 border border-gray-300 dark:border-dark-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-dark-700 text-gray-900 dark:text-white resize-none"
            placeholder="Describe your project..."
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Main Image URL
          </label>
          <input
            type="url"
            name="image"
            value={formData.image}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 dark:border-dark-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-dark-700 text-gray-900 dark:text-white"
            placeholder="https://example.com/image.jpg"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Technologies (comma-separated)
          </label>
          <input
            type="text"
            value={formData.technologies.join(", ")}
            onChange={handleTechnologiesChange}
            className="w-full px-4 py-3 border border-gray-300 dark:border-dark-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-dark-700 text-gray-900 dark:text-white"
            placeholder="Flutter, Dart, Firebase, etc."
          />
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              GitHub URL
            </label>
            <input
              type="url"
              name="githubUrl"
              value={formData.githubUrl}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 dark:border-dark-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-dark-700 text-gray-900 dark:text-white"
              placeholder="https://github.com/username/repo"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Live URL
            </label>
            <input
              type="url"
              name="liveUrl"
              value={formData.liveUrl}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 dark:border-dark-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-dark-700 text-gray-900 dark:text-white"
              placeholder="https://example.com or app store link"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Additional Images (one URL per line)
          </label>
          <textarea
            value={formData.images.join("\n")}
            onChange={handleImagesChange}
            rows={7}
            className="w-full px-4 py-3 border border-gray-300 dark:border-dark-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-dark-700 text-gray-900 dark:text-white resize-none"
            placeholder="https://example.com/image1.jpg&#10;https://example.com/image2.jpg"
          />
        </div>

        <div className="flex space-x-4 pt-4">
          <button
            type="submit"
            className="flex-1 px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white font-medium rounded-lg transition-colors duration-200"
          >
            <i className="bi bi-check-lg mr-2"></i>
            Save Project
          </button>
          <button
            type="button"
            onClick={onCancel}
            className="flex-1 px-6 py-3 bg-gray-600 hover:bg-gray-700 text-white font-medium rounded-lg transition-colors duration-200"
          >
            <i className="bi bi-x-lg mr-2"></i>
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default AdminPanel;
