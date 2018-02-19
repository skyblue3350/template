import React from "react";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";

import App from "./containers/app.jsx";

export default class Routes extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Router>
                <Route path="/" component={App}/>
            </Router>
        );
    }
}
