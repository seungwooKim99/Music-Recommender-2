import {HashRouter as Router, Route, Switch} from 'react-router-dom';
import Main from '../Routes/Main';
import React from 'react';


const MainRoutes = () => <><Route exact path='/' component={Main}></Route></>

const AppRouter = () => {
    return (
    <Router>
        <Switch>
            <MainRoutes />
        </Switch>
    </Router>
)
};

export default AppRouter;