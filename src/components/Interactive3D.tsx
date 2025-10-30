import { motion } from "motion/react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { useState } from "react";
import chromeLogo from "../assets/3Dchrome/ChromeLogo.png";

export function Interactive3D() {
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [rotateZ, setRotateZ] = useState(0);
  const [rRotateX, setRRotateX] = useState(0);
  const [rRotateY, setRRotateY] = useState(0);
  const [rRotateZ, setRRotateZ] = useState(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const rotateXValue = ((y - centerY) / centerY) * -10;
    const rotateYValue = ((x - centerX) / centerX) * 10;
    const angleDeg = Math.atan2(y - centerY, x - centerX) * (180 / Math.PI);
    
    setRotateX(rotateXValue);
    setRotateY(rotateYValue);
    setRotateZ(angleDeg);
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
  };

  const handleRightMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateXValue = ((y - centerY) / centerY) * -10;
    const rotateYValue = ((x - centerX) / centerX) * 10;
    const angleDeg = Math.atan2(y - centerY, x - centerX) * (180 / Math.PI);

    setRRotateX(rotateXValue);
    setRRotateY(rotateYValue);
    setRRotateZ(angleDeg);
  };

  const handleRightMouseLeave = () => {
    setRRotateX(0);
    setRRotateY(0);
    setRRotateZ(0);
  };

  return (
    <section className="py-20 md:py-32 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="mb-4">Interactive Showcase</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Hover over the elements to see them come to life with 3D transformations.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* 3D Laptop */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
          >
            <div className="relative perspective-1000">
              <motion.div
                animate={{
                  rotateX: rotateX,
                  rotateY: rotateY,
                  rotateZ: rotateZ,
                }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                className="relative rounded-2xl overflow-hidden border border-white/20 backdrop-blur-md bg-white/5 p-8"
                style={{
                  transformStyle: "preserve-3d",
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-blue-500/20"></div>
                <div className="relative z-10 w-full h-full flex items-center justify-center" style={{ transform: "translateZ(40px)" }}>
                  <ImageWithFallback
                    src={chromeLogo}
                    alt="Chrome Logo"
                    className="w-64 h-64 object-contain select-none"
                  />
                </div>
                
                {/* Floating elements */}
                <motion.div
                  animate={{
                    y: [0, -20, 0],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="absolute top-1/4 -right-4 w-24 h-24 rounded-full bg-gradient-to-r from-purple-500/30 to-pink-500/30 backdrop-blur-xl border border-white/20"
                  style={{ transform: "translateZ(50px)" }}
                ></motion.div>
                
                <motion.div
                  animate={{
                    y: [0, 20, 0],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 0.5
                  }}
                  className="absolute bottom-1/4 -left-4 w-32 h-32 rounded-full bg-gradient-to-r from-blue-500/30 to-cyan-500/30 backdrop-blur-xl border border-white/20"
                  style={{ transform: "translateZ(30px)" }}
                ></motion.div>
              </motion.div>
            </div>
            
            <div className="mt-8 text-center">
              <h3 className="mb-2">Modern Development Setup</h3>
              <p className="text-gray-400">Building with cutting-edge technology</p>
            </div>
          </motion.div>

          {/* Code Display */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
            onMouseMove={handleRightMouseMove}
            onMouseLeave={handleRightMouseLeave}
          >
            <div className="relative rounded-2xl overflow-hidden border border-white/20 backdrop-blur-md bg-black/40">
              <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 to-blue-500/10"></div>
              
              {/* Code Header */}
              <div className="relative z-10 px-6 py-4 border-b border-white/10 flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
                <span className="ml-4 text-gray-400">Chrome Logo</span>
              </div>
              
              {/* Content: Chrome logo with 3D tilt and floating orbs */}
              <motion.div
                animate={{ rotateX: rRotateX, rotateY: rRotateY, rotateZ: rRotateZ }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                style={{ transformStyle: "preserve-3d" }}
                className="relative z-10 p-6"
              >
                <div className="flex items-center justify-center py-10" style={{ transform: "translateZ(40px)" }}>
                  <ImageWithFallback src={chromeLogo} alt="Chrome Logo" className="w-64 h-64 object-contain select-none" />
                </div>

                <motion.div
                  animate={{ y: [0, -20, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute top-1/4 -right-4 w-24 h-24 rounded-full bg-gradient-to-r from-purple-500/30 to-pink-500/30 backdrop-blur-xl border border-white/20"
                  style={{ transform: "translateZ(50px)" }}
                ></motion.div>

                <motion.div
                  animate={{ y: [0, 20, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                  className="absolute bottom-1/4 -left-4 w-32 h-32 rounded-full bg-gradient-to-r from-blue-500/30 to-cyan-500/30 backdrop-blur-xl border border-white/20"
                  style={{ transform: "translateZ(30px)" }}
                ></motion.div>
              </motion.div>

              {/* Removed previous typing indicator */}
            </div>

            {/* Removed caption under code block per request */}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
