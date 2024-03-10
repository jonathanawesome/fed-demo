// This is a generated file. It should not be edited manually.
//
// You can decide to commit this file or add it to your `.gitignore`.
//
// By convention, this module is imported as `@grafbase/generated`. To make this syntax possible,
// add a `paths` entry to your `tsconfig.json`.
//
//  "compilerOptions": {
//    "paths": {
//      "@grafbase/generated": ["./grafbase/generated"]
//    }
//  }

export type Schema = {
  'Query': {
    __typename?: 'Query';
    review?: Schema['Review'];
    reviews?: Array<Schema['Review']>;
    reviewsByRating?: Array<Schema['Review']>;
  };
  'Rating': | 'POOR'| 'LESS_THAN_NEUTRAL'| 'NEUTRAL'| 'LESS_THAN_EXCELLENT'| 'EXCELLENT';
  'Review': {
    __typename?: 'Review';
    content: string;
    id: string;
    rating: Schema['Rating'];
  };
};

import { ResolverFn } from '@grafbase/sdk'

export type Resolver = {
  'Query.review': ResolverFn<Schema['Query'], { reviewId: string,  }, Schema['Review']>
  'Query.reviews': ResolverFn<Schema['Query'], {  }, Array<Schema['Review']>>
  'Query.reviewsByRating': ResolverFn<Schema['Query'], { rating: Schema['Rating'],  }, Array<Schema['Review']>>
}

