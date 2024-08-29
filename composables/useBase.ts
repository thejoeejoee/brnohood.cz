export default function () {
    useHead({
        titleTemplate: (titleChunk) => {
            return titleChunk ? `${titleChunk} | BRNOhood` : 'BRNOhood';
        }
    })

    defineOgImageComponent(
        'Default',
        {
            title: 'BRNOhood.cz',
            // description: '...',
            // theme: '#ffb202',
            // colorMode: 'dark',
        }
    )
}
