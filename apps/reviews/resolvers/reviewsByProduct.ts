import { Resolver } from '@grafbase/generated';

import { reviewsData } from '../reviewsData';

const resolver: Resolver['Query.reviewsByProduct'] = (_parent, args, _context) => {
  // TODO: product needs to be a field on review
  const reviews = reviewsData.filter((review) => review.id === args.productId);
  return reviews;
};

export default resolver;
