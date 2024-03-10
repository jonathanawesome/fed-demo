import { Schema } from '@grafbase/generated';

export const reviewsData: Schema['Review'][] = [
  {
    content: 'A POOR review',
    id: '1',
    rating: 'POOR',
  },
  {
    content: 'A LESS_THAN_NEUTRAL review',
    id: '2',
    rating: 'LESS_THAN_NEUTRAL',
  },
  {
    content: 'A NEUTRAL review',
    id: '3',
    rating: 'NEUTRAL',
  },
  {
    content: 'A LESS_THAN_EXCELLENT review',
    id: '4',
    rating: 'LESS_THAN_EXCELLENT',
  },
  {
    content: 'A EXCELLENT review',
    id: '5',
    rating: 'EXCELLENT',
  },
];
