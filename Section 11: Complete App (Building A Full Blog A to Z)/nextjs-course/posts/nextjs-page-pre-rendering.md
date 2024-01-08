---
slug: nextjs-page-pre-rendering
title: Page Pre-Rendering in NextJS
image: nextjs-page-pre-rendering.jpg
excerpt: Explore the benefits and methods of pre-rendering pages in NextJS, from static generation to incremental static generation.
date: '2024-01-14'
isFeatured: false
---

# Page Pre-Rendering in Next.js

Pre-rendering is a key feature of Next.js that allows pages to be rendered to HTML at build time (Static Generation) or at request time (Server-Side Rendering). This improves performance and SEO by sending a fully rendered page to the client.

## Understanding Pre-Rendering

Next.js by default pre-renders every page in the application. This means that Next.js generates HTML for each page in advance, instead of having it all done by client-side JavaScript.

### Static Generation (SG)

With Static Generation, the HTML is generated at build time and will be reused on each request. It's the recommended method to pre-render pages whenever possible.

#### Example: Static Generation with `getStaticProps`

```jsx
// pages/index.js
export async function getStaticProps() {
  // Fetch data at build time
  const data = await fetchData();
  return { props: { data } };
}

function Home({ data }) {
  // Render data...
}
```

### Server-Side Rendering (SSR)

Server-Side Rendering is the approach of rendering pages on-demand, at request time. It's useful for pages that need to display frequently updated data, or for pages that are personalized for each user.

#### Example: Server-Side Rendering with `getServerSideProps`

```jsx
// pages/posts/[id].js
export async function getServerSideProps(context) {
  // Fetch data for each request
  const data = await fetchData(context.params.id);
  return { props: { data } };
}

function Post({ data }) {
  // Render data...
}
```

## When to Use Pre-Rendering

Use pre-rendering for pages that:

- Can be generated ahead of a user's request.
- Do not require real-time data.
- Need to be indexed by search engines.

## Incremental Static Regeneration

Incremental Static Regeneration (ISR) allows you to update static content after you've built your site. This means you can retain the benefits of static while still keeping the pages fresh and up-to-date.

### Example: ISR with `revalidate`

```jsx
// pages/products.js
export async function getStaticProps() {
  const products = await loadProducts();
  return {
    props: {
      products,
    },
    // Next.js will attempt to re-generate the page:
    // - When a request comes in
    // - At most once every 10 seconds
    revalidate: 10, // In seconds
  };
}

function Products({ products }) {
  // Render products...
}
```

## Benefits of Pre-Rendering

- **Performance**: Pre-rendered pages load faster because the HTML is ready to be served immediately.
- **SEO**: Search engines can crawl the site more effectively when the content is pre-rendered.
- **Consistency**: Users get a consistently fast experience across all pre-rendered pages.

## Conclusion

Next.js's pre-rendering features offer a powerful set of tools for optimizing your application. Whether you choose Static Generation or Server-Side Rendering, you can tailor the rendering strategy to each page's needs, ensuring the best performance and user experience.
