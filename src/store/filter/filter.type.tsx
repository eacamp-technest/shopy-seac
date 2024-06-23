import {ICategory} from 'mock/Categories.Mock';
import {IColor} from 'mock/Colors.Mock';
import {ISize} from 'mock/Sizes.Mock';

interface IFilterActions {
  setColor: (value: IColor) => void;
  setPrice: (value: Array<number>) => void;
  setSize: (value: ISize) => void;
  setCategory: (value: ICategory) => void;
  reset: () => void;
}

export interface IFilterStore {
  color: IColor | null;
  priceRange: Array<number>;
  size: ISize | null;
  category: ICategory | null;
  actions: IFilterActions;
}
