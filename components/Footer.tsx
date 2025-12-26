import React from 'react';

interface FooterProps {
  copyright: string;
  tagline: string;
}

const Footer: React.FC<FooterProps> = ({ copyright, tagline }) => {
  return (
    <footer id="footer" className="bg-brand-dark text-brand-beige py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 border-b border-brand-beige/10 pb-12 mb-12">
          <div className="col-span-1 md:col-span-2">
            <img src="/logo_white.png" alt="NAKEM" className="h-8 mb-6" />
            <p className="text-brand-beige/60 max-w-sm font-light text-sm leading-relaxed whitespace-pre-line">
              {tagline}
            </p>
          </div>
          
          <div>
            <h3 className="text-sm font-bold uppercase tracking-widest mb-6 text-brand-green">Contact</h3>
            <ul className="space-y-4 text-sm text-brand-beige/60 font-light">
              <li>Email: hello@nakem.co.kr</li>
              <li>Seoul, South Korea</li>
              <li>+82 2-0000-0000</li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-bold uppercase tracking-widest mb-6 text-brand-green">Social</h3>
            <ul className="space-y-4 text-sm text-brand-beige/60 font-light">
              <li><a href="#" className="hover:text-brand-green transition-colors">Instagram</a></li>
              <li><a href="#" className="hover:text-brand-green transition-colors">Facebook</a></li>
              <li><a href="#" className="hover:text-brand-green transition-colors">Youtube</a></li>
            </ul>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center text-xs text-brand-beige/40">
          <p>{copyright}</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-brand-beige">Privacy Policy</a>
            <a href="#" className="hover:text-brand-beige">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;