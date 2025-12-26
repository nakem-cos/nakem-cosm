import React, { useState, useEffect } from 'react';
import { Menu, X, Globe } from 'lucide-react';
import { Language, NavContent } from '../types';

interface NavigationProps {
  content: NavContent;
  language: Language;
  onLanguageChange: (lang: Language) => void;
}

const Navigation: React.FC<NavigationProps> = ({ content, language, onLanguageChange }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: content.story, href: '#story' },
    { label: content.philosophy, href: '#philosophy' },
    { label: content.products, href: '#products' },
    { label: content.contact, href: '#footer' },
  ];

  const toggleLanguage = () => {
    onLanguageChange(language === Language.KR ? Language.EN : Language.KR);
  };

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-500 ${
        isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-4 border-b border-brand-dark/5' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="#">
              <img src="/logo_black.png" alt="NAKEM" className="h-7" />
            </a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-10">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-brand-dark/60 hover:text-brand-green transition-colors text-xs uppercase tracking-[0.15em] font-medium"
              >
                {link.label}
              </a>
            ))}
            
            <button
              onClick={toggleLanguage}
              className="flex items-center space-x-1 text-brand-dark/60 hover:text-brand-dark transition-colors border border-brand-dark/20 px-3 py-1 rounded-full hover:border-brand-dark/50"
            >
              <Globe size={14} />
              <span className="text-[10px] font-semibold tracking-widest">{language}</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
             <button
              onClick={toggleLanguage}
              className="mr-4 text-brand-dark/60"
            >
              <span className="text-xs font-bold">{language}</span>
            </button>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-brand-dark focus:outline-none"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-brand-beige shadow-xl border-t border-brand-dark/5">
          <div className="px-4 pt-2 pb-6 space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="block px-3 py-4 text-center text-sm uppercase tracking-widest font-medium text-brand-dark hover:bg-brand-white/50 rounded-md"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;