// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    app: {
        head: {
            titleTemplate: '%s | BRNOhood',
            meta: [
                {charset: 'utf-8'},
                {name: 'viewport', content: 'width=device-width, initial-scale=1'},
                {name: 'msapplication-TileColor', content: '#111827'},
                {name: 'theme-color', content: '#111827'},
            ],
            htmlAttrs: {
                lang: 'en',
            },
            script: [
                {
                    src: '//gc.zgo.at/count.js',
                    'data-goatcounter': 'https://stats.brnohood.cz/count',
                    'data-goatcounter-settings': JSON.stringify({
                        no_onload: true,
                        // see middlewares
                        // allow_local: true,
                    }),
                    // async: true,
                },
            ],
        },
    },

    site: {
        url: 'https://brnohood.cz',
        name: 'BRNOhood',
        description: 'Culture festival celebrating local international communities in Brno, their diversity and openness.',
        defaultLocale: 'en',
    },

    content: {
        // cannot mix document driven and dynamic routes
        // https://www.reddit.com/r/Nuxt/comments/14t1fg9/comment/l5gx4a3/
        documentDriven: false,
    },

    schemaOrg: {
        identity: {
            type: 'Event',
        }
    },

    nitro: {
        prerender: {
            routes: ['/sitemap.xml']
        }
    },

    devtools: {
        enabled: true
    },

    icon: {
        clientBundle: {
            // scan all components in the project and include icons
            scan: true,
            globInclude: [
                '**/*.vue',
                'content/**/*.*',
            ],
        },
    },

    modules: [
        '@nuxtjs/tailwindcss',
        '@hypernym/nuxt-anime',
        '@nuxtjs/google-fonts',
        'nuxt-og-image',
        '@nuxtjs/seo',
        '@nuxtjs/html-validator',
        '@nuxt/content',
        '@nuxt/icon',
        '@nuxt/image',
        '@pinia/nuxt'
    ],

    ogImage: {
        defaults: {
            // renderer: "chromium",
        },
        compatibility: {
            prerender: {
                // chromium: true,
            }
        }
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
