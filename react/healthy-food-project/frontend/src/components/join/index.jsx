import React from 'react'

import ImgBody from './ImgBody'
import EmailField from './EmailField'

export default () => {
    return (
        <React.Fragment>
            <div className="index--join container-fluid" id="join-part">
                <ImgBody />
                <EmailField />
            </div>
        </React.Fragment>
    )
}