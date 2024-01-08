---
slug: data-fetching-in-nextjs
title: Data Fetching Techniques in NextJS
image: data-fetching-in-nextjs.jpg
excerpt: Master the art of data fetching in NextJS, covering static site generation, server-side rendering, and client-side fetching.
date: '2024-01-16'
isFeatured: false
---

# Data Fetching Techniques in Next.js

Next.js offers several methods for fetching data for your pages and components, allowing for a versatile and efficient way to handle data in your application. Understanding when and how to use these methods is crucial for building dynamic and fast web applications.

## Static Site Generation (SSG)

SSG is a method where pages are pre-rendered at build time. This is suitable for pages where the data doesn't change often.

### `getStaticProps`

Use `getStaticProps` to fetch data at build time. It’s executed on the server-side, and the data returned is used to pre-render the page.

#### Example: Fetching Data with `getStaticProps`

```js
// pages/index.js
export async function getStaticProps() {
  const data = await fetchData();
  return { props: { data } };
}

function HomePage({ data }) {
  // Render your page with data...
}
```

## Server-Side Rendering (SSR)

SSR is ideal for pages that require fresh data per request, like user-specific pages.

### `getServerSideProps`

Use `getServerSideProps` to fetch data on each request. It’s executed on the server-side for each incoming request.

#### Example: Fetching Data with `getServerSideProps`

```js
// pages/profile.js
export async function getServerSideProps(context) {
  const data = await fetchUserData(context.params.id);
  return { props: { data } };
}

function ProfilePage({ data }) {
  // Render your page with fresh data...
}
```

## Client-Side Data Fetching

Use client-side data fetching when you need to fetch data after the initial render or for data that changes frequently.

### Using React Hooks for Fetching Data

Utilize React hooks like `useState` and `useEffect` to fetch data on the client side.

#### Example: Client-Side Data Fetching

```js
// components/StockPrices.js
import { useState, useEffect } from 'react';

function StockPrices() {
  const [prices, setPrices] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch('https://api.example.com/stocks');
      const data = await response.json();
      setPrices(data);
    }

    fetchData();
  }, []);

  return (
    // Render your component with fetched data
  );
}
```

## Incremental Static Regeneration (ISR)

ISR allows you to update static content after you've built your site. Use `revalidate` in `getStaticProps` to update the cached pages at a specified interval.

### Example: ISR in Next.js

```js
// pages/posts.js
export async function getStaticProps() {
  const posts = await fetchPosts();
  return {
    props: { posts },
    revalidate: 10, // In seconds
  };
}

function Posts({ posts }) {
  // Render your page with posts...
}
```

## When to Use Each Method

- **Static Site Generation**: For pages where data doesn’t change frequently.
- **Server-Side Rendering**: For pages that need real-time data.
- **Client-Side Data Fetching**: For dynamic parts of the page that change frequently and are not crucial for SEO.
- **Incremental Static Regeneration**: For balancing between static generation and real-time data.

## Conclusion

Next.js provides a flexible set of tools for fetching data, allowing you to choose the most appropriate method for each part of your application. By leveraging these methods effectively, you can ensure your Next.js application is dynamic, fast, and user-friendly.
