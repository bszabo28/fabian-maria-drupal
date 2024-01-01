/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
const templates = "./themes/custom/fabianmaria/**/*.twig";

module.exports = {
        content: ["./src/**/*.css", templates],
        theme: {
                extend: {
                        fontFamily: {
                                sans: [
                                        "Inter Variable",
                                        "Inter",
                                        ...defaultTheme.fontFamily.sans,
                                ],
                        },
                        colors: {
                                "fm-orange": "#f38a2e",
                                "fm-header-blue": "#283543",
                                "fm-banner-brown-1": "#0c0402",
                                "fm-banner-brown-2": "#887e75",
                        },
                },
        },

        plugins: [
                require("@tailwindcss/typography"),
        ],
};
