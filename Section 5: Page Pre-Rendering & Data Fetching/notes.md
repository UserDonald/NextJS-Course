# Repository Content

## Page Pre-Rendering

### Overview

- **NextJS and Pre-Rendering**: In NextJS, accessing a route like `/some-route` automatically serves a pre-rendered page.
- **SEO Benefits**: Pre-rendering enhances Search Engine Optimization (SEO) by ensuring content is available upon initial page load.
- **Hydration with React**: Beyond HTML and CSS, these pre-rendered pages become interactive through React code hydration once they are loaded.
- **Initial Load Focus**: It's important to note that this rendering process primarily affects the initial load or the first hydration cycle of the page.

## Two Forms of Pre-Rendering

1. **Static Generation**
2. **Server-Side Rendering**

### Static Generation

#### Process

- **Pre-generation of Pages**: Here, pages are pre-generated with server-side data during the build process.
- **Caching and Serving**: These pre-built pages can be cached by the server or a Content Delivery Network (CDN), ensuring quick delivery.
  - This implies that users receive pages with pre-rendered content, not empty templates.

#### Usage

- **`getStaticProps` Function**:
  ```javascript
  export async function getStaticProps(context) {
    // Your code here
  }
  ```
- **Asynchronous Nature**: This function returns a promise, allowing the use of `await`.
- **Server-Side Execution**: Unlike client-side code, the code within `getStaticProps` runs server-side and is not visible to the client.

# Incremental Static Generation

Incremental Static Generation (ISG) combines the benefits of static generation with the ability to keep the generated content up to date. This method is particularly useful for pages that require frequent updates.

## Key Concepts

- **Starting Point**: ISG begins by serving a pre-generated page as the baseline.
- **Re-generation Policy**: The page can be set to re-generate on each request, but it's controlled by a specified maximum frequency, commonly referred to as a "stale time."
- **Conditional Page Serving**:
  - If a page update is not yet due (according to the stale time), the current "old" version of the page is served.
  - If an update is required, ISG will generate a "new" version of the page, store it, and then serve this updated version to subsequent requests.

### Implementation Example

```javascript
export async function getStaticProps() {
  //... data fetching and other logic for regeneration
  return {
    props: {
      //... your props
    },
    revalidate: 10, // time in seconds to revalidate the data
  };
}
```

# Pre-Generated Paths (Routes)

Handling dynamic pages in Next.js, such as those with file names like `[id].js`, involves two key considerations. Not only do you need the data for rendering the page, but you must also determine which specific `[id]` values are valid and can be rendered as individual pages.

## Dynamic Page Generation

- **Understanding Dynamic IDs**: For dynamic pages, the list of possible `[id]` values must be known in advance to pre-generate each specific instance of the page.
- **Pre-Generation of Instances**: Pages corresponding to multiple `[id]` values (e.g., `id = 1`, `id = 2`, and so on) are pre-generated to allow for immediate access upon request.

### Example: Dynamic Route Handling

```javascript
export async function getStaticPaths() {
  return {
    paths: [
      { params: { id: '1' } },
      { params: { id: '2' } },
      // ...additional paths with other `id` values
    ],
    fallback: false // can be set to 'blocking' or 'true' for different handling strategies
  };
}

export async function getStaticProps({ params }) {
  // Fetch data based on `id` and pass to the page as props
  const data = fetchDataBasedOnId(params.id);
  return {
    props: {
      ...data
    }
  };
}
```