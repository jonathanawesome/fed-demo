import { Schema } from '@grafbase/generated';

import { Schema as ProductsSchema } from '../products/generated';

import { backpack, hat, tShirt } from '../products/productsData';

type ReviewWithProduct = Schema['Review'] & { product: ProductsSchema['Product'] };

export const reviewsData: ReviewWithProduct[] = [
  // productType === BACKPACK
  {
    content: 'A POOR backpack',
    id: '10',
    rating: 'POOR',
    product: backpack as ProductsSchema['Product'],
  },
  {
    content: 'A LESS_THAN_NEUTRAL backpack',
    id: '11',
    rating: 'LESS_THAN_NEUTRAL',
    product: backpack as ProductsSchema['Product'],
  },
  {
    content: 'A NEUTRAL backpack',
    id: '12',
    rating: 'NEUTRAL',
    product: backpack as ProductsSchema['Product'],
  },
  {
    content: 'A LESS_THAN_EXCELLENT backpack',
    id: '13',
    rating: 'LESS_THAN_EXCELLENT',
    product: backpack as ProductsSchema['Product'],
  },
  {
    content: 'A EXCELLENT backpack',
    id: '14',
    rating: 'EXCELLENT',
    product: backpack as ProductsSchema['Product'],
  },

  // productType === HAT
  {
    content: 'A POOR hat',
    id: '20',
    rating: 'POOR',
    product: hat as ProductsSchema['Product'],
  },
  {
    content: 'A LESS_THAN_NEUTRAL hat',
    id: '21',
    rating: 'LESS_THAN_NEUTRAL',
    product: hat as ProductsSchema['Product'],
  },
  {
    content: 'A NEUTRAL hat',
    id: '22',
    rating: 'NEUTRAL',
    product: hat as ProductsSchema['Product'],
  },
  {
    content: 'A LESS_THAN_EXCELLENT hat',
    id: '23',
    rating: 'LESS_THAN_EXCELLENT',
    product: hat as ProductsSchema['Product'],
  },
  {
    content: 'A EXCELLENT hat',
    id: '24',
    rating: 'EXCELLENT',
    product: hat as ProductsSchema['Product'],
  },

  // productType === T_SHIRT
  {
    content: 'A POOR t-shirt',
    id: '30',
    rating: 'POOR',
    product: tShirt as ProductsSchema['Product'],
  },
  {
    content: 'A LESS_THAN_NEUTRAL t-shirt',
    id: '31',
    rating: 'LESS_THAN_NEUTRAL',
    product: tShirt as ProductsSchema['Product'],
  },
  {
    content: 'A NEUTRAL t-shirt',
    id: '32',
    rating: 'NEUTRAL',
    product: tShirt as ProductsSchema['Product'],
  },
  {
    content: 'A LESS_THAN_EXCELLENT t-shirt',
    id: '33',
    rating: 'LESS_THAN_EXCELLENT',
    product: tShirt as ProductsSchema['Product'],
  },
  {
    content: 'A EXCELLENT t-shirt',
    id: '34',
    rating: 'EXCELLENT',
    product: tShirt as ProductsSchema['Product'],
  },
];
