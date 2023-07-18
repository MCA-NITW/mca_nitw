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

1. Creating your branch:

    I. For Organization Members:
    
      - **Branch Creation:**
          As an organization member, when working on a new feature or task, you should create a new branch from the "develop" branch. The branch name should be in the format `feature-` where `<description>` represents a short description of the task or feature you are working on. For example, if you are adding a login feature, the branch name could be `feature-login`.
          
      - **Code Implementation:**
          Implement the necessary changes and new features on your created branch. Make sure to adhere to the organization's coding standards and best practices.
          
      - **Code Testing:**
          Thoroughly test your changes on the branch to ensure that they work as expected and do not introduce any bugs or issues.
          
      - **Code Review:**
          If required by the organization's development process, request a code review from your peers to ensure code quality and adherence to project guidelines.
          
      - **Pull Request Creation:**
          Once you are confident that your code is complete and tested, create a pull request to merge your changes from the `feature-*` branch into the `develop` branch. Clearly explain the purpose and scope of the changes in the pull request description.
    
    II. For Outside Collaborators:
    
      - **Clone the Repository:**
          As an outside collaborator, you first need to clone the repository containing the project. This will give you a local copy of the codebase to work with.
          
      - **Create a New Branch:**
          After cloning, create a new branch from the `develop` branch to work on your specific task or feature. The branch name should also follow the format `feature-` where `<description>` describes the purpose of your changes.
          
      - **Implement Changes:**
          Proceed with implementing the necessary code changes or new features on your branch. Ensure your modifications align with the project's guidelines and meet the intended functionality.
          
      - **Test Your Changes:**
          Thoroughly test the code changes you made to verify that they work as expected and do not introduce any errors.
          
      - **Create a Pull Request:**
          Once your changes are ready, create a pull request to propose merging your branch into the `develop` branch. Provide a clear and detailed explanation of the changes you made, the reasoning behind them, and any relevant context that might help with the review process.
          
      - **Address Feedback:**
          Be responsive to any feedback or comments provided during the pull request review. Make necessary adjustments and improvements based on the feedback before your changes can be merged into the main project.


3. Change into the project directory:

   ```bash
   cd mca_nitw
   ```

4. Install project dependencies:

   ```bash
   npm install
   npm run set-env
   ```

   This command will install the necessary dependencies for both the frontend and backend.

5. Start the development server: 
  
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

6. Open the application in your browser:

   ```bash
   http://localhost:3000
   ```

   The application should now be running in your browser.

## Contributing

Contributions are welcome! Please refer to the [contributing guidelines](CONTRIBUTING.md) for detailed instructions.

## License

This project is licensed under the [MIT License](LICENSE).
