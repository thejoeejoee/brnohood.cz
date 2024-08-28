// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    app: {
        head: {
            titleTemplate: 'BRNOhood',
            meta: [
                { charset: 'utf-8' },
                { name: 'viewport', content: 'width=device-width, initial-scale=1' },
                { name: 'msapplication-TileColor', content: '#111827' },
                { name: 'theme-color', content: '#111827' },
            ],
        }
    },

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
