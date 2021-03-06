import React, {useState, useEffect} from "react";
import {Route} from "react-router-dom";

//components
import {Header} from "../components/header/index";
import {SportsBar} from '../components/common/index';
import {Nav, MobileNav} from "../components/nav/index";
import {Footer} from "../components/footer/index";
import {Timeline} from "../components/home/index";

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
                <SportsBar />
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