// Fix: Replaced placeholder content with type definitions for the menu.
export interface MenuItem {
  name: string;
  description?: string;
  price: string;
  largePrice?: string;
}

export interface MenuCategory {
  category: string;
  items: MenuItem[];
}

export type Menu = MenuCategory[];