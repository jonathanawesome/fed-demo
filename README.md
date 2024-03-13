## Grafbase Federation Demo

This monorepo contains a federated graph composed of Products, Reviews, and Users subgraphs.

### Get started

1. Install dependencies: `pnpm i`
2. Start gateway + subgraphs: `pnpm dev`
3. Publish the products subgraph: `pnpm --filter products publish:dev`
4. Publish the reviews subgraph: `pnpm --filter reviews publish:dev`
5. Publish the users subgraph: `pnpm --filter users publish:dev`
6. Open Pathfinder and explore your graph: http://localhost:4000
