/*import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();*/

import React from "react";
import { render } from "react-dom";
//import {Router, Route, IndexRoute} from "react-router-dom";
//import { browserHistory } from 'react-router-dom';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Root } from "./components/Root";
import { Home } from "./components/Home";
import { User } from "./components/User";
import {View} from "./components/View";
import {Examination} from "./components/Examination";
import { Treatment } from "./components/Treatment";
import {Injection} from "./components/Injection";
import { Viewtable } from "./components/Viewtable";
import {Examinationtable} from "./components/Examinationtable";
import {Treatmenttable} from "./components/Treatmenttable";
import {Injectiontable} from "./components/Injectiontable";
class App extends React.Component {
    render() {
        return (
            <Router>

                <Root>
                    <Route path="/home" component={Home} />
                    <Route path="/view" component={View}/>
                    <Route path="/examination" component={Examination}/>
                    <Route path="/treatment" component={Treatment}/>
                    <Route path="/injection" component={Injection}/>
                    <Route path="/viewtable" component={Viewtable}/>
                    <Route path="/examinationtable" component={Examinationtable}/>
                    <Route path="/treatmenttable" component={Treatmenttable}/>
                    <Route path="/injectiontable" component={Injectiontable}/>
                    <Route path="/user" component={User} />
                </Root>

            </Router>
        );
    }
}

render(<App />, window.document.getElementById('app'));