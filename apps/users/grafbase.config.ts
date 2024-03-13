import { config, graph, scalar } from '@grafbase/sdk';

const g = graph.Standalone({ subgraph: true });

const user = g.type('User', {
  id: scalar.id(),
  username: g.string(),
});

g.query('user', {
  args: { userId: scalar.id() },
  returns: g.ref(user),
  resolver: 'user',
});

g.query('users', {
  returns: g.ref(user).list(),
  resolver: 'users',
});

export default config({
  graph: g,
  auth: {
    rules: (rules) => {
      rules.public();
    },
  },
  experimental: {
    codegen: true,
  },
});
