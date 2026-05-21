import React from 'react'

const SkillsList: React.FC = () => {
  const skills = [
    { name: 'Flutter', level: 90, icon: 'bi-phone' },
    { name: 'Dart', level: 85, icon: 'bi-code-slash' },
    { name: 'Firebase', level: 80, icon: 'bi-cloud' },
    { name: 'REST APIs', level: 85, icon: 'bi-globe' },
    { name: 'Git', level: 90, icon: 'bi-git' },
    { name: 'UI/UX Design', level: 75, icon: 'bi-palette' },
  ]

  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
        Core Skills
      </h3>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {skills.map((skill, index) => (
          <div
            key={skill.name}
            className="bg-white dark:bg-dark-800 p-4 rounded-xl shadow-sm border border-gray-200 dark:border-dark-700 animate-slide-up"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center">
                <i className={`${skill.icon} text-primary-600 dark:text-primary-400 mr-2`}></i>
                <span className="text-sm font-medium text-gray-900 dark:text-white">
                  {skill.name}
                </span>
              </div>
              <span className="text-xs text-gray-500 dark:text-gray-400">
                {skill.level}%
              </span>
            </div>
            
            <div className="w-full bg-gray-200 dark:bg-dark-700 rounded-full h-2">
              <div
                className="bg-gradient-to-r from-primary-600 to-secondary-600 h-2 rounded-full transition-all duration-1000 ease-out"
                style={{ width: `${skill.level}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default SkillsList
