export interface ICategory {
  name: string;
  id: number;
}

export const categories: Array<ICategory> = [
  {name: 'All', id: 5},
  {name: 'Man', id: 1},
  {name: 'Woman', id: 2},
  {name: 'Child', id: 3},
  {name: 'Baby', id: 4},
];
