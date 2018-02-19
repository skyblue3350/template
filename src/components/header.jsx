import React from "react";
import PropTypes from "prop-types";

import AppBar from "material-ui/AppBar";
import IconButton from "material-ui/IconButton";
import Menu from "material-ui/svg-icons/navigation/menu";
import {white} from "material-ui/styles/colors";

export default class Header extends React.Component {
    static defaultProps = {
        handleChangeRequestNavDrawer: PropTypes.func
    };

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <AppBar
                style={this.props.styles}
                title={"タイトル"}
                iconElementLeft={
                    <IconButton onClick={this.props.handleChangeRequestNavDrawer}><Menu color={white} /></IconButton>
                }/>
        );
    }
}
