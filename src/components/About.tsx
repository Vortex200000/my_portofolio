import React from "react";

const About: React.FC = () => {
  const experiences = [
    {
      title: "Mid Level Flutter Developer",
      company: "ZemTech Inc.",
      period: "2022 - Present",
      description:
        "Developed and implemented userfriendly mobile applications using the Flutter framework Collaborated with senior developers and designers to create and integrate UI/UX designs into the applications Integrated thirdparty libraries, APIs, and services to enhance app capabilities Stayed updated with the latest Flutter and Dart technologies, tools, and best practices",
      icon: "bi-building",
    },
    {
      title: "Mobile App Developer",
      company: "Curved Inc. l 6th of October ",
      period: "2021 - 2023",
      description:
        "Developed and implemented userfriendly mobile applications using the Flutter framework Collaborated with senior developers and designers to create and integrate UI/UX designs into the applications Integrated thirdparty libraries, APIs, and services to enhance app capabilities Stayed updated with the latest Flutter and Dart technologies, tools, and best practices",
      icon: "bi-phone",
    },
    // {
    //   title: "Junior Developer",
    //   company: "DevAgency",
    //   period: "2020 - 2021",
    //   description:
    //     "Started my journey in mobile development, learning Flutter and contributing to various client projects.",
    //   icon: "bi-code-slash",
    // },
  ];

  const achievements = [
    { number: "15+", label: "Projects Completed", icon: "bi-check-circle" },
    { number: "5+", label: "Years Experience", icon: "bi-calendar" },
    // { number: "50K+", label: "App Downloads", icon: "bi-download" },
    { number: "98%", label: "Client Satisfaction", icon: "bi-star" },
  ];

  return (
    <section id="about" className="py-20 bg-white dark:bg-dark-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            About Me
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Passionate Flutter developer with a love for creating beautiful,
            performant mobile applications that users love.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left Column - Personal Info */}
          <div className="animate-slide-in-left">
            <div className="bg-gray-50 dark:bg-dark-800 rounded-2xl p-8 mb-8">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                My Journey
              </h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                I started my journey in mobile development 5 years ago and fell
                in love with Flutter's ability to create beautiful,
                native-quality apps for both iOS and Android from a single
                codebase. My passion lies in crafting user experiences that are
                not only functional but delightful.
              </p>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                When I'm not coding, you can find me exploring new technologies,
                contributing to open-source projects, or sharing my knowledge
                with the developer community through blog posts and tutorials.
              </p>

              {/* Personal Details */}
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="flex items-center">
                  <i className="bi bi-geo-alt text-primary-600 dark:text-primary-400 mr-3"></i>
                  <span className="text-gray-700 dark:text-gray-300">
                    Cairo, Egypt
                  </span>
                </div>
                <div className="flex items-center">
                  <i className="bi bi-envelope text-primary-600 dark:text-primary-400 mr-3"></i>
                  <span className="text-gray-700 dark:text-gray-300">
                    omaressam746@gmail.com
                  </span>
                </div>
                <div className="flex items-center">
                  <i className="bi bi-translate text-primary-600 dark:text-primary-400 mr-3"></i>
                  <span className="text-gray-700 dark:text-gray-300">
                    Arabic, English
                  </span>
                </div>
                <div className="flex items-center">
                  <i className="bi bi-mortarboard text-primary-600 dark:text-primary-400 mr-3"></i>
                  <span className="text-gray-700 dark:text-gray-300">
                    Computer Science
                  </span>
                </div>
              </div>
            </div>

            {/* Achievements */}
            <div className="grid grid-cols-2 gap-4">
              {achievements.map((achievement, index) => (
                <div
                  key={achievement.label}
                  className="bg-gradient-to-br from-primary-50 to-secondary-50 dark:from-primary-900/20 dark:to-secondary-900/20 rounded-xl p-6 text-center animate-slide-up border border-primary-100 dark:border-primary-800"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <i
                    className={`${achievement.icon} text-3xl text-primary-600 dark:text-primary-400 mb-3`}
                  ></i>
                  <div className="text-2xl font-bold text-gray-900 dark:text-white mb-1">
                    {achievement.number}
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-300">
                    {achievement.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Experience */}
          <div className="animate-slide-in-right">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">
              Professional Experience
            </h3>

            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <div
                  key={index}
                  className="relative pl-8 animate-slide-up"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  {/* Timeline Line */}
                  {index !== experiences.length - 1 && (
                    <div className="absolute left-4 top-12 w-0.5 h-16 bg-gradient-to-b from-primary-600 to-secondary-600"></div>
                  )}

                  {/* Timeline Dot */}
                  <div className="absolute left-0 top-0 w-8 h-8 bg-primary-600 rounded-full flex items-center justify-center">
                    <i className={`${exp.icon} text-white text-sm`}></i>
                  </div>

                  {/* Content */}
                  <div className="bg-white dark:bg-dark-800 rounded-xl p-6 shadow-sm border border-gray-200 dark:border-dark-700 hover:shadow-md transition-shadow duration-300">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3">
                      <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                        {exp.title}
                      </h4>
                      <span className="text-sm text-primary-600 dark:text-primary-400 font-medium">
                        {exp.period}
                      </span>
                    </div>
                    <p className="text-primary-700 dark:text-primary-300 font-medium mb-3">
                      {exp.company}
                    </p>
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                      {exp.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Download CV Button */}
            <div className="mt-12">
              <a
                href="https://drive.google.com/file/d/1ar9YWrER8bk5juhXkAvEvggAihIeLUwN/view?usp=sharing"
                download
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-primary-600 to-secondary-600 hover:from-primary-700 hover:to-secondary-700 text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                <i className="bi bi-download mr-3"></i>
                Download CV
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
