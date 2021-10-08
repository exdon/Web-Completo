import React from 'react'
import './ImgBody.css'

import Image from '../../assets/imgs/bloco_final_image.svg'

export default () => {
    return (
        <div className="join--img--area" >
            <img src={Image} alt="logo" />
        </div>
    )
}