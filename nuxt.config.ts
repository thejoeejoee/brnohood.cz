// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    site: {
        url: 'https://brnohood.cz',
        name: 'BRNOhood',
        description: '...',
        defaultLocale: 'en',
    },

    schemaOrg: {
        identity: {
            type: 'Event',
        }
    },

    devtools: {
        enabled: true
    },

    modules: [
      '@nuxtjs/tailwindcss',
      '@hypernym/nuxt-anime',
      '@nuxtjs/google-fonts',
      'nuxt-og-image',
      '@nuxtjs/seo'
    ],

    site: {
        // production URL
        url: 'https://brnohood.cz',
    },

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
