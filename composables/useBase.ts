export default function () {
    useHead({
        titleTemplate: (titleChunk) => {
            return titleChunk ? `${titleChunk} | BRNOhood` : 'BRNOhood';
        }
    })

    defineOgImageComponent(
        'NuxtSeo',
        {
            title: 'BRNOhood.cz',
            description: 'Cultural festival celebrating Brno\'s local international communities, showcasing their diversity and openness.',
            theme: '#ffb202',
            colorMode: 'dark',
        }
    )
}
