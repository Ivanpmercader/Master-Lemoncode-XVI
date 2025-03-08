# React Rick and Morty GraphQL App

This project is a React-based application that interacts with the Rick and Morty API using GraphQL. The application allows users to browse a list of characters, select one to view its details, and filter characters by name. It also includes pagination for easy navigation through the dataset.

## Features

- Fetch and display all characters using GraphQL queries.
- View detailed information about a selected character.
- Pagination support for browsing through character lists.
- Filtering characters by name.
- UI components styled using MUI (Material-UI).

## Installation

1. Clone the repository
2. Install dependencies:
   ```sh
   npm install
   ```

## Configuration

Modify the `vite.config.ts` file to API endpoints:

  ```ts
  server: {
    proxy: {
      '/graphql': 'https://rickandmortyapi.com'
    }
  }
  ```
## Running the Application

To start the development server:
```sh
npm run start
```

## Technologies Used

- **Frontend:** React, Vite, GraphQL (With Fetch), JavaScript
- **UI Components:** Material-UI (MUI)
