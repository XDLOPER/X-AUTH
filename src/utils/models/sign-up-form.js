import * as date from '../consts/date'
import {gender} from '../consts/gender'

export const initialValue = {
    // step 1
    name:'',
    surname:'',
    date:{
      day:date.days[0],
      moon:date.moons[0].name,
      year:date.years[date.years.length -1]
    },
    gender:gender[0],

    // step 2
    username:'',
    email:'',
    password:'',
    rePassword: '',

    // step 5
    contract:{
      infoCheck1:false,
      infoCheck2:false,
      infoCheck3:false,
    }

}