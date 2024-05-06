export function sentenceCutter(sentence,lenght=15){
    if(sentence.length >= lenght){
        return sentence.slice(0,lenght+1) + " " + "..."
    }else{
        return sentence
    }
}