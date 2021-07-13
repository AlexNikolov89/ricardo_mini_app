import React, {Fragment, useEffect, useState} from 'react'
import axios from 'axios'
import './ArticleDetailpage.css'
import Loading from '../../components/Loading'
import {baseUrl} from '../../baseUrl'


const ArticleDetailpage = ({match}) => {
    const apiToken = process.env.REACT_APP_API_TOKEN
    const articleId = match.params.id
    //console.log(articleId)
    const [article, setArticle] = useState({})
    const [user, setUser] = useState({})
    const [loading, setLoading] = useState(false)
    const [showMore, setShowMore] = useState(false); 
   

    useEffect(() => {
        const articleDetails = async () => {
            const res = await axios(`${baseUrl}/article-details?apiToken=${apiToken}&articleId=${articleId}`)
            console.log(res.data)
            setArticle(res.data)
            setLoading(loading =>!loading)
        }
        articleDetails()
    }, [articleId])

    useEffect(() => {
        const fetchUserId = async () => {
            const res = await axios(`${baseUrl}/user?apiToken=6c112f4ce164f6c0825ffeb5a9842185ae4f207f&userId=${article.sellerId}`)
            console.log(res.data)
            setUser(res.data)
            setLoading(loading => !loading)
        }
        fetchUserId()
    }, [article.sellerId])


    return (
        <Fragment>
            {loading && <Loading />}
            <div className='articledetail_container'>
                <div className="left_container">
                    <img src={article.imageUrl} alt={article.title} />
                </div>

                <div className="right_container">
                    <h1>{article.title}</h1>
                    <div style={{ borderTop: "1px solid lightgrey ", marginLeft: 30, marginRight: 30, marginBottom: 30 }}></div>
                    <div><span className='span'>Seller:</span> {user.name}</div>
                    {article.price ? (<div><span className='span'>Price:</span> {article.price} CHF</div>) : (<div><span className='span'>Price:</span> 0 CHF</div>)}
                    <div style={{ borderTop: "1px solid lightgrey ", marginLeft: 30, marginRight: 30, marginTop: 30 }}></div>
                    <div style={{ marginTop: 30 }}>{article.subtitle}</div>
                    <div dangerouslySetInnerHTML={{ __html: article.descriptionHtml }} />
                </div>
            </div>
        </Fragment>
    )
}

export default ArticleDetailpage
