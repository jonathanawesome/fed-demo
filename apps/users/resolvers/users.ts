import { Resolver } from '@grafbase/generated';

import { usersData } from '../usersData';

const resolver: Resolver['Query.users'] = (_parent, _args, _context) => {
  return usersData;
};

export default resolver;
