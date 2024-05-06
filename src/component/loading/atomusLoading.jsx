import React from 'react'


const AtomusLoading = (props) => {
    const { loadingState, logo } = props
    return (
      <>
          <div className="w-100 h-100">
              <div className="circle">
                  <div className="img" style={loadingState !== true ? {padding:0} : null}><img style={loadingState !== true ? {animationName:'pasive'} : null} className='loadingImage' src={logo} alt=""/></div>
                  <div style={loadingState !== true ? {animationName:'pasive'} : null} className="circleone"></div>
                  <div style={loadingState !== true ? {animationName:'pasive'} : null} className="circletwo"></div>
                  <div style={loadingState !== true ? {animationName:'pasive'} : null} className="circlethree"></div>
              </div>
          </div>
      </>
    )
}

export default AtomusLoading
