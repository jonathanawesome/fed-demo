import { Resolver } from '@grafbase/generated';

import { productsData } from '../productsData';

const resolver: Resolver['Query.product'] = (_parent, args, _context) => {
  const product = productsData.find((product) => product.id === args.productId);
  return product;
};

export default resolver;
