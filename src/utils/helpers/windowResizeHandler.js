export function windowResizeHandler({
    minWidth,
    minHeight
}){
    const width = window.innerWidth
    const height = window.innerHeight

    if( (width && width <= minWidth) || (height && height <= minHeight)){

    }
    
    
}


document.addEventListener('resize', windowResizeHandler)