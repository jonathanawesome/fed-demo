import { Resolver } from '@grafbase/generated';

import { usersData } from '../usersData';

const resolver: Resolver['Query.user'] = (_parent, args, _context) => {
  const user = usersData.find((user) => user.id === args.userId);
  return user;
};

export default resolver;
