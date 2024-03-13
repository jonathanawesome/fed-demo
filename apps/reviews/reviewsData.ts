import { Schema } from '@grafbase/generated';

export const reviewsData: Schema['Review'][] = [
  // productType === BACKPACK
  {
    content: 'A POOR backpack',
    id: '10',
    rating: 'POOR',
  },
  {
    content: 'A LESS_THAN_NEUTRAL backpack',
    id: '11',
    rating: 'LESS_THAN_NEUTRAL',
  },
  {
    content: 'A NEUTRAL backpack',
    id: '12',
    rating: 'NEUTRAL',
  },
  {
    content: 'A LESS_THAN_EXCELLENT backpack',
    id: '13',
    rating: 'LESS_THAN_EXCELLENT',
  },
  {
    content: 'A EXCELLENT backpack',
    id: '14',
    rating: 'EXCELLENT',
  },

  // productType === HAT
  {
    content: 'A POOR hat',
    id: '20',
    rating: 'POOR',
  },
  {
    content: 'A LESS_THAN_NEUTRAL hat',
    id: '21',
    rating: 'LESS_THAN_NEUTRAL',
  },
  {
    content: 'A NEUTRAL hat',
    id: '22',
    rating: 'NEUTRAL',
  },
  {
    content: 'A LESS_THAN_EXCELLENT hat',
    id: '23',
    rating: 'LESS_THAN_EXCELLENT',
  },
  {
    content: 'A EXCELLENT hat',
    id: '24',
    rating: 'EXCELLENT',
  },

  // productType === T_SHIRT
  {
    content: 'A POOR t-shirt',
    id: '30',
    rating: 'POOR',
  },
  {
    content: 'A LESS_THAN_NEUTRAL t-shirt',
    id: '31',
    rating: 'LESS_THAN_NEUTRAL',
  },
  {
    content: 'A NEUTRAL t-shirt',
    id: '32',
    rating: 'NEUTRAL',
  },
  {
    content: 'A LESS_THAN_EXCELLENT t-shirt',
    id: '33',
    rating: 'LESS_THAN_EXCELLENT',
  },
  {
    content: 'A EXCELLENT t-shirt',
    id: '34',
    rating: 'EXCELLENT',
  },
];
