import React from "react";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";

import Drawer from "material-ui/Drawer";
import MenuItem from "material-ui/MenuItem";

import ActionHome from "material-ui/svg-icons/action/home";

export default class LeftDrawer extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const styles = {
            header: {
                height: 64,
                background: "rgb(0, 188, 212)",
            },
        }

        return (
            <Drawer docked={true} open={this.props.navDrawerOpen}>
                <div style={styles.header}/>
                {["a", "b", "c"].map((item) => {
                    return (
                        <MenuItem
                            key={item}
                            primaryText={item}
                            leftIcon={<ActionHome />}
                            containerElement={<Link to={item}/>}
                        />
                    )
                })}

            </Drawer>
        );
    }
}
