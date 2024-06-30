import { Category } from '../models/DiscoverCategory';

export const categories: { [key: string]: Category } = {
  men: {
    categoryName: 'MEN',
    backgroundColor: '#FF6347',
    backgroundImage: require('../assets/images/discover_men.jpg'),
    menuItems: ['A-Line Dresses', 'Active T-shirts', 'Chiffon Tops', 'Classic T-Shirt', 'Essential T-Shirts', 'Fitted Scoops', 'Fitted T-Shirts', 'Shoes'],
  },
  women: {
    categoryName: 'WOMEN',
    backgroundColor: '#FFD700',
    backgroundImage: require('../assets/images/discover_women.jpg'),
    menuItems: ['A-Line Dresses', 'Active T-shirts', 'Chiffon Tops', 'Classic T-Shirt', 'Essential T-Shirts', 'Fitted Scoops', 'Fitted T-Shirts', 'Shoes'],
  },
  teens: {
    categoryName: 'TEENS',
    backgroundColor: '#8A2BE2',
    backgroundImage: require('../assets/images/discover_teen.jpg'),
    menuItems: ['Graphic Tees', 'Hoodies', 'Jeans', 'Joggers', 'Sneakers', 'Sweatshirts'],
  },
  kids: {
    categoryName: 'KIDS',
    backgroundColor: '#3CB371',
    backgroundImage: require('../assets/images/discover_kid.jpg'),
    menuItems: ['Character Tees', 'Dresses', 'Leggings', 'Overalls', 'Rompers', 'Shorts'],
  },
};
