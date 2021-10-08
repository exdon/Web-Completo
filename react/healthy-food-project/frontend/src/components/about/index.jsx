import React from 'react'

import ImgBody from './ImgBody'
import Description from './Description'

export default () => {
    return (
        <React.Fragment>
            <div className="index--about container-fluid">
                <ImgBody />
                <Description />
            </div>
        </React.Fragment>
    )
}