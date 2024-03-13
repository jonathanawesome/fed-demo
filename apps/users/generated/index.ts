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
    user?: Schema['User'];
    users?: Array<Schema['User']>;
  };
  'User': {
    __typename?: 'User';
    id: string;
    username: string;
  };
};

import { ResolverFn } from '@grafbase/sdk'

export type Resolver = {
  'Query.user': ResolverFn<Schema['Query'], { userId: string,  }, Schema['User']>
  'Query.users': ResolverFn<Schema['Query'], {  }, Array<Schema['User']>>
}

