import React from "react";
import {Switch, Route} from "react-router-dom";
import PropTypes from "prop-types";

import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import withWidth, {LARGE, SMALL} from "material-ui/utils/withWidth";

import Header from "../components/header.jsx";
import LeftDrawer from "../components/leftdrawer.jsx";
import Sample from "../containers/sample.jsx";

@withWidth()
export default class App extends React.Component {
    static defaultProps = {
        width: PropTypes.number
    };

    constructor(props) {
        super(props);

        this.state = {
            navDrawerOpen: false
        }
    }

    componentDidMount() {
        this.setState({
            navDrawerOpen: this.props.width === LARGE
        });
    }

    componentWillReceiveProps(nextProps) {
        if (this.props.width !== nextProps.width) {
            this.setState({
                navDrawerOpen: nextProps.width === LARGE
            });
        }
    }

    handleChangeRequestNavDrawer() {
        this.setState({
            navDrawerOpen: !this.state.navDrawerOpen
        });
    }

    render() {
        // 横幅分と合わせる
        const paddingLeftDrawerOpen = 256;

        const styles = {
            // Headerのマージン
            header: {
                paddingLeft: this.state.navDrawerOpen ? paddingLeftDrawerOpen + 20 : 20
            },

            // コンテンツ分のマージン
            container: {
                margin: "20px",
                paddingLeft: this.state.navDrawerOpen ? paddingLeftDrawerOpen : 0
            },
        }

        return (
            <MuiThemeProvider>
                <div>
                    <Header 
                        handleChangeRequestNavDrawer={this.handleChangeRequestNavDrawer.bind(this)}
                        styles={styles.header}/>
                    <LeftDrawer navDrawerOpen={this.state.navDrawerOpen}/>
                    <div style={styles.container}>
                        <Switch>
                            <Route path="/" exact render={() => (
                                <Sample title={"トップページ"} text={"トップページ"}/>
                            )}/>
                            <Route path="/a" render={() => (
                                <Sample title={"サンプルA"} text={"サンプル"}/>
                            )}/>
                            <Route path="/b" render={() => (
                                <Sample title={"サンプルB"} text={"サンプル"}/>
                            )}/>
                            <Route path="/c" render={() => (
                                <Sample title={"サンプルC"} text={"サンプル"}/>
                            )}/>
                        </Switch>
                    </div>
                </div>
            </MuiThemeProvider>
        );
    }
}
