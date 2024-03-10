import { Resolver } from '@grafbase/generated';

import { reviewsData } from '../data';

const resolver: Resolver['Query.reviews'] = (_parent, _args, _context) => {
  return reviewsData;
};

export default resolver;
