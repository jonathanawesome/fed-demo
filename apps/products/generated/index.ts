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
    description: string;
    name: string;
    id: string;
    type: Schema['ProductType'];
  };
  'ProductType': | 'T_SHIRT'| 'BACKPACK'| 'HAT';
  'Query': {
    __typename?: 'Query';
    product?: Schema['Product'];
    products?: Array<Schema['Product']>;
  };
};

import { ResolverFn } from '@grafbase/sdk'

export type Resolver = {
  'Query.product': ResolverFn<Schema['Query'], { productId: string,  }, Schema['Product']>
  'Query.products': ResolverFn<Schema['Query'], {  }, Array<Schema['Product']>>
}

