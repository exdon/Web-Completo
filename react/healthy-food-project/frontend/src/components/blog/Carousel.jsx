import React from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import './Carousel.css'

import Pic1 from '../../assets/imgs/blog_image_1.svg'
import Pic2 from '../../assets/imgs/bloco_image_2.svg'
import Pic3 from '../../assets/imgs/bloco_image_3.svg'
import Pic4 from '../../assets/imgs/bloco_image_4.svg'
import Profile1 from '../../assets/imgs/pexels-spencer-selover-428364.jpg'
import Profile2 from '../../assets/imgs/pexels-adrienn-1542085.jpg'
import Profile3 from '../../assets/imgs/pexels-andrea-piacquadio-3763188.jpg'
import Profile4 from '../../assets/imgs/pexels-andrea-piacquadio-941572.jpg'

export default () => {
    const responsive = {
        superLargeDesktop: {
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3,
          slidesToSlide: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1,
        }
      };

    return (
        <div className="carousel--row">
            <Carousel swipeable={false}
                draggable={false}
                showDots={false}
                responsive={responsive}
                ssr={true} // means to render carousel on server-side.
                infinite={false}
                autoPlaySpeed={1000}
                keyBoardControl={true}
                customTransition="all 1s"
                transitionDuration={500}
                containerClass="carousel-container"
                removeArrowOnDeviceType={false}
                dotListClass="custom-dot-list-style"
                itemClass="carousel-item-padding-40-px"
                centerMode={["desktop", "superLargeDesktop"]}
                itemClass="carousel--content">
                <div className="blog--cardRow--item">
                    <div className="card">
                        <img className="card-img-top" src={Pic1} alt="Card image cap"/>
                        <div className="card-body">
                            <h5 className="card-title">Quick-start guide to nuts and seeds</h5>
                            <img className="" src={Profile1} alt="Card image-perfil" width="50px"/>  Kevin Ibrahim
                        </div>
                    </div>
                </div>
                <div className="blog--cardRow--item">
                    <div className="card">
                        <img className="card-img-top" src={Pic2} alt="Card image cap"/>
                        <div className="card-body">
                            <h5 className="card-title">Nutrition: Tips for Improving Your Health</h5>
                            <img className="" src={Profile2} alt="Card image-perfil" width="50px"/>  Sarah Knowles
                        </div>
                    </div>
                </div>
                <div className="blog--cardRow--item">
                    <div className="card">
                        <img class="card-img-top" src={Pic3} alt="Card image cap"/>
                        <div className="card-body">
                            <h5 className="card-title">The top 10 benefits of eating healthy</h5>
                            <img className="" src={Profile3} alt="Card image-perfil" width="50px"/>  Anne Clark
                        </div>
                    </div>
                </div>
                <div className="blog--cardRow--item">
                    <div className="card">
                        <img className="card-img-top" src={Pic4} alt="Card image cap"/>
                        <div className="card-body">
                            <h5 className="card-title">Benefitis of fasting for your Health</h5>
                            <img className="" src={Profile4} alt="Card image-perfil" width="50px"/>  Bryan McGregor
                        </div>
                    </div>
                </div>
                <div className="blog--cardRow--item">
                    <div className="card">
                        <img className="card-img-top" src={Pic1} alt="Card image cap"/>
                        <div className="card-body">
                            <h5 className="card-title">Quick-start guide to nuts and seeds</h5>
                            <img className="" src={Profile1} alt="Card image-perfil" width="50px"/>  Kevin Ibrahim
                        </div>
                    </div>
                </div>
                <div className="blog--cardRow--item">
                    <div className="card">
                        <img className="card-img-top" src={Pic2} alt="Card image cap"/>
                        <div className="card-body">
                            <h5 className="card-title">Nutrition: Tips for Improving Your Health</h5>
                            <img className="" src={Profile2} alt="Card image-perfil" width="50px"/>  Sarah Knowles
                        </div>
                    </div>
                </div>
                <div className="blog--cardRow--item">
                    <div className="card">
                        <img class="card-img-top" src={Pic3} alt="Card image cap"/>
                        <div className="card-body">
                            <h5 className="card-title">The top 10 benefits of eating healthy</h5>
                            <img className="" src={Profile3} alt="Card image-perfil" width="50px"/>  Anne Clark
                        </div>
                    </div>
                </div>
                <div className="blog--cardRow--item">
                    <div className="card">
                        <img className="card-img-top" src={Pic4} alt="Card image cap"/>
                        <div className="card-body">
                            <h5 className="card-title">Benefitis of fasting for your Health</h5>
                            <img className="" src={Profile4} alt="Card image-perfil" width="50px"/>  Bryan McGregor
                        </div>
                    </div>
                </div>
            </Carousel>
        </div>
    )
}