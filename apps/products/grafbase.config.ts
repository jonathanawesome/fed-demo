import { config, graph } from '@grafbase/sdk';

const g = graph.Standalone({ subgraph: true });

const productTypeEnum = g.enum('ProductType', ['BACKPACK', 'HAT', 'T_SHIRT']);

// const review = g
//   .type('Review', {
//     content: g.string(),
//     id: scalar.id(),
//     rating: g.enumRef(ratingEnum),
//     // product: g.ref(product),
//   })
//   .key('id');

// g.type('Product', {
//   id: scalar.id(),
//   reviews: g.ref(review).list().resolver('reviewsByProduct'),
// }).key('id');

const product = g
  .type('Product', {
    description: g.string(),
    name: g.string(),
    id: g.id(),
    type: g.enumRef(productTypeEnum),
  })
  .key('id');

g.type('Review', {
  id: g.id(),
  product: g.ref(product).resolver('product'),
}).key('id');

g.query('product', {
  args: { productId: g.id() },
  returns: g.ref(product),
  resolver: 'product',
});

g.query('products', {
  returns: g.ref(product).list(),
  resolver: 'products',
});

export default config({
  graph: g,
  auth: {
    rules: (rules) => {
      rules.public();
    },
  },
  experimental: {
    codegen: true,
  },
});
