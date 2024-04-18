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
  'Product': {
    __typename?: 'Product';
    id: string;
    reviews?: Array<Schema['Review']>;
  };
  'Query': {
    __typename?: 'Query';
    hello?: string;
    goodbye?: string;
    review?: Schema['Review'];
    reviews?: Array<Schema['Review']>;
    reviewsByProduct?: Array<Schema['Review']>;
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
  'Product.reviews': ResolverFn<Schema['Product'], {  }, Array<Schema['Review']>>
  'Query.hello': ResolverFn<Schema['Query'], { name: string | null,  }, string>
  'Query.goodbye': ResolverFn<Schema['Query'], { name: string | null,  }, string>
  'Query.review': ResolverFn<Schema['Query'], { reviewId: string,  }, Schema['Review']>
  'Query.reviews': ResolverFn<Schema['Query'], {  }, Array<Schema['Review']>>
  'Query.reviewsByProduct': ResolverFn<Schema['Query'], { productId: string,  }, Array<Schema['Review']>>
}

