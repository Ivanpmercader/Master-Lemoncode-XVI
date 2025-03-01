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
            '@components': '/src/components',
            '@config': '/src/config',
            '@contexts': '/src/contexts',
            '@hooks': '/src/hooks',
            '@layouts': '/src/layouts',
            '@models': '/src/models',
            '@pods': '/src/pods',
            '@router': '/src/router',
            '@scenes': '/src/scenes',
            '@services': '/src/services',
            '@styles': '/src/styles',
            '@utils': '/src/utils',
        },
      },
});