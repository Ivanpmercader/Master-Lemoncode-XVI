### 1. **Starting the Project**
To begin, we initialize the project and generate the `package.json`. Then, we install the necessary dependencies for Vite, React, and TypeScript by running the following commands:

- Run `npm init -y` to initialize the project and create `package.json`.
- Install Vite, TypeScript with `npm install vite typescript --save-dev`.
- Install React with `npm install react react-dom --save` 
- For use React, install too this plugin. `npm install @vitejs/plugin-react --save-dev`

### 2. **Adding Sass Support**
Next, we integrate Sass into the project by installing the required Sass package. This allows us to use SCSS syntax:

- Install Sass by running `npm install sass --save-dev`.

### 3. **Setting Up TypeScript**
Now, we need to set up TypeScript:
- Install the TypeScript types for React using `npm install @types/react @types/react-dom --save-dev `.
- Create a `tsconfig.json` file to configure TypeScript, enabling JSX, strict type checking, and path aliases for cleaner imports.

### 4. **Validating TypeScript with `vite-plugin-checker`**
We want to ensure TypeScript is properly validated during development. To achieve this, we install the `vite-plugin-checker` plugin:
- Install the plugin with `npm install vite-plugin-checker --save-dev`.
- In the `vite.config.mts` file, configure the plugin to validate TypeScript code:
  ```js
  import Checker from 'vite-plugin-checker';

  export default {
    plugins: [
      Checker({ typescript: true })
    ]
  }
  ```

### 5. **Environment Variables**
Vite makes handling environment variables easy. First, create `.env` file to have the base schemes for both development and production environments:

- In the `.env` file, add variables empty
- In the `.env.development` file, add the development variables (e.g., `VITE_API_URL=https://development-url.com/api`).
- In the `.env.production` file, add the production variables (e.g., `VITE_API_URL=https://production-url.com/api`).

Additionally, define TypeScript types for environment variables by creating a `vite-env.d.ts` file in a `config` folder:
```ts
interface ImportMetaEnv {
  VITE_API_URL: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
```

Now we can create the config.ts file to sanitize or apply transformations to these variables

### 6. **Configuring TypeScript Aliases**
To make imports cleaner, we set up path aliases:
- In `tsconfig.json`, configure the alias under `compilerOptions.paths` (e.g., `@config/*: ["./src/config/*"]`).
- In `vite.config.ts`, add the alias configuration for Vite:
  ```js
  import { defineConfig } from 'vite';

  export default defineConfig({
    resolve: {
        alias: {
            '@images': '/src/assets/img',
            '@config': '/src/config',
        },
    }
  });
  ```

### 7. **Project Structure**
After completing these steps, your project structure should look like this:
- Configuration files like `tsconfig.json` and `vite.config.ts`.
- A `config/` folder for custom TypeScript type definitions like `vite-env.d.ts` and sanitized env variables with config.ts.
- `.env`, `env.developtment`, and `.env.production` files for environment-specific variables.
- `src/` folder for your application code.
- A `components` folder for custom React components like `hello.tsx`
- A `assets` folder for statics resources
- Aditional folders with contexts, hooks, pages...is prepared for when the project is developed 

### 8. Prepare to build
- Install rollup puglin typescript and tslib `npm install @rollup/plugin-typescript tslib --save-dev`
- Config vite.config.ts

```js
   import typesript from "@rollup/plugin-typescript"
    ...
    export default defineConfig({
        ...
        build: {
            rollupOptions: {
                plugins: [
                    typescript()
                ]
            },
        }
    })
```
- Delete sourcemap: true in tsconfig.json

With this configuration if we have an error in code, the build stop and show the problem.


### 9. **Running the Project**
Once everything is set up, you can start the development server:
- Run `npm run start` to start Vite’s development server.
- Or `npm run build` to exect a build for production

Vite will automatically pick up the configurations, and the project will be ready with TypeScript, Sass, React and environment variables.