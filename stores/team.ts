
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
    },
    {
        id: 'hurty',
        name: 'Adéla Hurtová',
        role: 'partnerships',
        img: '/img/team/hurty.jpg',
        width: 4000,
        height: 2667,
    },
    {
        id: 'marijanka',
        name: 'Marijana Brajdić',
        role: 'fun specialist',
        img: '/img/team/marijanka.jpg',
        width: 3363,
        height: 2246,
    },
    {
        id: 'joe',
        name: 'Joe Kolář',
        role: 'tech',
        img: '/img/team/joe.jpg',
        width: 1336,
        height: 892,
    },
    {
        id: 'hanka',
        name: 'Hanka Hálová',
        role: 'design',
        img: '/img/team/hanka.jpg',
        width: 3538,
        height: 2363,
    },
    {
        id: 'filip',
        name: 'Filip Wagner',
        role: 'finance',
        img: '/img/team/filip.jpg',
        width: 1280,
        height: 852,
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
