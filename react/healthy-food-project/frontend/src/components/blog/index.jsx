import React from 'react'

import Cards from './Cards'
import Title from './Title'
import Carousel from './Carousel'

export default () => {
    return (
        <React.Fragment>
            <div className="index--blog" id="blog-part">
                <Title />
                <Carousel />
            </div>
        </React.Fragment>
    )
}