// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    devtools: { enabled: true },
    devServer: {
        host: "localhost",
        port: 3000,
    },
    app: {
        head: {
            title: 'Mota',
            link: [{ rel: "stylesheet", href: "./normalize.css" }],
        },
    },
    css: ["assets/styles/App.scss"],
});
