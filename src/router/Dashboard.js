import React from 'react'
import { Navbar } from '../components/ui/Navbar'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
} from "react-router-dom";
import { Axie } from '../components/Axie';
import { Dchess } from '../components/Dchess';
import { Cryptomines } from '../components/Cryptomines';
import { Pvu } from '../components/Pvu';
import { Home } from '../components/Home';

export const Dashboard = () => {
    return (
        <Router>
            <Navbar />

            <div className="container mt-2">

                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/axie" component={Axie} />
                    <Route exact path="/chess" component={Dchess} />
                    <Route exact path="/pvu" component={Pvu} />
                    <Route exact path="/cryptomines" component={Cryptomines} />

                    <Redirect to="/" />
                </Switch>
            </div>

        </Router>
    )
}
