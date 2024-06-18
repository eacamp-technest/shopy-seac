// src/data.js

import { Category } from '../models/DiscoverCategory';

export const categories: { [key: string]: Category } = {
  men: {
    categoryName: 'MEN',
    backgroundColor: '#FF6347',
    backgroundImage: require('../assets/images/discover_men.jpg'),
  },
  women: {
    categoryName: 'WOMEN',
    backgroundColor: '#FFD700',
    backgroundImage: require('../assets/images/discover_women.jpg'),
  },
  teens: {
    categoryName: 'TEENS',
    backgroundColor: '#8A2BE2',
    backgroundImage: require('../assets/images/discover_teen.jpg'),
  },
  kids: {
    categoryName: 'KIDS',
    backgroundColor: '#3CB371',
    backgroundImage: require('../assets/images/discover_kid.jpg'),
  },
};
