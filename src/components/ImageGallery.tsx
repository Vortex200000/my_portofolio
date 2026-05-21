import React, { useState } from "react";
import { Project } from "./Portfolio";

interface ImageGalleryProps {
  project: Project;
  onClose: () => void;
}

const ImageGallery: React.FC<ImageGalleryProps> = ({ project, onClose }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prev) =>
      prev === project.images.length - 1 ? 0 : prev + 1,
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) =>
      prev === 0 ? project.images.length - 1 : prev - 1,
    );
  };

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 animate-fade-in"
      onClick={handleBackdropClick}
    >
      <div className="bg-white dark:bg-dark-800 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto animate-slide-up">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200 dark:border-dark-700">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
              {project.title}
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mt-1">
              {project.category} • {project.images.length} images
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 rounded-lg hover:bg-gray-100 dark:hover:bg-dark-700 transition-colors duration-200"
          >
            <i className="bi bi-x-lg text-xl"></i>
          </button>
        </div>

        {/* Image Gallery */}
        <div className="p-6">
          {/* Main Image */}
          <div className="relative mb-6">
            <img
              src={
                project.images[currentImageIndex] ||
                "https://placehold.co/800x600/e2e8f0/64748b?text=Project+Image"
              }
              alt={`${project.title} - Image ${currentImageIndex + 1}`}
              className="w-full h-96 object-contain rounded-xl"
              crossOrigin="anonymous"
            />

            {/* Navigation Arrows */}
            {project.images.length > 1 && (
              <>
                <button
                  onClick={prevImage}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 p-2 bg-black/50 text-white rounded-full hover:bg-black/70 transition-colors duration-200"
                >
                  <i className="bi bi-chevron-left"></i>
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 p-2 bg-black/50 text-white rounded-full hover:bg-black/70 transition-colors duration-200"
                >
                  <i className="bi bi-chevron-right"></i>
                </button>
              </>
            )}

            {/* Image Counter */}
            {project.images.length > 1 && (
              <div className="absolute bottom-4 right-4 px-3 py-1 bg-black/50 text-white text-sm rounded-lg">
                {currentImageIndex + 1} / {project.images.length}
              </div>
            )}
          </div>

          {/* Thumbnail Strip */}
          {project.images.length > 1 && (
            <div className="flex space-x-2 mb-6 overflow-x-auto pb-2">
              {project.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 transition-all duration-200 ${
                    index === currentImageIndex
                      ? "border-primary-600 ring-2 ring-primary-200"
                      : "border-gray-200 dark:border-dark-600 hover:border-primary-400"
                  }`}
                >
                  <img
                    src={
                      image ||
                      "https://placehold.co/80x80/e2e8f0/64748b?text=Img"
                    }
                    alt={`Thumbnail ${index + 1}`}
                    className="w-full h-full object-cover"
                    crossOrigin="anonymous"
                  />
                </button>
              ))}
            </div>
          )}

          {/* Project Details */}
          <div className="space-y-6">
            <div>
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                Description
              </h4>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                {project.description}
              </p>
            </div>

            <div>
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                Technologies Used
              </h4>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-primary-100 text-primary-800 dark:bg-primary-900 dark:text-primary-200"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-6 py-3 bg-gray-900 hover:bg-gray-800 text-white font-medium rounded-lg transition-colors duration-200"
                >
                  <i className="bi bi-github mr-2"></i>
                  View Source Code
                </a>
              )}
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white font-medium rounded-lg transition-colors duration-200"
                >
                  <i className="bi bi-box-arrow-up-right mr-2"></i>
                  View Live Project
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageGallery;
