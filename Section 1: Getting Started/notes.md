# Next.js Cheat Sheet

## Introduction

### What is Next.js?

Next.js is the React framework designed to make the process of building production-ready React apps simpler and more efficient. It is fundamentally focused on enhancing the user interface.

```jsx
// Next.js uses the power of React to help you build your user interfaces
function HelloWorld() {
  return <div>Hello, world!</div>;
}
```

### Why use Next.js?

- **Full-stack Framework**: Unlike React which is just a JavaScript library focusing on building user interfaces, Next.js offers a full-stack framework solution, helping to resolve common issues encountered in React development more easily.
- **Built-in Features**: Next.js comes with built-in features such as routing, which eliminates the need for additional libraries that are usually required when working with React.
- **Production-Ready**: Next.js aims to solve issues that you will frequently encounter when building production-ready React apps, providing you with a robust solution for large-scale applications.

```jsx
// For instance, Next.js provides a Link component to make routing simpler
import Link from 'next/link';

function Navigation() {
  return (
    <nav>
      <Link href="/">Home</Link>
      <Link href="/about">About</Link>
    </nav>
  );
}
```

## Key Features

### Server-Side Page (Pre-)Rendering

#### **Built-in Server-side Rendering Support**

- **SEO and Initial Load Benefits**: Preparing content server-side, as opposed to client-side, enhances SEO and improves the initial load time.
- **Enhanced Data Reading**: Solves the issue of search engine crawlers being unable to read your data, a common problem when HTML code sent from server to client is practically empty.

```jsx
// In Next.js, you can easily fetch data server-side using `getServerSideProps`
export async function getServerSideProps(context) {
  const response = await fetch('https://api.example.com/data');
  const data = await response.json();

  return {
    props: { data },
  };
}

function Page({ data }) {
  return <div>Data: {JSON.stringify(data)}</div>;
}
```

#### **Server-Side Rendering**

- **Automatic Page Pre-Rendering**: Automates the process of pre-rendering pages to facilitate SEO and speed up the initial load time.
- **Blending Client-Side and Server-Side**: Allows for data fetching on the server and rendering finished pages, combining the best of both client and server-side rendering.

```jsx
// Automatic pre-rendering is handled by Next.js, saving you time and effort
function StaticPage() {
  return <div>Static content</div>;
}
```

### File-Based Routing

- **Illusory Multipage Effect**: Creates an illusion of having multiple pages for the user.
- **Code Efficiency**: Eliminates the need for extra code which is usually required when using npm packages like React Router, offering a more straightforward and less labor-intensive solution.

```jsx
// File-based routing is straightforward: the file structure mirrors the URL structure
// pages/index.js
function HomePage() {
  return <div>Welcome to the home page</div>;
}

// pages/about.js
function AboutPage() {
  return <div>About us</div>;
}
```

### Build Fullstack React Apps

#### **Fullstack Capabilities**

- **Backend Integration**: Easily integrates your own backend API into your React project using NodeJS code.
- **Backend Code Addition**: Facilitates the addition of backend (server-side) code to your Next.js/React apps, aiding in functions such as data storage and retrieval, and authentication.

```jsx
// With Next.js, it's simple to add backend logic to your React apps
// pages/api/hello.js
export default (req, res) => {
  res.status(200).json({ name: 'John Doe' });
};
```

## React and Next.js

- **Component-Based**: Both Next.js and React operate on a component-based structure, utilizing elements such as components, states, and props.
- **React Enhancement**: While building with Next.js, you will still be writing React code and using React features; Next.js simply enhances your React apps by offering additional features.

```jsx
// You'll still be using fundamental React concepts, like components and props, in Next.js
function Greeting({ name }) {
  return <div>Hello, {name}</div>;
}

// Usage
<Greeting name="World" />;
```
