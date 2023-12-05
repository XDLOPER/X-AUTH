export function basicIDGenerate(length = 8,IDList = []) {
    
    
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let id = '';
  
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      id += characters.charAt(randomIndex);
    }

    if(IDList.find((ID) => ID === id)){
      basicIDGenerate(length,IDList)
    }
  
    return id;
}