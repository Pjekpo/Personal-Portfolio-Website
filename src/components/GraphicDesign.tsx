import { motion } from "motion/react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { useEffect, useState } from "react";
import { X } from "lucide-react";

// Dynamically load branding images from local folder (supports subfolders)
const brandingModules = (import.meta as any).glob(
  "/src/assets/The Wol Collective/**/*.{png,jpg,jpeg,webp,gif}",
  { eager: true, import: "default" }
) as Record<string, string>;

// Support legacy folder name if rename isn't applied yet
const brandingModulesFallback = (import.meta as any).glob(
  "/src/assets/branding/**/*.{png,jpg,jpeg,webp,gif}",
  { eager: true, import: "default" }
) as Record<string, string>;

const brandingEntries = { ...brandingModules, ...brandingModulesFallback } as Record<string, string>;
const brandingPastWorks = Object.entries(brandingEntries).map(([path, url]) => {
  const filename = path.split("/").pop() || "project";
  const title = filename
    .replace(/\.[^.]+$/, "")
    .replace(/[-_]/g, " ")
    .replace(/\b\w/g, (m) => m.toUpperCase());
  return {
    title,
    image: url,
    path,
    description: "Branding project showcase.",
    details:
      "Part of the Working on Living brand. Designed assets, layouts, and compositions to express identity.",
  };
});

// Load Freelance/Personal Projects dynamically
const freelanceModules = (import.meta as any).glob(
  "/src/assets/FreelancePersonalProjects/**/*.{png,jpg,jpeg,webp,gif}",
  { eager: true, import: "default" }
) as Record<string, string>;

const freelancePastWorks = Object.entries(freelanceModules).map(([path, url]) => {
  const filename = path.split("/").pop() || "image";
  const title = filename
    .replace(/\.[^.]+$/, "")
    .replace(/[-_]/g, " ")
    .replace(/\b\w/g, (m) => m.toUpperCase());
  return { title, image: url, path } as { title: string; image: string; path: string };
});

// Group into Cloth Designs and Posters based on folder names
const clothWorks = brandingPastWorks.filter((w) => /cloth|clothes|apparel|garment|shirt|tee/i.test(w.path || ""));
const posterWorks = brandingPastWorks.filter((w) => /poster|posters|print|artboard|flyer/i.test(w.path || ""));

// Prefer a specific cover image for WOL Collective if present
const wolCoverImage = brandingPastWorks.find(
  (w) => /whitelogo/i.test(w.title) || /whitelogo/i.test(w.path || "")
)?.image;

// Group Freelance/Personal by folder names
const freelanceImages = freelancePastWorks.filter((w) => /\/Freelance\//i.test(w.path || ""));
const personalImages = freelancePastWorks.filter((w) => /\/Personal\//i.test(w.path || ""));

const designWorks = [
  {
    id: 1,
    title: "Brand Designs",
    category: "The WOL Collective",
    image:
      wolCoverImage ||
      brandingPastWorks[0]?.image ||
      "https://images.unsplash.com/photo-1609921212029-bb5a28e60960?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxncmFwaGljJTIwZGVzaWduJTIwd29ya3NwYWNlfGVufDF8fHx8MTc2MTU2Nzc5Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    description: "Complete brand identity package including logo, color palette, and brand guidelines.",
    showCount: false,
    pastWorks: brandingPastWorks.length ? brandingPastWorks : [
      {
        title: "Tech Startup Branding",
        image: "https://images.unsplash.com/photo-1609921212029-bb5a28e60960?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxncmFwaGljJTIwZGVzaWduJTIwd29ya3NwYWNlfGVufDF8fHx8MTc2MTU2Nzc5Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
        description: "Created a complete brand identity for an innovative tech startup, focusing on modern aesthetics and digital-first design principles.",
        details: "This project involved developing a comprehensive brand identity system including logo design, color palette, typography guidelines, and brand voice. The design reflects the company's innovative approach to technology while maintaining approachability and professionalism. The brand system was designed to be flexible across digital and physical touchpoints, from website to business cards. Key deliverables included a 50-page brand guidelines document, social media templates, and presentation deck designs."
      },
      {
        title: "Creative Agency Logo",
        image: "https://images.unsplash.com/photo-1634729020084-106e70838c97?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxicmFuZCUyMGlkZW50aXR5JTIwbG9nb3xlbnwxfHx8fDE3NjE1NzE3MzJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
        description: "Bold and creative logo design for a creative agency that pushes boundaries and thinks outside the box.",
        details: "Designed a distinctive logo and visual identity system for a forward-thinking creative agency. The project required balancing creativity with professionalism, resulting in a bold wordmark with custom letterforms. The identity system includes multiple logo variations for different applications, a vibrant color system, and unique geometric patterns used across branded materials. The design emphasizes the agency's innovative spirit while maintaining versatility across various media."
      },
      {
        title: "Corporate Brand Guide",
        image: "https://images.unsplash.com/photo-1548094990-c16ca90f1f0d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxicmFuZGluZyUyMGRlc2lnbnxlbnwxfHx8fDE3NjE0ODE5OTF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
        description: "Comprehensive brand guidelines developed for a Fortune 500 company to ensure consistency across all touchpoints.",
        details: "Developed an extensive brand guidelines document for a large corporate client, establishing clear standards for logo usage, color applications, typography, photography style, and brand voice. The guide includes detailed specifications for digital and print applications, ensuring brand consistency across global markets and diverse teams. Created templates for common marketing materials and established guidelines for co-branding partnerships. The comprehensive 100+ page guide serves as the definitive reference for all brand communications."
      },
      {
        title: "E-commerce Brand",
        image: "https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=1080",
        description: "Fresh and vibrant branding for an online retail brand targeting millennial and Gen-Z consumers.",
        details: "Designed a youthful, energetic brand identity for an e-commerce fashion retailer. The project focused on creating a visually appealing brand that resonates with younger audiences while maintaining commercial viability. The identity features a playful color palette, modern typography, and dynamic graphic elements that work seamlessly across digital platforms. Deliverables included logo design, packaging design, website visual identity, social media assets, and brand photography guidelines. The brand successfully launched with strong social media engagement and positive customer feedback."
      }
    ]
  },
  {
    id: 2,
    title: "Digital Illustrations",
    category: "Freelance/Personal Projects",
    image: freelancePastWorks[0]?.image || "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=1080",
    description: "Custom digital illustrations for web and mobile applications.",
    showCount: false,
    pastWorks: freelancePastWorks.length ? freelancePastWorks : [],
  },
  {
    id: 3,
    title: "UI/UX Design System",
    category: "UI/UX",
    image: "https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=1080",
    description: "Comprehensive design system with reusable components and patterns.",
    pastWorks: [
      {
        title: "Dashboard Interface",
        image: "https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=1080",
        description: "Clean and intuitive dashboard design for a SaaS analytics platform serving enterprise clients.",
        details: "Designed a comprehensive analytics dashboard that presents complex data in an accessible, visually appealing format. The project involved creating data visualization components, navigation systems, and customizable widgets that allow users to personalize their experience. Key focus areas included information hierarchy, color coding for quick data interpretation, and responsive layouts that work across desktop and tablet devices. The dashboard features dark and light mode options, real-time data updates, and interactive charts built with user testing insights. Collaborated closely with product managers and developers to ensure technical feasibility while maintaining design excellence."
      },
      {
        title: "Mobile App UI",
        image: "https://images.unsplash.com/photo-1618761714954-0b8cd0026356?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1aSUyMGRlc2lnbiUyMGludGVyZmFjZXxlbnwxfHx8fDE3NjE1ODc4MzJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
        description: "Modern mobile application interface design for a social networking platform with over 50 unique screens.",
        details: "Led the UI design for a mobile social networking application, creating an engaging and intuitive user interface that encourages interaction and content sharing. The design system includes custom components for posts, stories, messaging, and profile management. Special attention was given to gesture-based interactions, smooth animations, and thumb-friendly navigation patterns. The app supports both iOS and Android platforms with platform-specific adaptations. Conducted extensive user testing to refine the interface, resulting in a 40% increase in user engagement during beta testing. Deliverables included high-fidelity mockups, interactive prototypes, and detailed design specifications for developers."
      },
      {
        title: "Design System Components",
        image: "https://images.unsplash.com/photo-1622117515670-fcb02499491f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1eCUyMGRlc2lnbiUyMHdpcmVmcmFtZXxlbnwxfHx8fDE3NjE1Mjg2NzF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
        description: "Comprehensive design system with reusable components, patterns, and documentation for scalable product development.",
        details: "Built a complete design system from the ground up for a growing tech company, establishing design consistency across multiple products and platforms. The system includes atomic design components (buttons, inputs, cards), complex patterns (forms, tables, modals), and comprehensive usage guidelines. Each component is documented with accessibility standards, responsive behaviors, and code snippets for developers. The design system is maintained in Figma with auto-layout features and variants for different states. Also created a companion website showcasing all components with live examples and best practices. This system reduced design and development time by 60% and ensured brand consistency across all products."
      },
      {
        title: "Web Application Flow",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1080",
        description: "Complete user flow and experience design for a project management web platform used by creative teams.",
        details: "Designed the end-to-end user experience for a collaborative project management platform, mapping out user journeys from onboarding to advanced feature usage. The project included wireframing, user flow diagrams, interactive prototypes, and high-fidelity designs for over 80 screens. Focused on creating intuitive workflows for task creation, team collaboration, file sharing, and project timeline management. Conducted competitive analysis, user interviews, and usability testing throughout the design process. The final design features drag-and-drop functionality, real-time collaboration indicators, and smart automation suggestions. The platform successfully launched with positive user feedback and a 4.8/5 rating in early reviews."
      }
    ]
  }
];

export function GraphicDesign() {
  const [selectedWork, setSelectedWork] = useState<typeof designWorks[0] | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  // Simple gallery mode – no zoom or single-image viewer

  const handleNextImage = () => {
    if (selectedWork && currentImageIndex < selectedWork.pastWorks.length - 1) {
      setCurrentImageIndex(currentImageIndex + 1);
    }
  };

  const handlePrevImage = () => {
    if (currentImageIndex > 0) {
      setCurrentImageIndex(currentImageIndex - 1);
    }
  };

  const handleWorkClick = (work: typeof designWorks[0]) => {
    setSelectedWork(work);
    setCurrentImageIndex(0);
    setZoomMode('fit');
  };

  // Lock background scroll when modal is open
  useEffect(() => {
    const prev = document.body.style.overflow;
    if (selectedWork) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = prev || "";
    }
    return () => {
      document.body.style.overflow = prev;
    };
  }, [selectedWork]);

  return (
    <section id="graphic-design" className="py-20 md:py-32 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="mb-4">Designs</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            I'm a self-taught graphic designer proficient in Photoshop and Illustrator and continuously expanding my creative toolkit. Join me on this journey as we create designs that push the boundaries of what's been seen before.
          </p>
          {/* Removed copyright notice per request */}
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6">
          {designWorks.filter((w) => w.category !== "UI/UX").map((work, index) => (
            <motion.div
              key={work.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              onClick={() => handleWorkClick(work)}
              className="group relative aspect-square rounded-2xl overflow-hidden cursor-pointer border border-white/10 backdrop-blur-sm bg-white/5"
            >
              <ImageWithFallback 
                src={work.image}
                alt={work.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300"></div>
              
              <div className="absolute inset-0 flex flex-col justify-end p-6">
                <span className="inline-block w-fit px-3 py-1 rounded-full border border-white/20 bg-white/10 backdrop-blur-sm text-gray-200 mb-2">
                  {work.category}
                </span>
                {work.id !== 1 && work.id !== 2 && work.title && (
                  <h3 className="text-white">{work.title}</h3>
                )}
                {work.showCount !== false && work.id !== 2 && (
                  <p className="text-gray-300 text-sm mt-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    Click to view {work.pastWorks.length} past works
                  </p>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal with Gallery */}
      {selectedWork && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setSelectedWork(null)}
          className="fixed inset-0 bg-black/90 backdrop-blur-md z-50 flex items-center justify-center p-4 md:p-6 overscroll-none"
        >
          {/** Prevent background scroll when modal is open */}
          {(() => {
            // lock scroll on mount of modal content
            // using an IIFE inside JSX to run side-effect hooks is not allowed, so we use useEffect below
            return null;
          })()}
          <motion.div
            initial={{ opacity: 0, rotateX: -10, scale: 0.9 }}
            animate={{ opacity: 1, rotateX: 0, scale: 1 }}
            exit={{ opacity: 0, rotateX: -10, scale: 0.9 }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-xl mx-auto rounded-2xl border border-white/20 backdrop-blur-xl bg-black/60 overflow-hidden max-h-[90vh] flex flex-col perspective-1000"
          >
            {/* Futuristic grid and scanline overlays */}
            <div
              className="pointer-events-none absolute inset-0"
              style={{
                backgroundImage:
                  "linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)",
                backgroundSize: "40px 40px, 40px 40px",
              }}
            />
            <motion.div
              className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-white/10 to-transparent"
              initial={{ y: "-100%" }}
              animate={{ y: ["-100%", "120%"] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: "linear" }}
            />
            <button
              onClick={() => setSelectedWork(null)}
              className="absolute top-4 right-4 z-10 p-2 rounded-full border border-white/20 bg-black/50 backdrop-blur-sm hover:bg-white/20 transition-colors"
            >
              <X className="w-6 h-6 text-white" />
            </button>
            
            {/* Simple Gallery with grouped sections for Brand Designs */}
            <div className="flex-1 overflow-y-auto p-6 md:p-8">
              <div className="flex items-center justify-between mb-6">
                <span className="inline-block px-4 py-2 rounded-full border border-white/20 bg-white/10 backdrop-blur-sm text-gray-200">
                  {selectedWork.category}
                </span>
                <h3 className="text-white">{selectedWork.title}</h3>
              </div>

              {selectedWork.title === "Brand Designs" && (clothWorks.length || posterWorks.length) ? (
                <>
                  {clothWorks.length > 0 && (
                    <div className="mb-8">
                      <h4 className="text-white mb-3">Cloth Designs</h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                        {clothWorks.map((work, idx) => (
                          <div key={`cloth-${idx}`} className="rounded-xl border border-white/10 bg-black/40 p-2">
                            <ImageWithFallback
                              src={work.image}
                              alt={work.title}
                              className="w-full h-56 object-contain rounded-lg"
                            />
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                  {posterWorks.length > 0 && (
                    <div className="mb-4">
                      <h4 className="text-white mb-3">Posters</h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                        {posterWorks.map((work, idx) => (
                          <div key={`poster-${idx}`} className="rounded-xl border border-white/10 bg-black/40 p-2">
                            <ImageWithFallback
                              src={work.image}
                              alt={work.title}
                              className="w-full h-56 object-contain rounded-lg"
                            />
                          </div>
                        ))}
                  </div>
                </div>
              )}
              </>
              ) : selectedWork.category === "Freelance/Personal Projects" && (freelanceImages.length || personalImages.length) ? (
                <>
                  {freelanceImages.length > 0 && (
                    <div className="mb-8">
                      <h4 className="text-white mb-3">Freelance</h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                        {freelanceImages.map((work, idx) => (
                          <div key={`freelance-${idx}`} className="rounded-xl border border-white/10 bg-black/40 p-2">
                            <ImageWithFallback src={work.image} alt={work.title} className="w-full h-56 object-contain rounded-lg" />
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                  {personalImages.length > 0 && (
                    <div className="mb-4">
                      <h4 className="text-white mb-3">Personal</h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                        {personalImages.map((work, idx) => (
                          <div key={`personal-${idx}`} className="rounded-xl border border-white/10 bg-black/40 p-2">
                            <ImageWithFallback src={work.image} alt={work.title} className="w-full h-56 object-contain rounded-lg" />
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </>
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                  {selectedWork.pastWorks.map((work, idx) => (
                    <div key={idx} className="rounded-xl border border-white/10 bg-black/40 p-2">
                      <ImageWithFallback
                        src={work.image}
                        alt={work.title}
                        className="w-full h-56 object-contain rounded-lg"
                      />
                    </div>
                  ))}
                </div>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </section>
  );
}


