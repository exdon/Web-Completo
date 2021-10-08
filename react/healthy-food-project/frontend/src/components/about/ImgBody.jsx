import React from 'react'
import './ImgBody.css'

import Image from '../../assets/imgs/bloco_services.svg'

export default () => {
    return (
        <div className="about--img--area" >
            <img src={Image} alt="logo" />
        </div>
    )
}