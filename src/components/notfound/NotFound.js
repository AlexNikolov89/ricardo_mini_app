import React from 'react'
import notFound from '../../assets/empty-cart.png'
import './NotFound.css'

const NotFound = () => {
    return (
        <div className='notfound_container'>
            <div className='image_wrapper'>
                <img src={notFound} alt={notFound} />
                <h3>Uppsss... Something went wrong, items not found!</h3>
            </div>
        </div>
    )
}

export default NotFound
