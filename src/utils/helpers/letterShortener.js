export function letterShortener(character,lenght,startPosition=0,dot=true){
    if(character.length >= lenght){

        const str = character.slice(0,lenght)
        return dot ? str + '...' : str
        
    }else{
        return character
    }
}