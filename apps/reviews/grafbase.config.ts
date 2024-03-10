import { config, graph, scalar } from '@grafbase/sdk';

const g = graph.Standalone({ subgraph: true });

const ratingEnum = g.enum('Rating', [
  'POOR',
  'LESS_THAN_NEUTRAL',
  'NEUTRAL',
  'LESS_THAN_EXCELLENT',
  'EXCELLENT',
]);

const review = g.type('Review', {
  content: g.string(),
  id: scalar.id(),
  rating: g.enumRef(ratingEnum),
});

g.query('review', {
  args: { reviewId: scalar.id() },
  returns: g.ref(review),
  resolver: 'review',
});

g.query('reviews', {
  returns: g.ref(review).list(),
  resolver: 'reviews',
});

g.query('reviewsByRating', {
  args: { rating: g.enumRef(ratingEnum) },
  returns: g.ref(review).list(),
  resolver: 'reviewsByRating',
});

export default config({
  graph: g,
  experimental: {
    codegen: true,
  },
});
