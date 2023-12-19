export const days = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31]
export const moons = [

    {name:'ocak',day:31},
    {name:'şubat',day:[28,29]},
    {name:'mart',day:31},
    {name:'nisan',day:30},
    {name:'mayıs',day:31},
    {name:'haziran',day:30},
    {name:'temmuz',day:31},
    {name:'ağustos',day:31},
    {name:'eylül',day:30},
    {name:'ekim',day:31},
    {name:'kasım',day:30},
    {name:'aralık',day:31},

]
export let years = []

for (let yearCycle = (new Date().getUTCFullYear()) -150; yearCycle <= (new Date().getUTCFullYear()); yearCycle++) {
    years.push(yearCycle)
} 
