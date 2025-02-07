# Webpack Laboratory - Starter Configuration
React Application - Starter Guide

This project is a simple React-based application that serves with webpack. It includes modular components, SCSS styling, and environment-based configuration.

Features

- **Modular Design** – Reusable and well-structured components.
- **Environment Awareness** – Dynamically displays environment-based messages.
- **SCSS Styling** – Uses separate SCSS files for organized and maintainable styles.
- **Image Handling** – Supports importing and displaying static assets like logos.

## Installation

Ensure you have [Node.js](https://nodejs.org/) installed, then run:

```sh
npm install
```

## Usage

### Development Mode
To start the development server with hot module replacement:
```sh
npm run start
```
This runs Webpack Dev Server with the development configuration.

### Production Build
To generate an optimized production build:
```sh
npm run build:prod
```

### Type Checking
To run TypeScript type checks:
```sh
npm run type-check
```
Or continuously watch for type errors:
```sh
npm run type-check:watch
```

### Performance Analysis
To analyze bundle size and performance:
```sh
npm run build:perf
```
