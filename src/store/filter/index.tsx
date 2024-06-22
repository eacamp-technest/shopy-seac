import {useFilterStore} from './filter.store';

export const useFilterStoreActions = () =>
  useFilterStore(state => state.actions);
