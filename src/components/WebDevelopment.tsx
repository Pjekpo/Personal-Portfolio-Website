import { motion } from "motion/react";
import { Github } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const projects = [
  {
    id: 1,
    title: "Insta Recipe App",
    description: "A Unity (C#) app that recommends dishes using data from Firebase. Browse recipe ideas, filter, and discover meals quickly with a lightweight, mobile-friendly experience.",
    image: "https://images.unsplash.com/photo-1478145046317-39f10e56b5e9?w=1080",
    tags: ["C#", "Unity", "Firebase"],
    demoUrl: "#",
    githubUrl: "https://github.com/Pjekpo/InstaRecipe"
  },
  {
    id: 2,
    title: "Coach4Improvement (C4i) Website",
    description: "Marketing and services site for a Health & Social Care consultancy, built with TypeScript + React (SPA) using semantic HTML and modern CSS. Showcases C4i’s mission, About, and services including CQC support, registrations, site evaluations, audits, safeguarding, DoLS, care plans, and recruitment in a clear, accessible layout.",
    image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=1080",
    tags: ["TypeScript", "React", "HTML", "CSS"],
    demoUrl: "#",
    githubUrl: "https://github.com/Pjekpo/Coach4Improvement"
  },
  {
    id: 3,
    title: "3D AI Chat Buddy (Android)",
    description: "3D AI chat companion for Android built with C# (Unity). Uses Convai AI for the 3D character’s conversational intelligence and ShaderLab for custom materials and visual effects.",
    image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=1080",
    tags: ["Android", "3D", "C#", "Convai", "ShaderLab"],
    demoUrl: "#",
    githubUrl: "https://github.com/Pjekpo/Chatbuddies-V2"
  }
];

export function WebDevelopment() {
  return (
    <section id="web-development" className="py-20 md:py-32 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="mb-4">Software Development</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Crafting responsive, performant, and user-friendly web applications with modern technologies.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group relative rounded-2xl border border-white/10 backdrop-blur-md bg-white/5 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative h-48 overflow-hidden">
                <ImageWithFallback 
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              </div>

              <div className="relative p-6">
                <h3 className="mb-3">{project.title}</h3>
                <p className="text-gray-400 mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span 
                      key={tag}
                      className="px-3 py-1 rounded-full border border-white/10 bg-white/5 text-gray-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 rounded-lg border border-white/20 backdrop-blur-sm bg-white/10 hover:bg-white/20 transition-colors text-gray-200"
                  >
                    <Github className="w-4 h-4" />
                    Code
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
