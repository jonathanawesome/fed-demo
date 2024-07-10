import { config, graph } from '@grafbase/sdk';

const g = graph.Standalone({ subgraph: true });

const ratingEnum = g.enum('Rating', [
  'POOR',
  'LESS_THAN_NEUTRAL',
  'NEUTRAL',
  'LESS_THAN_EXCELLENT',
  'EXCELLENT',
]);

const review = g
  .type('Review', {
    content: g.string(),
    id: g.id(),
    rating: g.enumRef(ratingEnum),
  })
  .key('id');

g.type('Product', {
  id: g.id(),
  reviews: g.ref(review).list().resolver('reviewsByProduct'),
}).key('id');

g.query('review', {
  args: { reviewId: g.id() },
  returns: g.ref(review),
  resolver: 'review',
});

g.query('reviews', {
  returns: g.ref(review).list(),
  resolver: 'reviews',
});

g.query('reviewsByProduct', {
  args: { productId: g.id() },
  returns: g.ref(review).list(),
  resolver: 'reviewsByProduct',
});

export default config({
  graph: g,
  auth: {
    rules: (rules) => {
      rules.public();
    },
  },
  codegen: {
    enabled: true,
  },
});
