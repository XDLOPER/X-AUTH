import i18next from "i18next"

export const moons = [
    {
        value:1,
        title:i18next.t('calendar.january'),
        day:31
    },
    {
        value:2,
        title:i18next.t('calendar.february'),
        day:[28,29]
    },
    {
        value:3,
        title:i18next.t('calendar.march'),
        day:31
    },
    {
        value:4,
        title:i18next.t('calendar.april'),
        day:30
    },
    {
        value:5,
        title:i18next.t('calendar.may'),
        day:31
    },
    {
        value:6,
        title:i18next.t('calendar.june'),
        day:30
    },
    {
        value:7,
        title:i18next.t('calendar.july'),
        day:31
    },
    {
        value:8,
        title:i18next.t('calendar.august'),
        day:31
    },
    {
        value:9,
        title:i18next.t('calendar.september'),
        day:30
    },
    {
        value:10,
        title:i18next.t('calendar.october'),
        day:31
    },
    {
        value:11,
        title:i18next.t('calendar.november'),
        day:30
    },
    {
        value:12,
        title:i18next.t('calendar.desember'),
        day:31
    },
]

export let years = []
export let days = []

for (let i = 1; i <= 31;i++){
    days.push({
        value:i,
        title:i
    })
}

for (let yearCycle = (new Date().getUTCFullYear()) -150; yearCycle <= (new Date().getUTCFullYear()); yearCycle++) {
    years.push({
        value:yearCycle,
        title:yearCycle
    })
} 
