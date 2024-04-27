import React from 'react'
import {Spinner} from 'react-bootstrap'

const XSpinner = ({...props}) => {
    const {...rest} = props
    return (
        <>
            <div className="xSpinner"><Spinner {...rest}></Spinner></div>
        </>
    )
}

export default XSpinner
