import React from "react";

export default class Sample extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <h1>{this.props.title}</h1>
                {this.props.text}
            </div>
        );
    }
}
