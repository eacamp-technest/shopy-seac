import {create} from 'zustand';
import {IFilterStore} from './filter.type';
import {IColor} from 'mock/Colors.Mock';
import {ISize} from 'mock/Sizes.Mock';
import {ICategory} from 'mock/Categories.Mock';

const initial: Omit<IFilterStore, 'actions'> = {
  category: null,
  color: null,
  priceRange: [100, 400],
  size: null,
};

export const useFilterStore = create<IFilterStore>(set => ({
  ...initial,
  actions: {
    setCategory: (value: ICategory) => set({category: value}),
    reset: () => {},
    setColor: (value: IColor | null) => {
      set(() => ({color: value}));
    },
    setPrice: (range: Array<number>) => set({priceRange: range}),
    setSize: (value: ISize) => set({size: value}),
  },
}));
