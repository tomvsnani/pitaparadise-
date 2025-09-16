// Fix: Replaced placeholder content with the MenuItem component implementation.
import React from 'react';
import { MenuItem as MenuItemType } from '../types';

interface MenuItemProps {
  item: MenuItemType;
}

const MenuItem: React.FC<MenuItemProps> = ({ item }) => {
  return (
    <div className="flex justify-between items-start gap-4 py-2">
      <div>
        <h4 className="font-bold text-stone-100">{item.name}</h4>
        {item.description && <p className="text-sm text-stone-400 mt-1">{item.description}</p>}
      </div>
      <div className="font-bold text-amber-400 whitespace-nowrap text-right">
        {item.largePrice ? (
          <div>
            <span className="text-sm">S:</span> {item.price}
            <span className="ml-3 text-sm">L:</span> {item.largePrice}
          </div>
        ) : (
          <p>{item.price}</p>
        )}
      </div>
    </div>
  );
};

export default MenuItem;