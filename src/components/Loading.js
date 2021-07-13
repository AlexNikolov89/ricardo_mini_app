import React, {Fragment} from 'react'
import loader from '../assets/loader.gif'

const Loading = () => {
    return (
        <Fragment>
            <img 
            src={loader} 
            alt={loader}
            style={{ 
                width: '70vw', height: '70vh'
            }} />
        </Fragment>
    )
}

export default Loading
