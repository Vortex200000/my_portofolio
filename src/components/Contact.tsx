import React from "react";
import ContactForm from "./ContactForm";

const Contact: React.FC = () => {
  const contactInfo = [
    {
      icon: "bi-envelope",
      title: "Email",
      value: "omaressam746@gmail.com",
      link: "mailto:omaressam746@gmail.com",
    },
    {
      icon: "bi-phone",
      title: "Phone",
      value: "+20 1008137224",
      link: "tel:+201008137224",
    },
    {
      icon: "bi-geo-alt",
      title: "Location",
      value: "Cairo, Egypt",
      link: "https://maps.google.com/?q=Cairo,Egypt",
    },
    {
      icon: "bi-linkedin",
      title: "LinkedIn",
      value: "linkedin.com/in/omar-essam-b93734269/",
      link: "www.linkedin.com/in/omar-essam-b93734269",
    },
  ];

  return (
    <section id="contact" className="py-20 bg-gray-50 dark:bg-dark-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Get In Touch
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Have a project in mind or want to collaborate? I'd love to hear from
            you. Let's create something amazing together!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <div className="animate-slide-in-left">
            <div className="bg-white dark:bg-dark-700 rounded-2xl p-8 shadow-lg border border-gray-200 dark:border-dark-600">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">
                Let's Connect
              </h3>

              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <a
                    key={info.title}
                    href={info.link}
                    target={info.link.startsWith("http") ? "_blank" : undefined}
                    rel={
                      info.link.startsWith("http")
                        ? "noopener noreferrer"
                        : undefined
                    }
                    className="flex items-center p-4 rounded-xl hover:bg-gray-50 dark:hover:bg-dark-600 transition-colors duration-200 group animate-slide-up"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="flex-shrink-0 w-12 h-12 bg-primary-100 dark:bg-primary-900 rounded-lg flex items-center justify-center group-hover:bg-primary-200 dark:group-hover:bg-primary-800 transition-colors duration-200">
                      <i
                        className={`${info.icon} text-primary-600 dark:text-primary-400 text-xl`}
                      ></i>
                    </div>
                    <div className="ml-4">
                      <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wide">
                        {info.title}
                      </h4>
                      <p className="text-lg font-semibold text-gray-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors duration-200">
                        {info.value}
                      </p>
                    </div>
                    <i className="bi bi-arrow-up-right ml-auto text-gray-400 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors duration-200"></i>
                  </a>
                ))}
              </div>

              {/* Social Links */}
              <div className="mt-8 pt-8 border-t border-gray-200 dark:border-dark-600">
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                  Follow Me
                </h4>
                <div className="flex space-x-4">
                  <a
                    href="https://github.com/Vortex200000"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-gray-100 dark:bg-dark-600 rounded-lg flex items-center justify-center text-gray-600 dark:text-gray-400 hover:bg-primary-100 dark:hover:bg-primary-900 hover:text-primary-600 dark:hover:text-primary-400 transition-all duration-200 transform hover:scale-110"
                  >
                    <i className="bi bi-github text-xl"></i>
                  </a>
                  <a
                    href="https://www.linkedin.com/in/omar-essam-b93734269/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-gray-100 dark:bg-dark-600 rounded-lg flex items-center justify-center text-gray-600 dark:text-gray-400 hover:bg-primary-100 dark:hover:bg-primary-900 hover:text-primary-600 dark:hover:text-primary-400 transition-all duration-200 transform hover:scale-110"
                  >
                    <i className="bi bi-linkedin text-xl"></i>
                  </a>
                  <a
                    href="https://x.com/noonecouldhack"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-gray-100 dark:bg-dark-600 rounded-lg flex items-center justify-center text-gray-600 dark:text-gray-400 hover:bg-primary-100 dark:hover:bg-primary-900 hover:text-primary-600 dark:hover:text-primary-400 transition-all duration-200 transform hover:scale-110"
                  >
                    <i className="bi bi-twitter text-xl"></i>
                  </a>
                  <a
                    href="https://dribbble.com/omaressam746"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-gray-100 dark:bg-dark-600 rounded-lg flex items-center justify-center text-gray-600 dark:text-gray-400 hover:bg-primary-100 dark:hover:bg-primary-900 hover:text-primary-600 dark:hover:text-primary-400 transition-all duration-200 transform hover:scale-110"
                  >
                    <i className="bi bi-dribbble text-xl"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="animate-slide-in-right">
            <div className="bg-white dark:bg-dark-700 rounded-2xl p-8 shadow-lg border border-gray-200 dark:border-dark-600">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">
                Send Me a Message
              </h3>
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
