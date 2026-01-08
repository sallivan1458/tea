import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react-swc'
import svgr from "vite-plugin-svgr";
import * as path from 'path';
import { fileURLToPath } from 'url'

// const repoName = 'tea';
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

export default defineConfig({
    base: `/`,
    plugins: [
        react(),
        svgr(),
    ],
    server: {
        port: 5173,
    },
    resolve: {
        alias: {
            components: path.resolve(__dirname, './src/components'),
            styles: path.resolve(__dirname, './src/styles'),
            pages: path.resolve(__dirname, './src/pages'),
            bootstrap: path.resolve(__dirname, './node_modules/bootstrap'),
        },
    },
    build: {
        outDir: 'dist',
        sourcemap: false,
        minify: 'esbuild',
        rollupOptions: {
            output: {
                manualChunks: {
                    vendor: ['react', 'react-dom'],
                    mui: ['@mui/material', '@mui/icons-material'],
                    router: ['react-router', 'react-router-dom'],
                }
            }
        }
    }

})
