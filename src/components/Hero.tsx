import React from "react";
import SkillsList from "./SkillsList";

const Hero: React.FC = () => {
  const scrollToPortfolio = () => {
    const element = document.getElementById("portfolio");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="pt-16 min-h-screen flex items-center bg-gradient-to-br from-primary-50 to-secondary-50 dark:from-dark-900 dark:to-dark-800"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="animate-slide-in-left">
            <div className="mb-6">
              <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-primary-100 text-primary-800 dark:bg-primary-900 dark:text-primary-200">
                <i className="bi bi-code-slash mr-2"></i>
                Flutter Developer
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              Hi, I'm{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-secondary-600">
                Omar Essam
              </span>
            </h1>

            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
              Mid-level Flutter developer passionate about creating beautiful,
              performant mobile applications. I specialize in cross-platform
              development and modern UI/UX design.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <button
                onClick={scrollToPortfolio}
                className="inline-flex items-center px-8 py-4 bg-primary-600 hover:bg-primary-700 text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                <i className="bi bi-eye mr-2"></i>
                View My Work
              </button>
              <a
                href="#contact"
                className="inline-flex items-center px-8 py-4 border-2 border-primary-600 text-primary-600 dark:text-primary-400 hover:bg-primary-600 hover:text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-105"
              >
                <i className="bi bi-chat-dots mr-2"></i>
                Get In Touch
              </a>
            </div>

            {/* Social Links */}
            <div className="flex space-x-6">
              <a
                href="https://github.com/Vortex200000"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200"
              >
                <i className="bi bi-github text-2xl"></i>
              </a>
              <a
                href="https://www.linkedin.com/in/omar-essam-b93734269/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200"
              >
                <i className="bi bi-linkedin text-2xl"></i>
              </a>
              <a
                href="https://x.com/noonecouldhack"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200"
              >
                <i className="bi bi-twitter text-2xl"></i>
              </a>
            </div>
          </div>

          {/* Right Content */}
          <div className="animate-slide-in-right">
            <div className="relative">
              {/* Profile Image */}
              <div className=" relative z-10 mx-auto w-80 h-80 rounded-2xl overflow-hidden shadow-2xl bg-black flex items-center justify-center ">
                <img
                  src="https://res.cloudinary.com/dpoqqpqjv/image/upload/v1754334401/WhatsApp_Image_2025-06-25_at_00.13.41_b44ab56f_kunzmv.jpg"
                  alt="Omar Essam - Flutter Developer"
                  className="w-full h-full object-cover object-[50%_0%]"
                  crossOrigin="anonymous"
                />
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-primary-100 dark:bg-primary-900 rounded-2xl flex items-center justify-center animate-bounce-slow">
                <i className="bi bi-phone text-2xl text-primary-600 dark:text-primary-400"></i>
              </div>

              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-secondary-100 dark:bg-secondary-900 rounded-xl flex items-center justify-center animate-pulse-slow">
                <i className="bi bi-code-square text-xl text-secondary-600 dark:text-secondary-400"></i>
              </div>
            </div>

            {/* Skills Preview */}
            <div className="mt-12">
              <SkillsList />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
