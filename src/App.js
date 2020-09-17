import React from 'react';

import './App.css';
import Posts from './Components/Posts/Posts';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NoMatch from './Components/NoMatch/NoMatch';
import PostDetail from './Components/PostDetail/PostDetail';

function App() {
    return (
        <div>
            <Router>
                <Switch>
                    <Route exact path="/">
                        <h1 className="center">
                            Welcome, To Programmers Social Platform!
                        </h1>
                        <Posts />
                    </Route>
                    <Route path="/post-detail">
                        <PostDetail></PostDetail>
                    </Route>
                    <Route path="*">
                        <NoMatch />
                    </Route>
                </Switch>
            </Router>
        </div>
    );
}

export default App;
