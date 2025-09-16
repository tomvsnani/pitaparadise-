import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="text-center mt-16 pt-8 border-t-2 border-amber-400/30 text-stone-400">
      <p className="font-serif text-xl text-stone-200">Pita Paradise</p>
      <div className="mt-4 flex flex-col items-center gap-y-2">
        <p className="text-sm">12 GLENEAGLE ROAD, STREATHAM, SW16 6AB</p>
        <div className="flex flex-col sm:flex-row items-center gap-x-4 gap-y-2 mt-2">
            <a href="mailto:Streathampitaparadise@gmail.com" className="text-sm hover:text-amber-400 transition-colors">Streathampitaparadise@gmail.com</a>
            <span className="hidden sm:inline">·</span>
            <a href="tel:07958962124" className="text-sm hover:text-amber-400 transition-colors">07958962124</a>
            <span className="hidden sm:inline">·</span>
            <a href="https://instagram.com/streatham_pitaparadise" target="_blank" rel="noopener noreferrer" className="text-sm hover:text-amber-400 transition-colors">@streatham_pitaparadise</a>
        </div>
      </div>
      <p className="text-xs mt-6">&copy; 2024 Pita Paradise. All Rights Reserved.</p>
    </footer>
  );
};

export default Footer;