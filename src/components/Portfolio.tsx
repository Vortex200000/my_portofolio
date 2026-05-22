import React, { useState, useEffect } from "react";
import ProjectCard from "./ProjectCard";
import ImageGallery from "./ImageGallery";

export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  category: string;
  images: string[];
}

const Portfolio: React.FC = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    // Load projects from localStorage or use default projects
    const savedProjects = localStorage.getItem("portfolio-projects");
    if (savedProjects) {
      setProjects(JSON.parse(savedProjects));
    } else {
      setProjects(defaultProjects);
      localStorage.setItem(
        "portfolio-projects",
        JSON.stringify(defaultProjects),
      );
    }
  }, []);

  const defaultProjects: Project[] = [
    {
      id: "1",
      title: "Vapp",
      description:
        "Vapp is an audio / video calling application with responsive ui and its created with web_rtc for audio / video calls implemntation and fcm for push notifications , firebase for signaling the achevement of creating this application is to get high quality voip ",
      image:
        "https://res.cloudinary.com/dpoqqpqjv/image/upload/v1774432295/vmCCowvErtsV_1024_500_lyhlph.png",
      technologies: [
        "Flutter",
        "Dart",
        "Firebase",
        "Cloud firestore",
        "WebRtc",
        "Getx",
      ],
      githubUrl: "https://github.com/Vortex200000/Vapp",
      liveUrl:
        "https://www.mediafire.com/file/k2g9awpc4w8dpkl/app-release.apk/file",
      category: "mobile",
      images: [
        "https://res.cloudinary.com/dpoqqpqjv/image/upload/v1774432654/Hotpot_0_uya5vm.png",
        "https://res.cloudinary.com/dpoqqpqjv/image/upload/v1774432658/Hotpot_1_xyxhad.png",
        "https://res.cloudinary.com/dpoqqpqjv/image/upload/v1774432659/Hotpot_2_ty6x5l.png",
        "https://res.cloudinary.com/dpoqqpqjv/image/upload/v1774432658/Hotpot_3_hggn8r.png",
        "https://res.cloudinary.com/dpoqqpqjv/image/upload/v1774432653/Hotpot_4_l0ydsv.png",
      ],
    },
    {
      id: "2",
      title: "My Quran",
      description: "full quran application",
      image:
        "https://res.cloudinary.com/dpoqqpqjv/image/upload/v1774431452/cover_qfqkbc.png",
      technologies: [
        "Flutter",
        "Firebase",
        "Version Control",
        "Responsive Design",
        "Clean Architecture",
      ],
      githubUrl: "",
      liveUrl: "https://appgallery.huawei.com/app/C115635939",
      category: "mobile",
      images: [
        "https://res.cloudinary.com/dpoqqpqjv/image/upload/v1774431452/cover_qfqkbc.png",
        "https://res.cloudinary.com/dpoqqpqjv/image/upload/v1774431472/Hotpot_0_jjwlrn.png",
        "https://res.cloudinary.com/dpoqqpqjv/image/upload/v1774431481/Hotpot_1_hzsiqo.png",
        "https://res.cloudinary.com/dpoqqpqjv/image/upload/v1774431492/Hotpot_2_pw56dp.png",
        "https://res.cloudinary.com/dpoqqpqjv/image/upload/v1774431497/Hotpot_3_rdhgho.png",
        "https://res.cloudinary.com/dpoqqpqjv/image/upload/v1774431489/Hotpot_4_d4lbch.png",
      ],
    },
    {
      id: "3",
      title: "Task Master",
      description:
        "Smart task manager with reminders, calendar view & cloud backup.",
      image:
        "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=600&h=400&fit=crop",
      technologies: ["Flutter", "Dart", "Firebase", "bloc", "Hive"],
      githubUrl: "https://github.com/omaressam/weather-app",
      liveUrl:
        "https://appgallery.huawei.com/app/C117754519?sharePrepath=ag&locale=en_US&source=appshare&subsource=C117754519&shareTo=com.android.chrome&shareFrom=appmarket&shareIds=0e1d36adf27045d0bc7bab793d460cd8_com.android.chrome&callType=SHARE",
      category: "mobile",
      images: [
        "https://res.cloudinary.com/dpoqqpqjv/image/upload/v1779401710/image1_qzwsvm.jpg",
        "https://res.cloudinary.com/dpoqqpqjv/image/upload/v1779401711/image2_binhk9.jpg",
        "https://res.cloudinary.com/dpoqqpqjv/image/upload/v1779401712/image3_x5jmhb.jpg",
        "https://res.cloudinary.com/dpoqqpqjv/image/upload/v1779401712/image4_zjjeg2.jpg",
        "https://res.cloudinary.com/dpoqqpqjv/image/upload/v1779401712/image5_c47lhh.jpg",
      ],
    },
    {
      id: "4",
      title: "Gymier",
      description:
        "A gym management system (attendance, subscriptions, and progress tracking).",
      image:
        "https://res.cloudinary.com/dpoqqpqjv/image/upload/v1779402614/cover_m6ohrf.jpg",
      technologies: [
        "Flutter",
        "Dart",
        "Material Design",
        "Cupertino",
        "Firestore Sync",
        "Google maps integration",
        "Hive",
      ],
      liveUrl: "",
      githubUrl: "",
      category: "ui",
      images: [
        "https://res.cloudinary.com/dpoqqpqjv/image/upload/v1779402647/splash_dpx2i1.png",
        "https://res.cloudinary.com/dpoqqpqjv/image/upload/v1779402649/dashboard_qslciv.png",
        "https://res.cloudinary.com/dpoqqpqjv/image/upload/v1779402635/sub_manage_1_orznhp.png",
        "https://res.cloudinary.com/dpoqqpqjv/image/upload/v1779402647/home-2_jxyle1.png",
      ],
    },

    {
      id: "4",
      title: "Wasalny Maak",
      description: "Simple ride requests application ",
      image:
        "https://res.cloudinary.com/dpoqqpqjv/image/upload/v1779405561/UA1tAZxHd7Vv_1024_500_wmixx2.png",
      technologies: ["Flutter", "Dart", "Bloc", "Firestore", "FlutterMaps"],
      liveUrl: "",
      githubUrl: "",
      category: "ui",
      images: [
        "https://res.cloudinary.com/dpoqqpqjv/image/upload/v1779439181/image1_q9curt.jpg",
        "https://res.cloudinary.com/dpoqqpqjv/image/upload/v1779439181/image2_agzagc.jpg",
        "https://res.cloudinary.com/dpoqqpqjv/image/upload/v1779439181/image3_m31hpo.jpg",
        "https://res.cloudinary.com/dpoqqpqjv/image/upload/v1779439181/image4_oogd1z.jpg",
        "https://res.cloudinary.com/dpoqqpqjv/image/upload/v1779439182/image5_z84gcj.jpg",
      ],
    },
  ];

  const categories = [
    { id: "all", name: "All Projects", icon: "bi-grid" },
    { id: "mobile", name: "Mobile Apps", icon: "bi-phone" },
    { id: "ui", name: "UI/UX", icon: "bi-palette" },
    { id: "web", name: "Web Apps", icon: "bi-globe" },
  ];

  const filteredProjects =
    filter === "all"
      ? projects
      : projects.filter((project) => project.category === filter);

  return (
    <section id="portfolio" className="py-20 bg-gray-50 dark:bg-dark-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            My Portfolio
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Explore my latest projects and mobile applications. Each project
            represents my passion for creating exceptional user experiences.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12 animate-slide-up">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setFilter(category.id)}
              className={`inline-flex items-center px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                filter === category.id
                  ? "bg-primary-600 text-white shadow-lg transform scale-105"
                  : "bg-white dark:bg-dark-700 text-gray-700 dark:text-gray-300 hover:bg-primary-50 dark:hover:bg-dark-600 border border-gray-200 dark:border-dark-600"
              }`}
            >
              <i className={`${category.icon} mr-2`}></i>
              {category.name}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              onClick={() => setSelectedProject(project)}
              animationDelay={index * 0.1}
            />
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-12">
            <i className="bi bi-folder-x text-6xl text-gray-400 dark:text-gray-600 mb-4"></i>
            <p className="text-xl text-gray-500 dark:text-gray-400">
              No projects found in this category.
            </p>
          </div>
        )}

        {/* Image Gallery Modal */}
        {selectedProject && (
          <ImageGallery
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </div>
    </section>
  );
};

export default Portfolio;
