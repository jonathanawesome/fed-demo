import { Resolver } from '@grafbase/generated';

import { reviewsData } from '../data';

const resolver: Resolver['Query.reviewsByRating'] = (_parent, args, _context) => {
  const reviews = reviewsData.filter((rev) => rev.rating === args.rating);
  return reviews;
};

export default resolver;
