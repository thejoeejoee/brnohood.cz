// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    app: {
        head: {
            // title: 'BRNOhood',
            titleTemplate: 'BRNOhood',
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
