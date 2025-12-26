import React from 'react';
import { StoryContent } from '../types';
import { motion } from 'framer-motion';

interface StoryProps {
  content: StoryContent;
  image: string;
}

const Story: React.FC<StoryProps> = ({ content, image }) => {
  return (
    <section id="story" className="py-24 md:py-32 bg-brand-beige relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          
          {/* Image Side */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative aspect-[3/4] overflow-hidden rounded-sm">
              <img 
                src={image} 
                alt="Brand Story Nature" 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
              {/* Decorative Leaf Silhouette Overlay (CSS) */}
              <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-brand-green/20 rounded-full blur-3xl" />
            </div>
            
             <div className="absolute -top-4 -left-4 w-full h-full border border-brand-green/20 z-[-1]" />
          </motion.div>

          {/* Text Side */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <span className="text-brand-green text-sm font-bold tracking-[0.2em] uppercase">About Us</span>
            <h2 className="text-4xl font-serif text-brand-dark">{content.title}</h2>
            
            <div className="space-y-6 text-brand-dark/70 leading-relaxed font-light">
              {content.description.map((para, idx) => (
                <p key={idx}>{para}</p>
              ))}
            </div>

            <div className="border-l-2 border-brand-green pl-6 py-2">
              <p className="text-lg italic font-serif text-brand-dark">{content.quote}</p>
            </div>

            <p className="text-sm text-brand-gray">{content.subDescription}</p>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Story;