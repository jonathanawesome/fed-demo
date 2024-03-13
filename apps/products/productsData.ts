import { Schema } from '@grafbase/generated';

export const productsData: Schema['Product'][] = [
  {
    description: 'This is a backpack.',
    name: 'A Backpack',
    id: '1',
    type: 'BACKPACK',
  },
  {
    description: 'This is a hat.',
    name: 'A Hat',
    id: '2',
    type: 'HAT',
  },
  {
    description: 'This is a t-shirt.',
    name: 'A T-shirt',
    id: '3',
    type: 'T_SHIRT',
  },
];
