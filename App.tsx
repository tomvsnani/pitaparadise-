// Fix: Replaced placeholder content with the main App component implementation.
import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import ImageBanner from './components/ImageBanner';
import MenuCategory from './components/MenuCategory';
import { MENU_DATA } from './constants';

const App: React.FC = () => {
  return (
    <div className="bg-[#0A2342] text-stone-100 min-h-screen font-sans">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <Header />
        <main>
          <ImageBanner />
          <div className="space-y-12 mt-16">
            {MENU_DATA.map((category) => (
              <MenuCategory key={category.category} category={category} />
            ))}
          </div>
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default App;