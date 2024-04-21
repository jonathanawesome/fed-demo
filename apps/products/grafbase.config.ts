import { config, graph } from '@grafbase/sdk';

// a cool comment

const g = graph.Standalone({ subgraph: true });

const productTypeEnum = g.enum('ProductType', ['BACKPACK', 'HAT', 'T_SHIRT']);

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
