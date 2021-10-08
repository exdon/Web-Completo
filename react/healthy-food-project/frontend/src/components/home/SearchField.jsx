import React from 'react'
import './SearchField.css'

export default () => {
    return (
        <div className="home--search">
            <div className="home--search--title">
                <h1 className="title-search mt-3">Ready for<br/> Trying a new<br/> recipe?</h1>
            </div>
            <div className="home--searchfield">
                <nav className="search-field navbar navbar-light">
                    <form className="form-inline">
                        <input className="field form-control mr-sm-2" type="search" placeholder="Search healthy recipes" aria-label="Search" />
                        <button className="btn-field btn btn-outline-success my-2 my-sm-0" type="submit">
                            <i class="search fas fa-search" size="2x"></i>
                        </button>
                    </form>
                </nav>
            </div>
        </div>
    )
}

