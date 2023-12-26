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