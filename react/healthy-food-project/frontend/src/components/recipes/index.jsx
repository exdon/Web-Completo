import React from 'react'
import './index.css'

import Title from './Title'
import Cards from './Cards'

export default () => {
    return (
        <React.Fragment>
            <div className="index--recipes" id="recipes-part" >
                <Title />
                <Cards />
            </div>
        </React.Fragment>
    )
}
   