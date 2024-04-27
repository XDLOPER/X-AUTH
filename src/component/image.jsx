import React,{forwardRef} from 'react'

const Image = forwardRef(({ alt='' ,src, ...props },ref) => {
  return (
    <>
      <img ref={ref} src={src} alt={alt} className='image' {...props}/>
    </>
  )
})

export default Image
 