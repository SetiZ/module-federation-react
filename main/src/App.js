import React from 'react';
import Header from "./components/Header";
import {BrowserRouter, Switch, Route, Link} from "react-router-dom";

const App1 = React.lazy(() => import('app1/App'));
const App2 = React.lazy(() => import('app2/App'));

export default () => (
    <div>
        <React.Suspense fallback='Loading'>
            <App1/>
            <App2/>
        </React.Suspense>
    </div>
    // <BrowserRouter>
    //     <Header>
    //         <div>
    //             <Link to="/">App 1</Link> - <Link to="/app2">App 2</Link>
    //         </div>
    //     </Header>
    //     <React.Suspense fallback='Loading'>
    //         <React.Fragment>
    //             <Switch>
    //                 <Route exact path="/" component={App1}/>
    //                 <Route exact path="/app2" component={App2}/>
    //             </Switch>
    //         </React.Fragment>
    //     </React.Suspense>
    // </BrowserRouter>
);
