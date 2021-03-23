import React from 'react';
import { Home } from './pages';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

const App = () => {
    return (
        <Router>
            <Switch>
                <Route path="/" exact>
                    <Home />
                </Route>
            </Switch>

            {/* <Switch>
                <Route path="/login">
                    <Login />
                </Route>
            </Switch>

            <Switch>
                <Route path="/signup">
                    <Signup />
                </Route>
            </Switch> */}
        </Router>
    )
}

export default App;