import React from 'react'
import './Footer.css'
import { Link } from 'react-router-dom'


export default () => {
    return (
        <footer className="footer">
            <div className="footer--copyright">
                <p className="font-weight-bold mt-3">© Copyrights 2019 Stack. All Rights Reserved.</p>
            </div>
            <div className="footer--nav">
                <nav className="footer--nav--menu">
                    <Link to="/Privacy-policy">
                        Privacy Policy
                    </Link>
                    <Link to="/Terms-and-conditions">
                        Terms and Conditions
                    </Link>
                </nav>
            </div>
        </footer>
    )
}