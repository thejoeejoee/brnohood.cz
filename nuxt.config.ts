// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    devtools: {
        enabled: true
    },

    modules: [
        '@nuxtjs/tailwindcss',
        '@hypernym/nuxt-anime',
        '@nuxtjs/google-fonts',
    ],

    experimental: {
        viewTransition: true
    },

    googleFonts: {
        preload: true,
        families: {
            Manrope: [
                800,
            ],
            "Space Grotesk": [700],
        }
    },

    compatibilityDate: "2024-08-25"
})
