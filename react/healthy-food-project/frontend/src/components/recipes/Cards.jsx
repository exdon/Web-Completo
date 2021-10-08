import React from 'react'
import './Cards.css'

import Broccoli from '../../assets/imgs/comida_1.svg'
import Burguer from '../../assets/imgs/comida_2.svg'
import Salad from '../../assets/imgs/comida_3.svg'
import Cobbler from '../../assets/imgs/comida_4.svg'


export default () => {
    return (
        <div className="card--container">
            <div className="card--row row">
                <div className="broccoli--card mb-3 shadow-lg mb-5 bg-white rounded">
                    <div className="row no-gutters">
                        <div className="card--div--img col-md-4">
                            <img src={Broccoli} className="card-img" alt="..." />
                        </div>
                        <div className="col-md-8">
                            <div className="card-body">
                                <h5 className="card-title">Broccoli Salad with Bacon</h5>
                                <button type="button" className="card--btn btn btn-primary">See Recipe</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="burguer--card mb-3 shadow-lg mb-5 bg-white rounded">
                    <div className="row no-gutters">
                        <div className="card--div--img col-md-4">
                            <img src={Burguer} className="card-img" alt="..." />
                        </div>
                        <div className="col-md-8">
                            <div className="card-body">
                                <h5 className="card-title">Classic Beef Burgers</h5>
                                <button type="button" className="card--btn btn btn-primary">See Recipe</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="salad--card card mb-3 shadow-lg mb-5 bg-white rounded">
                    <div className="row no-gutters">
                        <div className="card--div--img col-md-4">
                            <img src={Salad} className="card-img" alt="..." />
                        </div>
                        <div className="col-md-8">
                            <div className="card-body">
                                <h5 className="card-title">Classic Potato Salad</h5>
                                <button type="button" className="card--btn btn btn-primary">See Recipe</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="cobbler--card card mb-3 shadow-lg mb-5 bg-white rounded">
                    <div className="row no-gutters">
                        <div className="card--div--img col-md-4">
                            <img src={Cobbler} className="card-img" alt="..." />
                        </div>
                        <div className="col-md-8">
                            <div className="card-body">
                                <h5 className="card-title">Cherry Cobbler on the Grill</h5>
                                <button type="button" className="card--btn btn btn-primary">See Recipe</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}