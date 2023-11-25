import country from 'country-list-js';

const countryFind = country.names()

const countryList = countryFind.map((value,index)=>{
    return country.findByName(value)
})


export {countryList,country}