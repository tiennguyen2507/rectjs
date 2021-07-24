import React from 'react'

import { BrowserRouter,Route } from "react-router-dom";
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import Routers from '../routers/Routers';

const Layout = () => {
    return ( 
        <BrowserRouter>
            <Route render={props =>(
                <div>
                    <Header {...props} />
                    <div className="main">
                         <Routers />
                    </div>
                    <Footer />
                </div>
            )} />
        </BrowserRouter>
    )
}

export default Layout
