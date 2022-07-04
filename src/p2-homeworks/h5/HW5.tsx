import React from 'react'
import Header from './Header'
import Routes from './RoutesPages'
import {HashRouter} from "react-router-dom";

function HW5() {
    return (
        <div>
            {/*в gh-pages лучше работает HashRouter*/}
            <HashRouter>
                <Header/>
                <Routes/>
            </HashRouter>
        </div>
    )
}

export default HW5
