import React, {useEffect, useState} from "react";
import {Route} from "react-router-dom";

//components
import {Header} from "../components/header/index";
import {Footer} from "../components/footer/index";

const AccountLayout = ({children}) => {

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
                {children}
            </div>
            <Footer />
        </div>
    ) : (
        <div className="app">
            <div>
                <Header />
                {children}
                <Footer />
            </div>
        </div>
    )
}

const AccountLayoutRoute = ({component: Component, ...rest}) => {
    return(
        <Route {...rest} render={matchProps => (
            <AccountLayout>
                <Component {...matchProps} />
            </AccountLayout>
        )} />
    )
};

export default AccountLayoutRoute;