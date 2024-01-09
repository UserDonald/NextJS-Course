# Module Content

This module delves into various deployment strategies for NextJS applications, ensuring you understand the best practices for configuring and deploying your projects effectively.

## Deployment Options

Explore different deployment methodologies, each tailored to specific project requirements and hosting environments.

### Standard Build

- **Command:** `next build`
- **Description:**
  - Generates optimized production bundles and a server-side application.
  - Requires a NodeJS server environment.
  - Supports pre-rendering of pages, but relies on a NodeJS server for API routes, server-side pages, and page revalidation.
- **Considerations:**
  - A re-deployment is necessary if there are code changes, or if you are not using revalidation and need updates to pages.

### Full Static Build

- **Command:** `next export`
- **Setup:**
  - Implement by adding a new script titled "export" that executes `next export`.
- **Description:**
  - Creates a completely static version of your application (HTML, CSS, JS).
  - Eliminates the need for a NodeJS server.
- **Limitations:**
  - Not suitable for applications that utilize API routes, server-side pages, or require page revalidation.
- **Considerations:**
  - Any changes in code or content necessitate a full re-deployment.

## Deployment Steps & Considerations

When preparing for deployment, it's crucial to follow a structured approach to ensure your application is optimized, secure, and functioning as expected. Here are the key steps and considerations:

1. **Optimization and Cleanup:**

   - Ensure that page metadata is accurately added.
   - Optimize your code for performance.
   - Remove any unnecessary dependencies to streamline your application.

2. **Environment Variables:**

   - Utilize environment variables for dynamic data such as database credentials and API keys. This enhances security and flexibility.

3. **Testing the Build:**

   - Perform a test build of your application.
   - Test the production-ready app locally or on a test server to validate its functionality and performance.

4. **Final Review and Deployment:**
   - Repeat the above steps as needed for thoroughness.
   - Proceed with deployment when you are confident that the application is fully ready.