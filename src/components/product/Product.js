import React from 'react'
import Moment from 'react-moment';
import './Product.css'
import {Link} from 'react-router-dom'

const Product = ({item}) => {
    //console.log(item)
    
    return (
        <Link style={{ textDecoration: 'none', color: 'black' }} to={`/article-detail/${item.id}`}>
        <div className='product_container'>
            <img src={item.imageUrl} alt={item.title} />
            <div className="product_info_wrapper">
                <h4>{item.title}</h4>
                <p>Ending on: <Moment format='YYYY-MMMM-DD, HH:mm:ss' style={{ fontWeight: '700' }}>{item.endDate}</Moment></p>
                {item.buyNowPrice ? <h4 className='product_price'>{item.buyNowPrice} CHF</h4> : <h4 className='product_price'>0 CHF</h4>}
            </div>
        </div>
        </Link>
    )
}

export default Product
