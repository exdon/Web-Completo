import React from 'react'
import './Description.css'


export default () => {
    return (
        <div className="about-description">
            <h2>
                The best services ready<br/> 
                To serve you
            </h2>
            <p>
                Far far away, behind the word mountains, far from<br/>
                the countries Vokalia and Consonantia, there live the<br/>
                blind texts.
                <br/><br/>
                Separated they live in Bookmarksgrove right at the<br/>
                coast of the Semantics, a large language ocean.<br/>
                <br/>
                A small river named Duden flows by their place and<br/>
                supplies it with the necessary regelialia.
                <br/><br/><br/>
            </p>
            <button type="button" className="about--btn btn btn-primary"><span className="about--btn--text">Know More</span></button>
        </div>
    )
}
