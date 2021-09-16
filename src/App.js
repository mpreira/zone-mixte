import React, {useEffect} from "react";
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import WebFont from 'webfontloader';

//layouts
import HomeLayoutRoute from "./layouts/HomeLayout";
import PageLayoutRoute from "./layouts/PageLayout";

//components
import Home from "./components/home/Home";
import Videos from "./components/videos/Videos";

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
            <PageLayoutRoute path="/videos" component={Videos} />
        </Switch>
    </Router>
  );
}

export default App;
