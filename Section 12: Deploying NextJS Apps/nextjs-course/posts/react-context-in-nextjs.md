---
slug: react-context-in-nextjs
title: Managing State with React Context in NextJS
image: react-context-in-nextjs.jpg
excerpt: A deep dive into using React Context for state management in NextJS applications.
date: '2024-01-20'
isFeatured: false
---

# Managing App-wide State with React Context in Next.js

React Context provides a way to pass data through the component tree without having to pass props down manually at every level. In a Next.js project, React Context can be particularly useful for managing global state, such as user authentication status, theme settings, or language preferences.

## Understanding React Context

React Context allows you to share values between components without explicitly passing a prop through every level of the tree. It's designed to share data that can be considered “global” for a tree of React components.

### Creating a Context

Start by creating a new Context. This is typically done in a separate file.

#### Example: Creating a Context

```js
// context/UserContext.js
import { createContext } from 'react';

const UserContext = createContext(null);

export default UserContext;
```

### Providing Context

Wrap your component tree with the Context Provider and pass the value you want to share.

#### Example: Using Context Provider in `_app.js`

```js
// pages/_app.js
import UserContext from '../context/UserContext';

function MyApp({ Component, pageProps }) {
  const user = { name: 'Jane Doe', loggedIn: true };

  return (
    <UserContext.Provider value={user}>
      <Component {...pageProps} />
    </UserContext.Provider>
  );
}

export default MyApp;
```

### Consuming Context

Use the `useContext` hook in your components to access the Context value.

#### Example: Consuming Context in a Component

```js
// components/Profile.js
import React, { useContext } from 'react';
import UserContext from '../context/UserContext';

function Profile() {
  const user = useContext(UserContext);

  return <div>{user.loggedIn ? `Hello, ${user.name}` : 'Not logged in'}</div>;
}
```

## Best Practices for Using Context

- **Scope**: Use Context for global data that many components may need, like theme, locale, or authentication.
- **Updating Context**: If you need to update the context value, consider pairing Context with useReducer or useState.
- **Performance**: Remember that consuming components will re-render when the Context value changes.

## Combining Context with Next.js Features

React Context works seamlessly with Next.js. You can combine Context with Next.js features like server-side rendering or static generation.

### Example: Fetching User Data in `getServerSideProps`

```js
// pages/index.js
export async function getServerSideProps() {
  const user = await fetchUserData();
  return { props: { user } };
}

// Use the fetched data as the initial context value in _app.js
```

## Conclusion

React Context in Next.js is a powerful pattern for managing global state and passing data throughout your application. By correctly leveraging Context, you can create more maintainable and scalable Next.js applications.
