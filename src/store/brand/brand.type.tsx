export interface ICategoryActions {
  setCategory: (brand: string) => void;
}

export interface ICategoryStore {
  category: string;
  actions: ICategoryActions;
}
