import {useCategoryStore as useCategoryStore} from './brand.store';

export const useCategoryActions = () =>
  useCategoryStore(state => state.actions);
