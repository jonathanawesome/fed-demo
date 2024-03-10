import { Schema } from '@grafbase/generated';

export const productsData: Schema['Product'][] = [
  {
    description: 'This is a cool t-shirt.',
    name: 'A Cool T-shirt',
    id: '1',
    type: 'T_SHIRT',
  },
  {
    description: 'This is a cool backpack.',
    name: 'A Cool Backpack',
    id: '1',
    type: 'BACKPACK',
  },
  {
    description: 'This is a cool hat.',
    name: 'A Cool Hat',
    id: '1',
    type: 'HAT',
  },
];
