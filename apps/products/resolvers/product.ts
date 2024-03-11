import { Resolver } from '@grafbase/generated';

import { productsData } from '../data';

const resolver: Resolver['Query.product'] = (_parent, args, _context) => {
  const product = productsData.find((rev) => rev.id === args.productId);
  return product;
};

export default resolver;
