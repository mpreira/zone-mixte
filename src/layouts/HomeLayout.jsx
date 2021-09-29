import React, {useState, useEffect} from "react";
import {Route} from "react-router-dom";

//components
import Header from "../components/header/Header";
import Sportsbar from '../components/common/sportsBar/SportsBar';
import Footer from "../components/footer/Footer";
import Nav from "../components/nav/Nav";
import MobileNav from "../components/nav/MobileNav";
import Timeline from "../components/home/timeline/Timeline";

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