// Fix: Replaced placeholder content with the Header component implementation.
import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="py-8 text-center">
      <h1 className="text-6xl md:text-7xl font-extrabold text-white tracking-wide uppercase">
        PITAPARADISE
      </h1>
      <p className="text-xl text-stone-300 mt-2 tracking-widest">
        Greek Grill
      </p>
    </header>
  );
};

export default Header;