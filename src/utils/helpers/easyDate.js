import { i18n } from "../language"



export function easyDate(date){
    const nowDate = new Date()
    const getDate = new Date(date)

    const timeDiffarent = nowDate - getDate


    const second = Math.floor(timeDiffarent / 1000)
    const minute = Math.floor(second / 60)
    const hour = Math.floor(minute / 60)
    const day = Math.floor(hour / 24)
    const month = Math.floor(day / 30)
    const year = Math.floor(month / 12)

    if (year > 0) {
        return `${year} ${i18n.t('time.yearAgo')}`;
    } else if (month > 0) {
        return `${month} ${i18n.t('time.monthAgo')}`;
    } else if (day > 0) {
        return `${day} ${i18n.t('time.dayAgo')}`;
    } else if (hour > 0) {
        return `${hour} ${i18n.t('time.hourAgo')}`;
    } else if (minute > 0) {
        return `${minute} ${i18n.t('time.minuteAgo')}`;
    } else {
        if(second < 0){
            return `${i18n.t('time.invalidValue')}`;
        }else{
            return `${second} ${i18n.t('time.secondAgo')}`;            
        }
    }
}