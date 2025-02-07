# Webpack Laboratory - Starter Configuration

This project is a Webpack-based seed configuration designed to serve as a foundation for new projects. It includes support for JavaScript, TypeScript, SCSS, Babel, and React, making it a flexible starting point for modern web applications.

## Features

- **Webpack 5** for bundling and asset optimization
- **Babel** support for ESNext, React, and TypeScript
- **TypeScript** support with type checking
- **SCSS and CSS handling** via `sass-loader` and `mini-css-extract-plugin`
- **HTML templating** with `html-webpack-plugin`
- **Environment variable support** using `dotenv-webpack`
- **Development and production configurations**
- **Performance analysis** with `webpack-bundle-analyzer`

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
