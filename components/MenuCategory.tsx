// Fix: Replaced placeholder content with the MenuCategory component implementation.
import React from 'react';
import { MenuCategory as MenuCategoryType } from '../types';
import MenuItem from './MenuItem';

interface MenuCategoryProps {
  category: MenuCategoryType;
}

const MenuCategory: React.FC<MenuCategoryProps> = ({ category }) => {
  return (
    <section>
      <h3 className="text-3xl font-serif text-amber-400 border-b-2 border-amber-400/30 pb-2 mb-4">
        {category.category}
      </h3>
      <div className="divide-y divide-stone-700">
        {category.items.map((item) => (
          <MenuItem key={item.name} item={item} />
        ))}
      </div>
    </section>
  );
};

export default MenuCategory;
