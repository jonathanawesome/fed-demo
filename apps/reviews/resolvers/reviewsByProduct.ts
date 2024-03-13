import { Resolver } from '@grafbase/generated';

import { reviewsData } from '../reviewsData';

const resolver: Resolver['Query.reviewsByProduct'] = (parent, args, _context, _info) => {
  const reviews = reviewsData.filter((review) => {
    //@ts-ignore
    return review.product.id === (parent ? parent.id : args.productId);
  });
  return reviews;
};

export default resolver;
