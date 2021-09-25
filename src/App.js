import React, {useEffect, useState} from "react";
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import WebFont from 'webfontloader';
import axios from "axios";

//layouts
import HomeLayoutRoute from "./layouts/HomeLayout";
import CategoriesLayoutRoute from "./layouts/CategoriesLayout";
import PageLayoutRoute from "./layouts/PageLayout";

//components
import NotFound from "./components/404notfound/NotFound";
import Unavailable from "./components/404notfound/Unavailable";

import Home from "./components/home/Home";
import Categories from "./components/Categories/Categories";
import Articles from "./components/articles/Articles";
import Videos from "./components/videos/Videos";
import Timeline from './components/timeline/Timeline';

function App() {

    //webfontloader
    useEffect( () => {
        WebFont.load({
            google: {
                families: ['Poppins',  'Open Sans']
            }
        });
    }, []);

  return (
    <Router>
        <Switch>
            <Route exact path="/">
                <Redirect to="/accueil" />
            </Route>
            <HomeLayoutRoute path="/accueil" component={Home} />
            <CategoriesLayoutRoute path="/categories" component={Categories} />
            <PageLayoutRoute path="/articles" component={Articles} />
            <PageLayoutRoute path="/videos" component={Videos} />
            <PageLayoutRoute path="/chrono" component={Timeline} />

            <PageLayoutRoute path="*" component={NotFound} />
            <PageLayoutRoute path="/indisponible" component={Unavailable} />
        </Switch>
    </Router>
  );
}

export default App;
