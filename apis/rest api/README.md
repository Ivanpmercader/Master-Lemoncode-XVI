# React Rick and Morty API App

This project is a React-based application that interacts with the Rick and Morty API using JavaScript's `fetch` method. The application is structured following a REST API architecture and includes both a frontend and a backend. The configuration for API requests can be modified in the `vite.config.ts` file to switch between two different setups:

- **Exercise 1:** Uses the public Rick and Morty API to show characters and character detail.
- **Exercise 2:** Uses a local server as a proxy for the API to show mock characters, character detail, add best sentence and edit character.

## Features

- Fetch and display characters collection from the Rick and Morty API.
- Organized following RESTful API principles. (Not all CRUD is completed)
- Dynamic configuration via `vite.config.ts`.
- Frontend developed with React
- Vite configured to proxy API requests locally when needed.

## Installation

1. Clone the repository
2. Install dependencies:
   ```sh
   npm install
   ```

## Configuration

Modify the `vite.config.ts` file to switch between API endpoints:

- **Exercise 1 (Public API):**
  ```ts
  server: {
    proxy: {
      '/api': 'https://rickandmortyapi.com'
    }
  }
  ```

- **Exercise 2 (Local Server):**
  ```ts
  server: {
    proxy: {
      '/api': 'http://localhost:3000'
    }
  }
  ```

## Running the Application

To start the development server:
```sh
npm run start
```

## Technologies Used

- **Frontend:** React, Vite, JavaScript (Fetch API)
- **Backend:** Node.js
