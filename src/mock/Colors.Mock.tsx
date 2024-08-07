export interface IColor {
  code: string;
  name: string;
  id: number;
}

export const filterColors: Array<IColor> = [
  {
    id: 1,
    code: '#2C5385',
    name: 'blue',
  },
  {
    id: 2,
    code: '#D3180C',
    name: 'red',
  },
  {
    id: 3,
    code: '#F2B36D',
    name: 'orange',
  },
  {
    id: 4,
    code: '#8D8D8E',
    name: 'grey',
  },
  {
    id: 5,
    code: '#800080',
    name: 'purple',
  },
  {
    id: 6,
    code: '#008000',
    name: 'green',
  },
];
