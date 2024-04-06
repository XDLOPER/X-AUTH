import { gender } from '../../consts/gender'

export function convertGenderLanguage(value){
    const englishGenderIndex = gender.indexOf(value)
    let englishGender

    switch (englishGenderIndex) {
        case 0:
            englishGender = 'female'
            break;
        case 1:
            englishGender = 'male'
            break;
        case 2:
            englishGender = 'private'
            break;
    
        default:
            englishGender = 'invalid gender'
            break;
    }
    return englishGender
}