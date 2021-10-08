import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import { BrowserRouter } from 'react-router-dom'

import Routes from './Routes'

export default () => {
    return (
    <BrowserRouter>
        <div className="app">
            <Routes />
        </div>
    </BrowserRouter>
    )
}