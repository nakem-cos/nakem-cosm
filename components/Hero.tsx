import React, { useRef } from 'react';
import { HeroContent } from '../types';
import { motion, useScroll, useTransform } from 'framer-motion';

interface HeroProps {
  content: HeroContent;
}

const Hero: React.FC<HeroProps> = ({ content }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <div ref={containerRef} className="relative h-screen min-h-[700px] w-full overflow-hidden flex items-center justify-center bg-brand-beige">
      {/* Background Image - Parallax & Continuous Zoom */}
      <motion.div 
        style={{ y, opacity }}
        className="absolute inset-0 z-0"
      >
        <motion.div 
          className="w-full h-[120%] -top-[10%] absolute bg-cover bg-center bg-no-repeat"
          style={{ 
            backgroundImage: 'url("https://images.unsplash.com/photo-1507919909716-c934963836ce?q=80&w=2940&auto=format&fit=crop")',
          }}
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        />
        {/* Grain overlay for texture */}
        <div className="absolute inset-0 bg-neutral-900/5 mix-blend-overlay" />
      </motion.div>
      
      {/* Soft Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-brand-beige/10 via-brand-beige/20 to-brand-beige/80 z-10 pointer-events-none" />

      {/* Content */}
      <div className="relative z-20 text-center px-4 max-w-5xl mx-auto">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
           className="relative inline-block overflow-hidden"
        >
           <motion.span 
             className="block text-brand-green tracking-[0.3em] text-xs md:text-sm uppercase font-bold mb-6 relative z-10"
             animate={{ opacity: [0.7, 1, 0.7] }}
             transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
           >
             Nature Refined, Skin Defined
           </motion.span>
        </motion.div>

        {/* Breathing Opacity Container (CSS Animation) - Replaces Floating Animation */}
        <div className="animate-breathing">
            <motion.h1 
              className="text-5xl md:text-8xl font-serif font-light text-brand-dark mb-8 leading-tight tracking-tight mix-blend-multiply"
            >
              {content.title.split('\n').map((line, i) => (
                <span key={i} className="block overflow-hidden">
                  <motion.span
                    initial={{ y: "100%" }}
                    animate={{ y: 0 }}
                    transition={{ duration: 1.2, delay: 0.4 + (i * 0.1), ease: [0.22, 1, 0.36, 1] }}
                    className="block"
                  >
                    {line}
                  </motion.span>
                </span>
              ))}
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.8 }}
              className="text-lg md:text-xl font-light text-brand-dark/70 mb-12 max-w-xl mx-auto leading-relaxed"
            >
              {content.subtitle}
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 1 }}
            >
              <a 
                href="#products"
                className="group relative inline-flex items-center gap-2 overflow-hidden border border-brand-dark/30 text-brand-dark px-12 py-4 text-xs tracking-[0.2em] uppercase transition-all duration-500 hover:border-brand-dark hover:text-white"
              >
                <span className="relative z-10 transition-colors duration-500 group-hover:text-white">{content.cta}</span>
                <div className="absolute inset-0 bg-brand-dark transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
              </a>
            </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] uppercase tracking-widest text-brand-dark/40">Scroll</span>
        <div className="w-[1px] h-12 bg-brand-dark/10 relative overflow-hidden">
           <motion.div 
             className="absolute top-0 left-0 w-full h-1/2 bg-brand-dark/40" 
             animate={{ y: ["-100%", "200%"] }}
             transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
           />
        </div>
      </motion.div>
    </div>
  );
};

export default Hero;