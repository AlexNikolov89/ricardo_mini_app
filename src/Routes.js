import React from 'react'
import Homepage from './pages/homepage/Homepage'
import logo from  './assets/logo.svg'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import Searchpage from './pages/searchpage/Searchpage'
import ArticleDetailpage from './pages/articlepage/ArticleDetailpage'


const Routes = () => {
  
  return (
    <div className='main_container'>
        <Router>
        <Link to='/'><img src={logo} alt={logo} /></Link>
          <Switch>
            <Route exact path='/' component={Homepage} />
            <Route exact path='/searchpage/:searchText' component={Searchpage} />
            <Route path='/article-detail/:id' component={ArticleDetailpage} />
          </Switch>
        </Router>
    </div>
  )
}

export default Routes
