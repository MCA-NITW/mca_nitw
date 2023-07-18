# MCA_NITW

This repository contains the code for the organization project built using the MERN (MongoDB, Express.js, React, and Node.js) stack.

## File Structure

The project follows a specific file structure to organize the codebase effectively. Here's an overview of the file structure:

```bash
├── server
│   ├── __tests__              # Contains test files for server-side code
│   ├── configs                # Configuration files for the server
│   ├── middleware             # Middleware functions for the server
│   ├── models                 # MongoDB database models
│   ├── routes                 # API routes
│   ├── services               # Business logic and service functions
│   └── utils                  # Utility functions for the server
└── client
    └── src
        ├── components          # Reusable UI components
        ├── pages               # React component pages
        ├── services            # Services for making API requests
        ├── styles              # CSS or styling files
        └── utils               # Utility functions for the frontend

```

### Server Folder

- `__tests__`: This folder contains the test files for the server-side code. It is recommended to write tests for critical functionality to ensure the server behaves as expected.

- `configs`: The `configs` folder holds the configuration files for the server. These files may include settings for the database connection, environment variables, logging, etc.

- `middleware`: Middleware functions are placed in this folder. Middleware functions are used to intercept and process incoming requests before they reach the route handlers. Examples of middleware include authentication, logging, error handling, etc.

- `models`: The `models` folder contains the MongoDB database models. Each model represents a collection in the database and defines the schema and behavior for that collection.

- `routes`: API routes are defined in the `routes` folder. These routes handle incoming requests, validate input, and call the appropriate service functions to process the request.

- `services`: Business logic and service functions reside in the `services` folder. These functions perform operations related to data processing, database interactions, and other business-specific tasks.

- `utils`: The `utils` folder contains utility functions that can be used across different parts of the server codebase. These functions provide common functionalities that are not specific to a single module.

### Client Folder

The `client` folder contains the frontend code for the project, built using React.

- `src`: The `src` folder is the main directory for the React app frontend.

  - `components`: Reusable UI components are stored in the `components` folder. These components can be used across different pages of the application.

  - `pages`: React component pages are placed in the `pages` folder. Each page typically represents a route or a specific view in the application.

  - `services`: The `services` folder contains service functions responsible for making API requests to the server. These functions handle communication with the backend and process the response.

  - `styles`: CSS or styling files are located in the `styles` folder. These files define the visual appearance of the application components.

  - `utils`: Utility functions that are specific to the frontend are stored in the `utils` folder. These functions provide common functionalities that are not tied to a specific component.

## Installation

To get started, follow these instructions to install the necessary dependencies.

### Prerequisites

Make sure you have the following software installed on your system:

- Node.js (version 20.0.0 +)
- npm (version 9.8.0 + )

### Steps

1. Clone the repository:

   ```bash
   git clone https://github.com/MCA-NITW/mca_nitw.git
   ```

2. Change into the project directory:

   ```bash
   cd mca_nitw
   ```

3. Install project dependencies:

   ```bash
   npm install
   npm run set-env
   ```

   This command will install the necessary dependencies for both the frontend and backend.

4. Start the development server: 
  
   I. For frontend and backend both
   ```bash
   npm run dev
   ```
   This command will start the development server for both the frontend and backend.

   II. For backend only
   ```bash
   npm backend-start
   ```
    This command will start the development server for backend.

   III. For backend only
   ```bash
    npm frontend-start
    ```
      This command will start the development server for frontend.

5. Open the application in your browser:

   ```bash
   http://localhost:3000
   ```

   The application should now be running in your browser.

## Contributing

Contributions are welcome! Please refer to the [contributing guidelines](CONTRIBUTING.md) for detailed instructions.

## License

This project is licensed under the [MIT License](LICENSE).
