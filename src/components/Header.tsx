import { motion } from "motion/react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import picture from "../picture.jpg";

export function Header() {
  return (
    <motion.header 
      id="home"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="relative overflow-hidden pt-20"
    >
      <div className="container mx-auto px-6 py-20 md:py-32">
        <div className="flex flex-col md:flex-row items-center md:items-start justify-center gap-12 md:gap-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-blue-500/20 blur-3xl rounded-full"></div>
            <div className="relative w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-2 border-white/20 backdrop-blur-sm bg-white/5 p-2">
              <ImageWithFallback 
                src={picture}
                alt="Praise Ekpo"
                className="w-full h-full object-cover rounded-full"
              />
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex-1 text-center md:text-left max-w-2xl"
          >
            <div className="inline-block px-4 py-2 rounded-full border border-white/20 backdrop-blur-md bg-white/5 mb-4">
              <p className="text-gray-300">Hi, my name is Praise Ekpo</p>
            </div>
            <h1 className="mb-6 bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
              Developer & Designer
            </h1>
            <p className="text-gray-300 max-w-2xl mb-6">
              I'm a multiskilled BSc (Hons) Computer Science graduate, deeply interested in artificial intelligence and the potential it poses, I enjoy exploring the intersection between human intuition and intelligent automation, and I'm always curious about how AI can be used to solve real-world problems and inspire innovation.
            </p>
            <p className="text-gray-300 max-w-2xl mb-8">
              I'm also the founder of <span className="text-white">The Wol Collective</span>, my clothing brand that
              encourages people to value the one existence they have and the people around them. You can
              check out my brand at
              {" "}
              <a
                href="https://thewolcollective.com"
                target="_blank"
                rel="noopener noreferrer"
                className="underline text-white hover:text-gray-200"
              >
                thewolcollective.com
              </a>
              .
            </p>

            <div className="flex flex-wrap gap-3 justify-center md:justify-start">
              <span className="px-4 py-2 rounded-lg border border-white/10 backdrop-blur-sm bg-white/5 text-gray-200">
                Software Developer
              </span>
              <span className="px-4 py-2 rounded-lg border border-white/10 backdrop-blur-sm bg-white/5 text-gray-200">
                Graphic Designer
              </span>
              <span className="px-4 py-2 rounded-lg border border-white/10 backdrop-blur-sm bg-white/5 text-gray-200">
                Brand Owner
              </span>
            </div>
          </motion.div>

          {/* Divider and Skills column (desktop) */}
          <div className="hidden lg:flex items-stretch gap-10">
            <div className="w-px bg-white/30 rounded-full" />
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="min-w-[280px] max-w-sm"
            >
              <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md p-5 shadow-[0_0_60px_rgba(255,255,255,0.05)]">
                <p className="text-sm text-gray-300 mb-3">Skills</p>
                <div className="flex flex-wrap gap-2">
                  {[
                    "HTML",
                    "CSS",
                    "JavaScript",
                    "TypeScript",
                    "React",
                    "Vite",
                    "Tailwind CSS",
                    "Node.js",
                    "Adobe Illustrator",
                    "Adobe Photoshop",
                    "Three.js",
                    "Figma",
                  ].map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 rounded-lg border border-white/10 bg-white/5 text-gray-200"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.header>
  );
}
