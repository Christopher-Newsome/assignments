import React from 'react'
import Navbar from './components/Navbar'
import Meme from './components/Meme'
import About from './components/About'
import Create from './components/Create'
import Footer from './components/Footer'
import { Switch, Route, withRouter } from 'react-router-dom'


const App = props => {
    return (
        <div>
            <Navbar />
            <Switch>
                <Route exact path="/" component={ Meme }/>
                <Route path="/about" component={ About }/>
                <Route path="/create" component={ Create }/>
            </Switch>
            <Footer />
        </div>
    )
}

export default withRouter(App);