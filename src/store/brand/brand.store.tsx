import {create} from 'zustand';
import {ICategoryStore} from './brand.type';

const initial: Omit<ICategoryStore, 'actions'> = {
  category: '',
};

export const useCategoryStore = create<ICategoryStore>(set => ({
  ...initial,
  actions: {
    setCategory: (category: string) => set({category: category}),
  },
}));
