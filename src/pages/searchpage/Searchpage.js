import React from 'react'
import './Searchpage.css'
import Product from '../../components/product/Product';
import NotFound from '../../components/notfound/NotFound';

const Searchpage = (props) => {
    //console.log(props.history.location.detail)

    const records = props.history.location.detail
    //console.log(records)
	

    const renderItems = () => {
        if (!records) return <NotFound />
        return records.articles.map(item => <Product key={item.id} item={item} />)
    }



    return (
        <div className='searchpage_container'>
              <p>Total count: {!records ? 0 : records.articles.length} articles</p>

            <div className="searchpage_products">
              {renderItems()}
            </div>
    
        </div>
    )
}

export default Searchpage
