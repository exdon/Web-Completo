import React from 'react'
import './index.css'

import Header from '../Header'
import ImgBody from './ImgBody'
import SearchField from './SearchField'

export default () => {
    return (
        <React.Fragment>
            <div className="index--home">
                <ImgBody />
                <SearchField />
            </div>
        </React.Fragment>
    )
}
    
