# What is Next.js? And why would you use it?

Next.js is a framework for building production-ready applications with React. Here we explore why you might choose Next.js for your React projects and delve into its key feature of server-side page pre-rendering.

## Overview

### React

- **Definition**: A JavaScript library focused solely on building user interfaces.
- **Core Concepts**:

  - **Components**: Modular and reusable UI units.
    ```jsx
    function Welcome(props) {
      return <h1>Hello, {props.name}</h1>;
    }
    ```
  - **States**: Variables which hold data and determine the component behavior.

    ```jsx
    class Counter extends React.Component {
      state = { count: 0 };

      render() {
        return <div>{this.state.count}</div>;
      }
    }
    ```

  - **Props**: Parameters passed to components to influence their behavior and rendering output.
    ```jsx
    function Welcome(props) {
      return <h1>Hello, {props.name}</h1>;
    }
    ```

### Next.js

- **Definition**: Enhances React by offering a feature-rich environment for developing large-scale applications.
- **Benefits**:

  - **Built-in Routing**:

    ```jsx
    import Link from 'next/link';

    function Home() {
      return (
        <div>
          Welcome to Next.js!
          <Link href="/about">About</Link>
        </div>
      );
    }
    ```

### Production Ready with Next.js

- **Features**:
  - **Core Features by Default**: Next.js comes with many features that help build production-ready apps, saving time and effort.
  - **Guidance**: Clear guidelines and documentation on how to use its features.

## Key Feature: Server-side Page (Pre-)Rendering

Next.js supports server-side rendering, enhancing SEO and improving load times. Let’s understand this concept in detail:

### Overview

- **React's Client-Side Rendering**:
  - **Traditional Approach**:
    ```jsx
    ReactDOM.render(<App />, document.getElementById('root'));
    ```

### Detailed Breakdown

- **Server-Side Rendering**:

  - **Next.js Solution**:

    ```jsx
    function Home({ data }) {
      return <div>Welcome to my website! Here is my data: {data}</div>;
    }

    export async function getServerSideProps() {
      const response = await fetch('https://api.example.com/data');
      const data = await response.json();

      return { props: { data } };
    }
    ```

- **Blending Client and Server-Side**:

  - **Fetching Data**:

    ```jsx
    export async function getStaticProps() {
      const res = await fetch('https://api.example.com/posts');
      const posts = await res.json();

      return {
        props: {
          posts,
        },
      };
    }
    ```
