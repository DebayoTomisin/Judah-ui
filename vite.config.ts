import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import { resolve } from "path";
import { peerDependencies, dependencies } from "./package.json";

import dts from "vite-plugin-dts";
import tsConfigPaths from "vite-tsconfig-paths";

// https://vitejs.dev/config/
export default defineConfig({
    resolve: {
        alias: {
            "@": resolve(__dirname, "src"),
        },
    },

    build: {
        lib: {
            entry: resolve(__dirname, "src/components/index.ts"),
            name: "judahui",
            formats: ["es", "cjs", "iife", "umd"],
            fileName: "judahui",
        },
        rollupOptions: {
            external: [
                ...Object.keys(peerDependencies),
                ...Object.keys(dependencies),
            ],
            output: {
                globals: {
                    react: "React",
                    "react-dom": "ReactDOM",
                },
            },
        },
        target: "esnext",
        sourcemap: true,
    },
    plugins: [
        react({
            jsxRuntime: "classic",
        }),
        tsConfigPaths(),
        dts({ include: ["src/components/"] }),
    ],
});
