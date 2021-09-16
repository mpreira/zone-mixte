import React, {Component} from "react";
import {Route} from "react-router-dom";
import Header from "../components/common/header/Header";
import Footer from "../components/common/footer/Footer";

const PageLayout = ({children}) => {
    return(
        <div className="app">
            <Header />
            {children}
            <Footer />
        </div>
    )
}

const PageLayoutRoute = ({component: Component, ...rest}) => {
    return (
        <Route {...rest} render={matchProps => (
            <PageLayout>
                <Component {...matchProps} />
            </PageLayout>
        )} />
    )
};

export default PageLayoutRoute;