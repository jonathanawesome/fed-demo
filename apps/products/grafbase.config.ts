import { config, graph } from '@grafbase/sdk';

const g = graph.Standalone({ subgraph: true });

const productTypeEnum = g.enum('ProductType', ['T_SHIRT', 'BACKPACK', 'HAT']);

const product = g.type('Product', {
  description: g.string(),
  name: g.string(),
  id: g.id(),
  type: g.enumRef(productTypeEnum),
});

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
  experimental: {
    codegen: true,
  },
});
