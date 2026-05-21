import React, { useState } from 'react'

interface NavbarProps {
  darkMode: boolean
  toggleDarkMode: () => void
  setShowAdmin: (show: boolean) => void
}

const Navbar: React.FC<NavbarProps> = ({ darkMode, toggleDarkMode, setShowAdmin }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsMenuOpen(false)
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 dark:bg-dark-900/90 backdrop-blur-md border-b border-gray-200 dark:border-dark-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <h1 className="text-xl font-bold text-primary-600 dark:text-primary-400">
                Omar Essam
              </h1>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <button
                onClick={() => scrollToSection('home')}
                className="text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 px-3 py-2 text-sm font-medium transition-colors duration-200"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection('portfolio')}
                className="text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 px-3 py-2 text-sm font-medium transition-colors duration-200"
              >
                Portfolio
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className="text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 px-3 py-2 text-sm font-medium transition-colors duration-200"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 px-3 py-2 text-sm font-medium transition-colors duration-200"
              >
                Contact
              </button>
              <button
                onClick={() => setShowAdmin(true)}
                className="text-gray-500 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 px-3 py-2 text-sm font-medium transition-colors duration-200"
              >
                <i className="bi bi-gear"></i>
              </button>
              <button
                onClick={toggleDarkMode}
                className="text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 p-2 rounded-lg transition-colors duration-200"
              >
                {darkMode ? <i className="bi bi-sun"></i> : <i className="bi bi-moon"></i>}
              </button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-2">
            <button
              onClick={toggleDarkMode}
              className="text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 p-2 rounded-lg transition-colors duration-200"
            >
              {darkMode ? <i className="bi bi-sun"></i> : <i className="bi bi-moon"></i>}
            </button>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 p-2 rounded-lg transition-colors duration-200"
            >
              <i className={`bi ${isMenuOpen ? 'bi-x' : 'bi-list'}`}></i>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white dark:bg-dark-900 border-t border-gray-200 dark:border-dark-700">
              <button
                onClick={() => scrollToSection('home')}
                className="block w-full text-left text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 px-3 py-2 text-base font-medium transition-colors duration-200"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection('portfolio')}
                className="block w-full text-left text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 px-3 py-2 text-base font-medium transition-colors duration-200"
              >
                Portfolio
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className="block w-full text-left text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 px-3 py-2 text-base font-medium transition-colors duration-200"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="block w-full text-left text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 px-3 py-2 text-base font-medium transition-colors duration-200"
              >
                Contact
              </button>
              <button
                onClick={() => setShowAdmin(true)}
                className="block w-full text-left text-gray-500 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 px-3 py-2 text-base font-medium transition-colors duration-200"
              >
                <i className="bi bi-gear mr-2"></i>Admin
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar
