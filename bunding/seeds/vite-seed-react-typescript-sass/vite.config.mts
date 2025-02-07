import { defineConfig } from "vite";
import checker from "vite-plugin-checker";
import typesript from "@rollup/plugin-typescript"

export default defineConfig({
    plugins: [checker({ typescript: true })],
    build: {
        rollupOptions: {
            plugins: [
                typesript()
            ]
        }
    },
    resolve: {
        alias: {
            '@images': '/src/assets/images',
            '@config': '/src/config',
        },
      },
});