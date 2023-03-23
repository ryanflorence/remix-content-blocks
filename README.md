# Content Blocks in Remix

```sh
npm i
NODE_ENV=development remix serve
```

## Use Case

Data driven, dynamically imported components. Useful for social media style feeds, CMS content blocks, etc. You don't know which components to render until you've fetched data, but you don't want to include every component in client side bundles because you could have hundreds.

## Demo implementation

- Root loader returns a list of "content blocks" coupled to components
- Components are dynamically imported with React.lazy

## Problems

- With `<Suspense>` around content blocks, SSR sends suspense fallbacks instead of the actual components
- Without `<Suspense>` around content blocks, SSR sends full HTML but hydration fails

How do we get both a full SSR but also await the lazy components before hydration? Will using `startTransition` in React Router instead of `useSyncExternalStore` do that for us?
