import React from 'react';
import { PhilosophyItem, IngredientContent } from '../types';
import { Leaf, Recycle, Droplet, Check } from 'lucide-react';
import { motion } from 'framer-motion';

interface PhilosophyProps {
  philosophy: { title: string; items: PhilosophyItem[] };
  ingredient: IngredientContent;
  ingredientImage: string;
}

const Philosophy: React.FC<PhilosophyProps> = ({ philosophy, ingredient, ingredientImage }) => {
  const getIcon = (name: string) => {
    switch (name) {
      case 'leaf': return <Leaf className="w-8 h-8 text-brand-green" />;
      case 'recycle': return <Recycle className="w-8 h-8 text-brand-green" />;
      case 'droplet': return <Droplet className="w-8 h-8 text-brand-green" />;
      default: return <Leaf className="w-8 h-8 text-brand-green" />;
    }
  };

  return (
    <section id="philosophy" className="py-24 bg-white">
      {/* Philosophy Cards */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-32">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-serif text-brand-dark mb-4">{philosophy.title}</h2>
          <div className="w-20 h-[1px] bg-brand-green mx-auto" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {philosophy.items.map((item, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="text-center p-8 bg-brand-lightGreen/30 rounded-lg hover:bg-brand-lightGreen/60 transition-colors"
            >
              <div className="flex justify-center mb-6 p-4 bg-white rounded-full w-20 h-20 mx-auto items-center shadow-sm">
                {getIcon(item.icon)}
              </div>
              <h3 className="text-xl font-semibold text-brand-dark mb-3">{item.title}</h3>
              <p className="text-brand-gray text-sm">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Ingredient Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-brand-dark text-brand-beige rounded-2xl overflow-hidden shadow-2xl">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="p-12 md:p-16 flex flex-col justify-center">
              <span className="text-brand-green text-xs font-bold tracking-widest uppercase mb-4">Key Ingredient</span>
              <h3 className="text-3xl md:text-4xl font-serif mb-6">{ingredient.title}</h3>
              <p className="text-white mb-10 font-semibold text-lg">{ingredient.description}</p>
              
              <ul className="space-y-4">
                {ingredient.features.map((feature, idx) => (
                  <motion.li 
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="flex items-start space-x-3"
                  >
                    <Check className="w-5 h-5 text-brand-green flex-shrink-0 mt-1" />
                    <span className="text-brand-beige/90">{feature}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
            <div className="relative h-64 md:h-auto">
              <img 
                src={ingredientImage} 
                alt="Persimmon Leaf" 
                className="absolute inset-0 w-full h-full object-cover opacity-80"
              />
              <div className="absolute inset-0 bg-brand-green/10 mix-blend-overlay" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Philosophy;