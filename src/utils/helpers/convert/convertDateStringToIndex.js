import { moons } from '../../consts/date'

export function convertMoonStringToIndex(value){
    const moonsArray = moons.map(moon => moon.name)
    const moonIndex = moonsArray.indexOf(value)

    if(moonIndex === -1){
        return 'invalid value ( Not Match Moon )'
    }

    const formattedMoon = moonIndex < 9 ? "0" + (moonIndex + 1) : (moonIndex + 1).toString()
    return formattedMoon
}