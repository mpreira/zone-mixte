import React, {Component, useState} from "react";
import {Route} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBars} from "@fortawesome/free-solid-svg-icons";

//components
import Backdrop from '../components/drawerMenu/Backdrop';
import DrawerMenu from "../components/drawerMenu/DrawerMenu";
import Header from "../components/common/header/Header";
import Sportsbar from '../components/common/sportsBar/SportsBar';
import Footer from "../components/common/footer/Footer";

const HomeLayout = ({children}) => {

    /*toggle menu*/
    const [drawerOpening, setDrawerOpening] = useState(false);
    const [backdropOpening, setBackdropOpening] = useState(false);

    const handleOpening = () => {
        setDrawerOpening(true);
        setBackdropOpening(true);
        console.log("click !")
    };

    const handleChange = (drawerOpening, backdropOpening) => {
        setDrawerOpening(drawerOpening);
        setBackdropOpening(backdropOpening);
    };

    return(
        <>
            <div className="app">
                <div className="flex">
                    <button className={"menu"}>
                        <FontAwesomeIcon
                            icon={faBars}
                            className="text-gray-500 absolute top-8 left-8"
                            onClick={() => handleOpening()}
                        />
                    </button>
                    <Header />
                </div>

                <Sportsbar />
                {children}
                <Footer />
            </div>
            {backdropOpening ? (
                <Backdrop openBackdrop={true} changeBackdrop={() => handleChange()} />
            ) : null}

            {drawerOpening ? (
                <DrawerMenu openDrawer={true} changeDrawer={() => handleChange()} />
            ) : null}
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