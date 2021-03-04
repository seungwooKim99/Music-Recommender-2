import {HashRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import MainPage from '../Routes/MainPage';
import React from 'react';
import Result from '../Routes/Result';

const MainRoutes = () => (
    <>
    <Switch>
        <Route exact path='/' component={MainPage} />
        <Redirect from="*" to='/' />
    </Switch>
    </>
);

const ResultRoutes = () => (
    <>
    <Switch>
        <Route exact path="/result" component={Result} />
        <Redirect from="*" to='/result' />
    </Switch>
    </>
);

const AppRouter = ({isSearched = false}) => {
    return (
    <Router>
        {isSearched ? <ResultRoutes /> : <MainRoutes /> }
    </Router>
)
};

export default AppRouter;