import { Resolver } from '@grafbase/generated';

import { productsData } from '../productsData';

const resolver: Resolver['Query.products'] = (_parent, _args, _context) => {
  console.log('Query.products resolver', {
    env: process.env,
    MY_TEST_DOPPLER_SECRET: process.env.MY_TEST_DOPPLER_SECRET,
  });
  return productsData;
};

export default resolver;
