import React, {useEffect} from "react";
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import WebFont from 'webfontloader';

//layouts
import HomeLayoutRoute from "./layouts/HomeLayout";
import CategoriesLayoutRoute from "./layouts/CategoriesLayout";
import PageLayoutRoute from "./layouts/PageLayout";
import AccountLayoutRoute from "./layouts/AccountLayout";

//components
import {NotFound, Unavailable} from "./components/404notfound/index";

import {Home} from './components/home/index';
import {Categories} from './components/Categories/index';
import {Articles} from './components/articles/index';
import {Videos} from './components/videos/index';
import {Timeline} from './components/timeline/index';

import {Login} from './components/login/index';
import {Account} from './components/account/index';

function App() {

    //webfontloader
    useEffect( () => {
        WebFont.load({
            google: {
                families: ['Poppins',  'Open Sans', 'Roboto']
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

            <AccountLayoutRoute path="/login" component={Login} />
            <AccountLayoutRoute path="/mon-compte" component={Account} />

            <PageLayoutRoute path="*" component={NotFound} />
            <PageLayoutRoute path="/indisponible" component={Unavailable} />
        </Switch>
    </Router>
  );
}

export default App;
