import React from 'react'

const AtomusLoading = (props) => {
    const { loadingState, logo } = props
  return (
    <>
        <div className="w-100 h-100" {...props}>
            <div className="circle">
                <div x-animation-start={loadingState ? "true" : "false"} className="logo"><img src={logo} alt=""/></div>
                <div x-animation-start={loadingState ? "true" : "false"} className="circleone"></div>
                <div x-animation-start={loadingState ? "true" : "false"} className="circletwo"></div>
                <div x-animation-start={loadingState ? "true" : "false"} className="circlethree"></div>
            </div>
        </div>
    </>
  )
}

export default AtomusLoading
