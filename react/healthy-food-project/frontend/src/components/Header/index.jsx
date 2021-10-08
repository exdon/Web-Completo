import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom'

import MenuHamburger from './MenuHamburger'

export default () => {
    return (
        <header className="header">
            <div className="header--title">
                <p className="font-weight-bold mt-3">Healthy Food</p>
            </div>
            <div className="header--nav">
                <nav className="header--nav--menu">
                    <a href="#recipes-part">
                        HEALTHY RECIPES
                    </a>
                    <a href="#blog-part" >
                        BLOG
                    </a>
                    <a href="#join-part">
                        JOIN
                    </a>
                    <Link to="/register">
                        <button type="button" className="btn btn-light text-success">REGISTER</button>
                    </Link>
                </nav>
            </div>
            <MenuHamburger />
        </header>
    )
}
    
    
