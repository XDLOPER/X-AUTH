export async function examplefetch(){
    return new Promise(resolve => {
      setTimeout(() => {
        resolve("hello Words!");
      }, 3000);
    });
}