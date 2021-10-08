import React from 'react'
import './Content.css'
import 'bootstrap/dist/css/bootstrap.min.css'

import Header from '../components/Header'
import Home from './home'
import Recipes from './recipes'
import About from './about'
import Blog from './blog'
import Join from './join'
import Footer from '../components/footer'

export default () => {
    return (
        <React.Fragment>
            <Header />
            <main className="content">
                <div className="container--home">
                    <Home />
                </div>
                <div className="container--recipe">
                    <Recipes />
                </div>
                <div className="container--about ">
                    <About />
                </div>
                <div className="container--blog">
                    <Blog />
                </div>
                <div className="container--join">
                    <Join />
                </div>
            </main>
            <Footer />
        </React.Fragment>
    )
}
    