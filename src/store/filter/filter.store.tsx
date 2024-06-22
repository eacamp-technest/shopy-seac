import {create} from 'zustand';
import {IFilterStore} from './filter.type';
import {IColor} from 'mock/Colors.Mock';

const initial: Omit<IFilterStore, 'actions'> = {
  category: null,
  color: null,
  priceRange: [100, 400],
  size: null,
};

export const useFilterStore = create<IFilterStore>(set => ({
  ...initial,
  actions: {
    setCategory: () => {},
    reset: () => {},
    setColor: (value: IColor | null) => {
      set(() => ({color: value}));
    },
    setPrice: (range: Array<number>) => set({priceRange: range}),
    setSize: () => {},
  },
}));
