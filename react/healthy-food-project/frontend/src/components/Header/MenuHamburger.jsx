import React from 'react'
import './MenuHamburger.css'
import { Link } from 'react-router-dom'

export default () => {
    return (
        <div class="menu--hamburger dropdown">
            <button class="btn btn-light" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                <i class="fas fa-bars"></i>
            </button>
            <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                <li><a class="dropdown-item" href="#recipes-part">Healthy Recipes</a></li>
                <li><a class="dropdown-item" href="#blog-part">Blog</a></li>
                <li><a class="dropdown-item" href="#join-part">Join</a></li>
                <li><Link to="/register" class="dropdown-item">Register</Link></li>
            </ul>
        </div>
    )
}