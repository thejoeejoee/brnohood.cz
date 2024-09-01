
// ❯ identify public/img/team/*
// public/img/team/filip.jpg JPEG 1280x852 1280x852+0+0 8-bit sRGB 70010B 0.000u 0:00.001
// public/img/team/hanka.jpg JPEG 3538x2363 3538x2363+0+0 8-bit sRGB 1.20973MiB 0.000u 0:00.000
// public/img/team/hurty.jpg JPEG 4000x2667 4000x2667+0+0 8-bit sRGB 1.49112MiB 0.000u 0:00.000
// public/img/team/joe.jpg JPEG 1336x892 1336x892+0+0 8-bit sRGB 147627B 0.000u 0:00.000
// public/img/team/marijanka.jpg JPEG 3363x2246 3363x2246+0+0 8-bit sRGB 1.73595MiB 0.000u 0:00.000
// public/img/team/zuzka.jpg JPEG 4740x3160 4740x3160+0+0 8-bit sRGB 1.03555MiB 0.000u 0:00.000

const people: Person[] = [
    {
        id: 'zuzka',
        name: 'Zuzka Gregušková',
        role: 'project lead',
        img: '/img/team/zuzka.jpg',
        width: 4740,
        height: 3160,
        pictureClass: 'border-primary',
        perex: `
During her five-week Erasmus program in Denmark, Zuzka managed to arrange the removal of an illegal dump in her hometown.
Afterward, she dove into the volunteer organization ESN VUT Brno and revived its spirit after the pandemic and lockdowns.
Zuzka is a versatile fighter who can handle everything from project management and organizing parties for thousands of people to developing her own material from natural plastic.
Unicorns in any form bring her joy, and there's no need to guess her favorite color—the photo says it all.
`
    },
    {
        id: 'hurty',
        name: 'Adéla Hurtová',
        role: 'partnerships',
        img: '/img/team/hurty.jpg',
        width: 4000,
        height: 2667,
        pictureClass: 'border-secondary',
    },
    {
        id: 'marijanka',
        name: 'Marijana Brajdić',
        role: 'fun specialist',
        img: '/img/team/marijanka.jpg',
        width: 3363,
        height: 2246,
        pictureClass: 'border-tertiary',
        perex: `
Marijánka is an unstoppable force of creativity and problem-solving.
Whether it’s tackling unexpected challenges or finding solutions to issues no one else has noticed, she’s always a step ahead.
Her energy is boundless, much like her passion for acro yoga, where she’s not just the base but often the one leading the lessons.
With a wealth of experience, Marijánka has successfully organized everything from kids' camps built from the ground up to massive events that take over entire shopping malls.
If there’s a task at hand, you can bet she’s already got a plan—and a backup plan—for it.
`
    },
    {
        id: 'joe',
        name: 'Joe Kolář',
        role: 'tech',
        img: '/img/team/joe.jpg',
        width: 1336,
        height: 892,
        pictureClass: 'border-secondary',
        perex: `
Joe is an enthusiast day and night—except in the morning, when he's just glad to exist.
He pours his energy into constantly improving those IT things that no one else really understands, though he insists on not being labeled as tech support because he doesn't fix printers.
But that's not entirely true—he's happy to make an exception for his friends.
His favorite activities include cooking, rewatching Breaking Bad, and reminding everyone to use a password manager.
`
    },
    {
        id: 'hanka',
        name: 'Hanka Hálová',
        role: 'design',
        img: '/img/team/hanka.jpg',
        width: 3538,
        height: 2363,
        pictureClass: 'border-tertiary',
    },
    {
        id: 'filip',
        name: 'Filip Wagner',
        role: 'finance',
        img: '/img/team/filip.jpg',
        width: 1280,
        height: 852,
        pictureClass: 'border-primary',
    },
]

export const useTeamStore = defineStore('teamStore', {
    state: () => ({
        people,
        activePersonId: null as string | null,
    }),
    actions: {
        setActivePersonId(id: string) {
            this.activePersonId = id
        }
    }
})
