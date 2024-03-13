import { Resolver } from '@grafbase/generated';

import { productsData } from '../productsData';

const resolver: Resolver['Query.products'] = (_parent, _args, _context) => {
  return productsData;
};

export default resolver;
