import {HashRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import MainPage from '../Routes/MainPage';
import React, { useState } from 'react';
import Result from '../Routes/Result';



const MainRoutes = ({isResultFetched, setIsResultFetched}) => (
    <>
    <Switch>
        <Route 
            exact path='/' 
            component={() => 
                <MainPage
                    isResultFetched={isResultFetched}
                    setIsResultFetched={setIsResultFetched}
                />
            } />
        <Redirect from="*" to='/' />
    </Switch>
    </>
);

const ResultRoutes = ({isResultFetched, setIsResultFetched}) => (
    <>
    <Switch>
        <Route 
            exact path="/result" 
            component={() => 
                <Result 
                    isResultFetched={isResultFetched}
                    setIsResultFetched={setIsResultFetched}
                />
            }
        />
        <Redirect from="*" to='/result' />
    </Switch>
    </>
);

const AppRouter = () => {
    
    const [isResultFetched, setIsResultFetched] = useState(false)

    return (
    <Router>
        {isResultFetched ? 
        <ResultRoutes 
            isResultFetched={isResultFetched}
            setIsResultFetched={setIsResultFetched} 
        /> : 
        <MainRoutes
            isResultFetched={isResultFetched}
            setIsResultFetched={setIsResultFetched} 
        /> }
    </Router>
)
};

export default AppRouter;