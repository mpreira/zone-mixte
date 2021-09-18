import React, {Component, useState, useEffect} from "react";
import {Route} from "react-router-dom";

//components
import Header from "../components/header/Header";
import Sportsbar from '../components/common/sportsBar/SportsBar';
import Footer from "../components/footer/Footer";
import MobileNav from "../components/nav/MobileNav";

const HomeLayout = ({children}) => {

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
                <Sportsbar />
                <div className="flex">
                    <div className="2xl:w-96 w-80 bg-white">nav</div>
                    {children}
                    <div className="2xl:w-96 w-80 bg-white">chrono</div>
                </div>
                <Footer />


        </div>
        ) : (
        <>
            <div className="app">
                <MobileNav />
                <div>
                    <Header />
                    <Sportsbar />
                    {children}
                    <Footer />
                </div>

            </div>
        </>


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