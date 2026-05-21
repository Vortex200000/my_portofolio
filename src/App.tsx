import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Portfolio from "./components/Portfolio";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import AdminPanel from "./components/AdminPanel";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [showAdmin, setShowAdmin] = useState(false);

  const ADMIN_PASSWORD = "kingKing"; // CHANGE THIS!

  useEffect(() => {
    const isDark = localStorage.getItem("darkMode") === "true";
    setDarkMode(isDark);
    if (isDark) {
      document.documentElement.classList.add("dark");
    }
  }, []);

  const toggleDarkMode = () => {
    const newDarkMode = !darkMode;
    setDarkMode(newDarkMode);
    localStorage.setItem("darkMode", newDarkMode.toString());
    if (newDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  const handleAdminAccess = () => {
    const input = prompt("Enter admin password:");
    if (input === ADMIN_PASSWORD) {
      setShowAdmin(true);
    } else {
      alert("Access denied.");
    }
  };

  return (
    <div
      className={`min-h-screen transition-colors duration-300 ${
        darkMode ? "dark" : ""
      }`}
    >
      <div className="bg-white dark:bg-dark-900 text-gray-900 dark:text-white">
        <Navbar
          darkMode={darkMode}
          toggleDarkMode={toggleDarkMode}
          setShowAdmin={handleAdminAccess} // Secure this now!
        />

        {showAdmin ? (
          <AdminPanel onClose={() => setShowAdmin(false)} />
        ) : (
          <>
            <Hero />
            <Portfolio />
            <About />
            <Contact />
          </>
        )}

        <Footer />
      </div>
    </div>
  );
}

export default App;
