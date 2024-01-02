# NextJS Cheat Sheet: Adding Backend Code with API Routes

## Overview of API Routes in Fullstack React

### What are API Routes?

API Routes in NextJS allow for the integration of backend functionalities directly within the React framework. They enable the creation of fullstack applications by handling backend processes such as user feedback submissions, newsletter sign-ups, and other server-side interactions.

### Understanding APIs

#### Definition of an API

- **API (Application Programming Interface):** A set of rules and definitions that allows different software entities to communicate with each other.
- **REST API (Representational State Transfer):** A specific form of API commonly used in web development, characterized by its stateless nature and use of standard HTTP methods.

#### Components of a REST API

- **URL/Path:** For instance, `my-domain.com/some-path`.
- **HTTP Method:** Such as `POST`, `GET`, etc.
- **Action:** Server-side code that is executed, which may vary depending on the HTTP method used.
- **Data Format:** Data is often transferred in JSON format (JavaScript Object Notation), e.g., `{"some-field" : "some-value"}`.

#### Interaction between Client and Server

In a typical REST API setup, the client (browser, mobile app, etc.) sends a request with data, and the server (REST API) responds with data.

### Utilizing API Routes in NextJS

#### Characteristics of API Routes

API Routes are unique URLs that do not return traditional web pages (HTML) but provide a REST API interface instead.

#### Examples of API Routes

- `/api/feedback`
  - **POST:** Sends a request to store feedback.
  - **GET:** Sends a request to retrieve feedback.
- `/api/feedback/f1`
  - **GET:** Sends a request to retrieve feedback by its ID.

#### Sending Requests

Requests to these API routes are typically made via JavaScript code (such as Ajax), rather than directly entering the URL in a browser.

### Working with Requests and Responses in NextJS

In NextJS, API Routes are powerful tools that extend the capabilities of your application beyond just serving pages, enabling a fullstack development experience within the React ecosystem.
