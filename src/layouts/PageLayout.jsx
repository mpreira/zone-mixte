import React, {Component, useState, useEffect} from "react";
import {Route} from "react-router-dom";

//components
import Header from "../components/header/Header";
import Sportsbar from '../components/common/sportsBar/SportsBar';
import Nav from "../components/nav/Nav";
import MobileNav from "../components/nav/MobileNav";
import Footer from "../components/footer/Footer";
import Timeline from "../components/home/timeline/Timeline";

const PageLayout = ({children}) => {

    const [isXLarge, setIsXLarge] = useState(window.innerWidth >= 1280);

    const updateMedia = () => {
        setIsXLarge(window.innerWidth >= 1280);
    };

    useEffect(() => {
        window.addEventListener("resize", updateMedia);
        return () => window.removeEventListener("resize", updateMedia);
    });

    return isXLarge? (
        <div className="app">
            <Header />
            <div className="flex 2xl:justify-between">
                <Nav />
                {children}
                <Timeline />
            </div>
            <Footer />
        </div>
    ) : (
        <div className="app">
            <MobileNav />
            <div>
                <Header />
                <Sportsbar />
                {children}
                <Footer />
            </div>
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