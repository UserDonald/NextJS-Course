# NextJS Cheat Sheet: Project - API Routes

## Module Content

1. **Add a Newsletter Registration Flow**

   - Implement an API route to handle email registrations.
   - Integrate a front-end component to capture and validate email addresses.
   - Ensure the API route saves the registered email to a database.

2. **Adding a Comments Feature**
   - Create an API route for adding comments to events, uniquely identified by an event ID.
   - Enable both POST (to add comments) and GET (to retrieve comments) methods on this API route.
   - Develop a mechanism to render comments based on the event ID on the front-end.

## Task Description

1. **Newsletter Registration API Route**

   - Develop an API route that allows for email registration.
   - Ensure this API route saves the incoming email data to a designated database.

2. **Email Registration Component**

   - Implement a front-end component to collect user emails.
   - Apply validation to the email input to ensure data integrity.
   - Use this component to POST the email data to the registration API route.

3. **Comments Feature for Events**
   - Add an API route for comments related to a specific event, identifiable by an event ID.
   - The comments API route should support:
     - POST method to add new comments.
     - GET method to retrieve existing comments.
   - On the front-end, render the comments dynamically based on the event ID.
