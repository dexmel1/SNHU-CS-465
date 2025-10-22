# SNHU-CS-465 Full Stack Development I

## Architecture

### Compare and contrast the types of frontend development you used in your full stack project, including Express HTML, JavaScript, and the single-page application (SPA). 
The customer-facing site was built using Express.js and Handlebars, which generate HTML on the server side for quick load times and strong SEO. The admin portal was created as an Angular single-page application (SPA), providing a dynamic, client-driven interface with live data updates via API calls.

### Why did the backend use a NoSQL MongoDB database?
The backend used MongoDB because of its flexible, document-oriented structure that efficiently manages JSON-like data. It enabled faster iteration during development and simpler handling of trip and user data without predefined schemas.

## Functionality

### How is JSON different from Javascript and how does JSON tie together the frontend and backend development pieces?
JSON (JavaScript Object Notation) is a lightweight data-interchange format used to organize and transmit data between systems. While JavaScript is a programming language, JSON offers a standardized method for the frontend (Angular) and backend (Express/MongoDB) to communicate using structured data.

### Provide instances in the full stack process when you refactored code to improve functionality and efficiencies, and name the benefits that come from reusable user interface (UI) components.
Code was refactored to centralize API calls using shared Angular services, such as the service tripData, which improves readability and maintainability. Reusable UI components like trip lists, edit forms, and detail views reduce 

## Testing

### Methods for request and retrieval necessitate various types of API testing of endpoints, in addition to the difficulties of testing with added layers of security. Explain your understanding of methods, endpoints, and security in a full stack application.
Postman was used to test all CRUD operations (GET, POST, PUT, and DELETE) against the RESTful API endpoints. Each endpoint was verified to return the correct status codes, data format, and error handling behavior. After implementing JWT authentication, all admin routes required a valid token in the request header. This ensured that only authorized users could access or modify data, reflecting industry-standard best practices for securing REST APIs.

## Reflection

### How has this course helped you in reaching your professional goals? 
This course enhanced my understanding of full stack development and introduced me to the various layers of the MEAN architecture. I learned how frontend frameworks, server logic, and databases work together to provide a seamless user experience.

### What skills have you learned, developed, or mastered in this course to help you become a more marketable candidate in your career field?
I improved my skills in JavaScript, Node.js, Express, MongoDB, and Angular, while also learning about authentication, middleware, and UI design patterns. These skills directly increase my value as a developer and prepare me for real-world full-stack engineering roles. The exposure to security was especially valuable, as I had not implemented anything more than a password prior to this class.
