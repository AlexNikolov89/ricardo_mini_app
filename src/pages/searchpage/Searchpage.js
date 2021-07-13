import React from 'react'
import './Searchpage.css'
import Product from '../../components/product/Product';
import Loading from '../../components/Loading';
import { useState } from 'react';
import {useLocation} from 'react-router-dom'


const Searchpage = (props) => {
    //console.log(props.history.location.detail)
    // const location = useLocation()
    // console.log(location.detail)
    console.log(props.history.location.detail)

    const [price, setPrice] = useState('')

    // const records = location.detail
    // console.log(records)


    // const records = props.history.location.detail
    // console.log(records.articles)
    
    let records = props.history.location.detail
    //console.log(records)


    // const renderItems = () => {
    //     if (!records) return null
    //     return records.articles.map(item => <Product key={item.id} item={item} />)
    // }


    return (
        <div className='searchpage_container'>
            <div className="searchpage_top">
                <p>Total count: {!records ? 0 : records.articles.length} articles</p>
                <select className='select'>
                    <option value={price} onClick={(e) => setPrice(e.target.value)}>Low Price</option>
                    <option value={price} onClick={(e) => setPrice(e.target.value)}>High Price</option>
                </select>
            </div>

            <div className="searchpage_products">
               {!records ? <Loading /> : records.articles.map(item => <Product key={item.id} item={item} />)}
               {/* {records.articles.map(item => <Product key={item.id} item={item} />)}*/}
            </div>
    
        </div>
    )
}

export default Searchpage
