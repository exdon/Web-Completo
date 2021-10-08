import React from 'react'
import './ImgBody.css'

import Image from '../../assets/imgs/Illustration.svg'

export default () => {
    return (
        <div className="home--img--area" >
            <img src={Image} alt="logo" className="img-fluid float-end" />
        </div>
    )
}

    
