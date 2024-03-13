import { Resolver } from '@grafbase/generated';

import { reviewsData } from '../reviewsData';

const resolver: Resolver['Query.review'] = (_parent, args, _context) => {
  const review = reviewsData.find((review) => review.id === args.reviewId);
  return review;
};

export default resolver;
