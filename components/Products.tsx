import React from 'react';
import { Product } from '../types';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

interface ProductsProps {
  title: string;
  subtitle: string;
  items: Product[];
}

const ProductCard: React.FC<{ product: Product; index: number }> = ({ product, index }) => (
  <motion.div 
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: index * 0.2 }}
    className="group bg-white p-6 md:p-8 rounded-lg shadow-sm hover:shadow-md transition-all duration-500"
  >
    {/* Image Container */}
    <div className="relative overflow-hidden bg-brand-lightGreen/20 aspect-[4/3] mb-8 rounded-sm">
      <img 
        src={product.image} 
        alt={product.name} 
        className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
      />
      {/* Decorative Overlay */}
      <div className="absolute inset-0 bg-brand-green/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    </div>
    
    {/* Content */}
    <div className="space-y-6">
      <div className="space-y-2">
        <h3 className="text-2xl font-serif text-brand-dark">{product.name}</h3>
        <p className="text-sm text-brand-green italic font-medium">{product.slogan}</p>
      </div>

      {/* Feature List - Key Update: Display full feature strings clearly */}
      <div className="py-4 border-t border-b border-brand-dark/5 space-y-3">
         {product.features.map((feature, i) => (
           <div key={i} className="flex items-start gap-3">
             <Check className="w-4 h-4 text-brand-green mt-1 flex-shrink-0" />
             <p className="text-sm text-brand-dark/80 font-light leading-relaxed">{feature}</p>
           </div>
         ))}
         {/* Tags displayed with check icons */}
         {product.tags.length > 0 && (
           <div className="flex items-start gap-3">
             <Check className="w-4 h-4 text-brand-green mt-1 flex-shrink-0" />
             <p className="text-sm text-brand-dark/80 font-light leading-relaxed">{product.tags.join(' / ')}</p>
           </div>
         )}
      </div>

      <div className="space-y-4">
         <div>
            <p className="text-xs text-brand-gray mb-1 uppercase tracking-wide font-bold">How to Use</p>
            <p className="text-sm text-brand-dark/70 font-light">{product.howToUse}</p>
         </div>

         <div className="flex flex-wrap gap-2 pt-2">
            {product.tags.map((tag) => (
              <span key={tag} className="text-[10px] uppercase tracking-wider bg-brand-beige border border-brand-dark/10 px-3 py-1.5 rounded-full text-brand-dark/80">
                {tag}
              </span>
            ))}
         </div>
      </div>
    </div>
  </motion.div>
);

const Products: React.FC<ProductsProps> = ({ title, subtitle, items }) => {
  return (
    <section id="products" className="py-24 bg-brand-lightGreen/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-brand-green text-xs font-bold tracking-[0.2em] uppercase">Collection</span>
          <h2 className="text-4xl md:text-5xl font-serif text-brand-dark mt-4">{title}</h2>
          <p className="mt-4 text-brand-gray font-light max-w-2xl mx-auto">
            {subtitle}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
          {items.map((product, idx) => (
            <ProductCard key={product.id} product={product} index={idx} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;