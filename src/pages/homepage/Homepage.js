import axios from 'axios'
import React, { useState } from 'react'
import './Homepage.css'
import { useHistory } from 'react-router'
import TextField from '@material-ui/core/TextField';
import {baseUrl} from '../../baseUrl'


const Homepage = () => {
    const apiToken = process.env.REACT_APP_API_TOKEN
    const history = useHistory()

    const [searchText, setSearchText] = useState('')

    const handleSubmit = () => {  
        const searchTextValue = async () => {
            const res = await axios.get(`${baseUrl}/search?apiToken=${apiToken}&searchText=${searchText}`)
            //setArticles(res.data)
            if(searchText.trim().toLocaleLowerCase()) {
                history.push({
                    pathname: `/searchpage/${searchText}`,
                    detail: res.data
                })
            } else {
                history.push('/')
            }
        }
        searchTextValue()
    }

    return (
        <div className='search_container'>
        
        <TextField
        id="outlined-disabled"
        label="Search text"
        variant="outlined"
        type='text'
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
        className='input_text'
      />
        {searchText ? <button onClick={handleSubmit} className='btn'><i className="fas fa-search"></i>SEARCH</button> : <button className='btn disabled'><i className="fas fa-search"></i>SEARCH</button>}
        </div>
    )
}

export default Homepage

