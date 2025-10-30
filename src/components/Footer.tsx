import { motion } from "motion/react";
import { Github, Instagram, Linkedin } from "lucide-react";
import { Button } from "./ui/button";

export function Footer() {
  const handleDownloadResume = () => {
    // In a real application, this would link to an actual resume file
    alert("Resume download would start here. Please add your resume PDF link.");
  };

  return (
    <footer id="contact" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="rounded-3xl border border-white/10 backdrop-blur-xl bg-gradient-to-br from-white/10 to-white/5 p-12 md:p-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="mb-6">Let's Work Together</h2>
            <p className="text-gray-300 max-w-2xl mx-auto mb-8">
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
            </p>
            
            <Button
              asChild
              className="px-8 py-6 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white border-0 shadow-lg shadow-purple-500/20"
            >
              <a href="/PraiseEkpoCV.pdf" download target="_blank" rel="noopener noreferrer">
                Download Resume
              </a>
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col items-center gap-8"
          >
            <div className="flex gap-6">
              <a
                href="https://github.com/Pjekpo"
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-full border border-white/20 backdrop-blur-sm bg-white/5 hover:bg-white/10 transition-all duration-300 hover:scale-110"
                aria-label="GitHub"
              >
                <Github className="w-6 h-6 text-gray-300" />
              </a>
              <a
                href="https://www.linkedin.com/in/praiseekpo/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-full border border-white/20 backdrop-blur-sm bg-white/5 hover:bg-white/10 transition-all duration-300 hover:scale-110"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-6 h-6 text-gray-300" />
              </a>
              <a
                href="https://www.instagram.com/rayi3_"
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-full border border-white/20 backdrop-blur-sm bg-white/5 hover:bg-white/10 transition-all duration-300 hover:scale-110"
                aria-label="Instagram"
              >
                <Instagram className="w-6 h-6 text-gray-300" />
              </a>
            </div>

            <div className="h-px w-64 bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>

            {/* Swapped order: legal notice first, then copyright */}
            <p
              className="text-red-500 underline italic text-center text-sm max-w-3xl"
              style={{ color: "#ff0000", fontStyle: "italic", textDecoration: "underline" }}
            >
              The site and every work featured on it is the exclusive property of Praise Ekpo and is fully protected by copyright. Unauthorized reproduction, distribution, or copying without a valid license is strictly prohibited and will be legally pursued
            </p>
            <p className="text-gray-400">
              © 2025 All rights reserved. Developed by Praise Ekpo.
            </p>
          </motion.div>
        </div>
      </div>
    </footer>
  );
}
