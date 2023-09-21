# Repository Content

## Understanding File-based Routing

Get an in-depth understanding of file-based routing and how it differentiates from code-based routing.

## Static & Dynamic Routes

Understand the working of static and dynamic routes in file-based routing.

## Navigating Between Pages

Learn how to navigate between pages using file-based routing.

### File-based Routing Instead of Code-based Routing

Understand the simplicity and effectiveness of using file-based routing as opposed to code-based routing.

- No usage of react-router or in-code route definitions
- Utilizing React component files and allowing NextJS to determine the routes from the folder structure
  - Focus on the special `/pages` folder

### How File-based Routing Works

Get an insight into how file-based routing operates and the significance of each file in the structure.

<!-- Turn the following into a codeblock -->

| /pages
| index.js --> Main starting page ('/')
| about.js --> About page ('/about')
| -- /products
| -- index.js --> All products page ('/products')
| -- [id].js --> Product detail page ('/products/1234') 'Dynamic Path'

``` txt
  | /pages
  | index.js --> Main starting page ('/')
  | about.js --> About page ('/about')
  | -- /products
  | -- index.js --> All products page ('/products')
  | -- [id].js --> Product detail page ('/products/1234') 'Dynamic Path'
```

### File-based vs Code-based Routing

Understanding the comparative dynamics of file-based and code-based routing to make an informed choice.

#### File-based Routing (NextJS)

- No additional boilerplate code required
- Intuitive system that is easy to grasp
- The routes are influenced by the file and folder structure in the `pages` folder
- Navigation is facilitated through `<Link>` components and can also be done imperatively

#### Code-based Routing (React + react-router)

- Requires boilerplate setup in the code, involving components like `<Switch>`, `<Route>`, etc.
- Straightforward but introduces new components and concepts
- The setup of files and folders is not a determining factor
- Navigation also uses `<Link>` component and can be done imperatively
