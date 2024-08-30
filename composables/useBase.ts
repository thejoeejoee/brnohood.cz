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
            description: '',
            theme: '#ffb202',
            colorMode: 'dark',
        }
    )
}
