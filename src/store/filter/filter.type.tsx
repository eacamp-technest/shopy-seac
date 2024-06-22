import {IColor} from 'mock/Colors.Mock';

interface IFilterActions {
  setColor: (value: IColor) => void;
  setPrice: (value: Array<number>) => void;
  setSize: () => void;
  setCategory: () => void;
  reset: () => void;
}

export interface IFilterStore {
  color: IColor | null;
  priceRange: Array<number>;
  size: string | null;
  category: string | null;
  actions: IFilterActions;
}
