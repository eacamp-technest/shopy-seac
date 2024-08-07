import {ImageSourcePropType} from 'react-native/types';

export interface IBrand {
  image: ImageSourcePropType;
  name: string;
}

export const brands: Array<IBrand> = [
  {
    image: require('../assets/images/adidas.png'),
    name: 'Adidas',
  },
  {
    image: require('../assets/images/nike.png'),
    name: 'Nike',
  },
  {
    image: require('../assets/images/converse.png'),
    name: 'Converse',
  },
  {
    image: require('../assets/images/vans.png'),
    name: 'Vans',
  },
];
