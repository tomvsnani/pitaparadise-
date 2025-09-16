// Fix: Replaced placeholder content with menu data.
import { Menu } from './types';

export const MENU_DATA: Menu = [
  {
    category: 'Deals',
    items: [
        { name: 'Lunch Special', description: 'Any Pitta or Gyro, plus a side of Oregano Chips and a soft drink.', price: '£12.00' },
    ]
  },
  {
    category: 'Pittas & Gyros',
    items: [
      { name: 'Chicken', description: 'Chicken gyros, chips, tomatoes, onions and greekos sauce', price: '£8.95' },
      { name: 'Lamb', description: 'Lamb gyros, chips, onions and tzatziki', price: '£9.95' },
      { name: 'Mix', description: 'Chicken and Lamb gyros, chips, tomatoes, onions & greekos sauce', price: '£9.45' },
      { name: 'Halloumi', description: '3pcs of Halloumi, chips, tomatoes, onions and shakshuka sauce', price: '£9.35' },
      { name: 'Portebello', description: 'Portobello mushrooms, chips, tomatoes, onions & hummus', price: '£9.10' },
      { name: 'Vegan', description: 'Vegan gyros, chips, tomatoes, onions, vegan sauce', price: '£10.75' },
    ],
  },
  {
    category: 'Hot Boxes',
    items: [
      { name: 'Chicken', description: 'Chicken gyros, chips, tomatoes, onions and greekos sauce', price: '£12.45' },
      { name: 'Lamb', description: 'Lamb gyros, chips, tomatoes, onions and tzatziki', price: '£14.85' },
      { name: 'Mix', description: 'Chicken & Lamb gyros, chips, tomatoes, cucumbers, onions and greekos sauce', price: '£13.65' },
      { name: 'Halloumi', description: '3 pcs Halloumi, chips, tomatoes, cucumbers, onions and shakshuka sauce', price: '£13.05' },
      { name: 'Portebello', description: 'Portobello mushroom, chips, tomatoes, cucumbers, onions and hummus', price: '£12.45' },
      { name: 'Vegan', description: 'Vegan gyros, chips, tomatoes, onions, cucumbers and vegan sauce', price: '£14.85' },
      { name: 'Meat & Chips', description: 'Choice of gyros (meat or vegan), chips, cheese, jalapenos and greekos sauce', price: '£9.75', largePrice: '£17.95' },
    ],
  },
  {
    category: 'Salad',
    items: [
      { name: 'Greek Salad', price: '£7.25' },
      { name: 'Greekos Salad', price: '£7.45' },
    ],
  },
  {
    category: 'Side',
    items: [
      { name: 'Halloumi Chips', price: '£7.45' },
      { name: '3 Dips with Olives & Pitta', price: '£8.15' },
      { name: 'Greek Olives', price: '£4.75' },
      { name: 'Mixed Pickles', price: '£4.05' },
      { name: 'Oregano Chips', price: '£4.10', largePrice: '£4.50' },
      { name: 'Dip with Pita', price: '£4.85' },
    ],
  },
  {
    category: 'Dessert',
    items: [
      { name: 'Tres Leches Cake', price: '£5.45' },
      { name: 'Baklava', price: '£5.45' },
    ],
  },
  {
    category: 'Drinks',
    items: [
      { name: 'Coke/Diet/Zero/Fanta/Sprite', price: '£1.95' },
      { name: 'Water (Still/Sparkling)', price: '£1.50' },
      { name: 'Loux', price: '£2.25' },
      { name: 'Orange Juice', price: '£2.45' },
      { name: 'Mythos Beer', price: '£4.25' },
      { name: 'Red / White Wine', price: '£7.25' },
    ],
  },
];