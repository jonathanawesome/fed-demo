import { Resolver } from '@grafbase/generated';

import { reviewsData } from '../data';

const resolver: Resolver['Query.review'] = (_parent, args, _context) => {
  const review = reviewsData.find((rev) => rev.id === args.reviewId);
  return review;
};

export default resolver;
