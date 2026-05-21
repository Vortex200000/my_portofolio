import React from "react";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" },
  ];

  const socialLinks = [
    {
      name: "GitHub",
      icon: "bi-github",
      href: "https://github.com/Vortex200000",
    },
    {
      name: "LinkedIn",
      icon: "bi-linkedin",
      href: "https://www.linkedin.com/in/omar-essam-b93734269/",
    },
    {
      name: "Twitter",
      icon: "bi-twitter",
      href: "https://x.com/noonecouldhack",
    },
    {
      name: "Dribbble",
      icon: "bi-dribbble",
      href: "https://dribbble.com/omaressam746",
    },
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId.replace("#", ""));
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-white dark:bg-dark-900 border-t border-gray-200 dark:border-dark-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="md:col-span-2">
            <div className="flex items-center mb-4">
              <h3 className="text-2xl font-bold text-primary-600 dark:text-primary-400">
                Omar Essam
              </h3>
            </div>
            <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-md">
              Flutter developer passionate about creating beautiful, performant
              mobile applications. Let's build something amazing together.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-100 dark:bg-dark-700 rounded-lg flex items-center justify-center text-gray-600 dark:text-gray-400 hover:bg-primary-100 dark:hover:bg-primary-900 hover:text-primary-600 dark:hover:text-primary-400 transition-all duration-200 transform hover:scale-110"
                  aria-label={social.name}
                >
                  <i className={`${social.icon} text-lg`}></i>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
              Contact Info
            </h4>
            <div className="space-y-3">
              <div className="flex items-center text-gray-600 dark:text-gray-300">
                <i className="bi bi-envelope mr-3 text-primary-600 dark:text-primary-400"></i>
                <span className="text-sm">omaressam746@gmail.com</span>
              </div>
              <div className="flex items-center text-gray-600 dark:text-gray-300">
                <i className="bi bi-geo-alt mr-3 text-primary-600 dark:text-primary-400"></i>
                <span className="text-sm">Cairo, Egypt</span>
              </div>
              <div className="flex items-center text-gray-600 dark:text-gray-300">
                <i className="bi bi-phone mr-3 text-primary-600 dark:text-primary-400"></i>
                <span className="text-sm">+20 1008137224</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-gray-200 dark:border-dark-700">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 md:mb-0">
              © {currentYear} Omar Essam. All rights reserved.
            </p>
            <div className="flex items-center space-x-4">
              <span className="text-gray-500 dark:text-gray-400 text-sm">
                Powered by
              </span>
              <a
                href="https://websparks.ai"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 font-medium text-sm transition-colors duration-200"
              >
                Websparks AI
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
