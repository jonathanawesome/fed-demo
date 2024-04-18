import { Schema } from '@grafbase/generated';

import { Schema as ProductsSchema } from '../products/generated';

// these items are copied from the products repo.
// it's gross, but a workaround for various pnpm/typescript issues with importing
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

type ReviewWithProduct = Schema['Review'] & { product: ProductsSchema['Product'] };

export const reviewsData: ReviewWithProduct[] = [
  // productType === BACKPACK
  {
    content: 'A POOR backpack',
    id: '10',
    rating: 'POOR',
    product: backpack,
  },
  {
    content: 'A LESS_THAN_NEUTRAL backpack',
    id: '11',
    rating: 'LESS_THAN_NEUTRAL',
    product: backpack,
  },
  {
    content: 'A NEUTRAL backpack',
    id: '12',
    rating: 'NEUTRAL',
    product: backpack,
  },
  {
    content: 'A LESS_THAN_EXCELLENT backpack',
    id: '13',
    rating: 'LESS_THAN_EXCELLENT',
    product: backpack,
  },
  {
    content: 'A EXCELLENT backpack',
    id: '14',
    rating: 'EXCELLENT',
    product: backpack,
  },

  // productType === HAT
  {
    content: 'A POOR hat',
    id: '20',
    rating: 'POOR',
    product: hat,
  },
  {
    content: 'A LESS_THAN_NEUTRAL hat',
    id: '21',
    rating: 'LESS_THAN_NEUTRAL',
    product: hat,
  },
  {
    content: 'A NEUTRAL hat',
    id: '22',
    rating: 'NEUTRAL',
    product: hat,
  },
  {
    content: 'A LESS_THAN_EXCELLENT hat',
    id: '23',
    rating: 'LESS_THAN_EXCELLENT',
    product: hat,
  },
  {
    content: 'A EXCELLENT hat',
    id: '24',
    rating: 'EXCELLENT',
    product: hat,
  },

  // productType === T_SHIRT
  {
    content: 'A POOR t-shirt',
    id: '30',
    rating: 'POOR',
    product: tShirt,
  },
  {
    content: 'A LESS_THAN_NEUTRAL t-shirt',
    id: '31',
    rating: 'LESS_THAN_NEUTRAL',
    product: tShirt,
  },
  {
    content: 'A NEUTRAL t-shirt',
    id: '32',
    rating: 'NEUTRAL',
    product: tShirt,
  },
  {
    content: 'A LESS_THAN_EXCELLENT t-shirt',
    id: '33',
    rating: 'LESS_THAN_EXCELLENT',
    product: tShirt,
  },
  {
    content: 'A EXCELLENT t-shirt',
    id: '34',
    rating: 'EXCELLENT',
    product: tShirt,
  },
];
