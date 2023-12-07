import React from 'react'

const AppStoreAxess = ({children}) => {
  const dataForRender = {/* your data here */};
  return (
    <>
      {typeof children === 'function' && children(dataForRender)}
    </>
  )
}

export default AppStoreAxess
