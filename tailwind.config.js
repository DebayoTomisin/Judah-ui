/** @type {import('tailwindcss').Config} */
export default {
    jit: true,
    content: [
        "./src/**/*.{html,js, tsx, ts, jsx, cjs}",
        "./src/components/**/*.{tsx, ts, js, jsx, mdx}",
    ],
    theme: {
        extend: {
            backgroundImage: {
                "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
                "gradient-conic":
                    "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
            },
            backgroundColor: {
                "reed-purple": "#4F46E5",
            },
            colors: {
                "reed-purple": "#4F46E5",
                "reed-grey-1": "#333333",
            },
            borderWidth: {
                1: "1px",
            },
            borderColor: {
                "custom-purple": "#646cff",
            },
        },
    },
    plugins: [],
    corePlugins: {
        preflight: false,
    },
    prefix: "lib-",
};
