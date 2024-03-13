import { Schema as ProductsSchema } from '@grafbase/generated';

const backpack: ProductsSchema['Product'] = {
  description: 'This is a backpack.',
  name: 'A Backpack',
  id: '1',
  type: 'BACKPACK',
};

const hat: ProductsSchema['Product'] = {
  description: 'This is a hat.',
  name: 'A Hat',
  id: '2',
  type: 'HAT',
};

const tShirt: ProductsSchema['Product'] = {
  description: 'This is a t-shirt.',
  name: 'A T-shirt',
  id: '3',
  type: 'T_SHIRT',
};

const productsData: ProductsSchema['Product'][] = [backpack, hat, tShirt];

export { backpack, hat, productsData, tShirt };
