import React from 'react'
import './EmailField.css'

export default () => {
    return (
        <div className="email--input">
            <p>
                Join our membership<br/>
                to get special offer
            </p>
            <input type="email" name="email" placeholder="Enter your email address" className="join--input--field" />
            <button type="button"><span>Join</span></button>
        </div>
    )
}