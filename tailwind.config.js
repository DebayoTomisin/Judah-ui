/** @type {import('tailwindcss').Config} */
export default {
    jit: true,
    content: [
        "./src/**/*.{html,js, tsx, ts, jsx, cjs}",
        "./src/components/**/*.{tsx, ts, js, jsx, mdx}",
    ],
    theme: {
        extend: {},
    },
    plugins: [],
    corePlugins: {
        preflight: false,
    },
    prefix: "lib-",
};
