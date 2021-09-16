import React, { Component } from "react";
import {Route} from "react-router-dom";

//components
import Header from "../components/common/header/Header";
import Sportsbar from '../components/common/sportsBar/SportsBar';
import Footer from "../components/common/footer/Footer";

const HomeLayout = ({children}) => {
    return(
        <div className="app">
            <Header />
            <Sportsbar />
            {children}
            <Footer />
        </div>

    )
}

const HomeLayoutRoute = ({component: Component, ...rest}) => {
    return (
        <Route {...rest} render={matchProps => (
            <HomeLayout>
                <Component {...matchProps} />
            </HomeLayout>
        )} />
    )
};

export default HomeLayoutRoute;