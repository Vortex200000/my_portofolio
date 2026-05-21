import React from 'react'
import { Project } from './Portfolio'

interface ProjectCardProps {
  project: Project
  onClick: () => void
  animationDelay?: number
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, onClick, animationDelay = 0 }) => {
  return (
    <div
      className="bg-white dark:bg-dark-700 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer animate-slide-up border border-gray-200 dark:border-dark-600"
      style={{ animationDelay: `${animationDelay}s` }}
      onClick={onClick}
    >
      {/* Project Image */}
      <div className="relative overflow-hidden rounded-t-2xl">
        <img
          src={project.image || 'https://placehold.co/600x400/e2e8f0/64748b?text=Project+Image'}
          alt={project.title}
          className="w-full h-48 object-cover transition-transform duration-300 hover:scale-110"
          crossOrigin="anonymous"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300">
          <div className="absolute bottom-4 left-4 right-4">
            <div className="flex space-x-2">
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="inline-flex items-center px-3 py-1 bg-white/20 backdrop-blur-sm text-white text-sm rounded-lg hover:bg-white/30 transition-colors duration-200"
                >
                  <i className="bi bi-github mr-1"></i>
                  Code
                </a>
              )}
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="inline-flex items-center px-3 py-1 bg-white/20 backdrop-blur-sm text-white text-sm rounded-lg hover:bg-white/30 transition-colors duration-200"
                >
                  <i className="bi bi-box-arrow-up-right mr-1"></i>
                  Live
                </a>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Project Content */}
      <div className="p-6">
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white">
            {project.title}
          </h3>
          <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-primary-100 text-primary-800 dark:bg-primary-900 dark:text-primary-200">
            {project.category}
          </span>
        </div>

        <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
          {project.description}
        </p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.slice(0, 3).map((tech) => (
            <span
              key={tech}
              className="inline-flex items-center px-2 py-1 rounded-md text-xs font-medium bg-gray-100 text-gray-800 dark:bg-dark-600 dark:text-gray-300"
            >
              {tech}
            </span>
          ))}
          {project.technologies.length > 3 && (
            <span className="inline-flex items-center px-2 py-1 rounded-md text-xs font-medium bg-gray-100 text-gray-800 dark:bg-dark-600 dark:text-gray-300">
              +{project.technologies.length - 3} more
            </span>
          )}
        </div>

        {/* View Details Button */}
        <button className="w-full inline-flex items-center justify-center px-4 py-2 bg-primary-600 hover:bg-primary-700 text-white font-medium rounded-lg transition-colors duration-200">
          <i className="bi bi-eye mr-2"></i>
          View Details
        </button>
      </div>
    </div>
  )
}

export default ProjectCard
