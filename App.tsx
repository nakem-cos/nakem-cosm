import React, { useState } from 'react';
import { CONTENT } from './constants';
import { Language } from './types';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Story from './components/Story';
import Philosophy from './components/Philosophy';
import Products from './components/Products';
import Footer from './components/Footer';

const App: React.FC = () => {
  const [language, setLanguage] = useState<Language>(Language.KR);
  const content = CONTENT[language];

  return (
    <div className="min-h-screen font-sans selection:bg-brand-green selection:text-white">
      <Navigation 
        content={content.nav} 
        language={language} 
        onLanguageChange={setLanguage} 
      />
      
      <main>
        <Hero content={content.hero} />
        <Story
          content={content.story}
          image="/brandstory.jpg"
        />
        <Philosophy
          philosophy={content.philosophy}
          ingredient={content.ingredient}
          ingredientImage="/leaf.png"
        />
        <Products
          title={content.products.title}
          subtitle={content.products.subtitle}
          items={content.products.items}
        />
      </main>

      <Footer copyright={content.footer.copyright} tagline={content.footer.tagline} />
    </div>
  );
};

export default App;