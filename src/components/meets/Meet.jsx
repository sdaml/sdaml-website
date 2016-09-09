import React, { Component } from 'react';

class Meet extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="meet grid-noGutter">
                <div className="col-4_xs-12">
                    <h2 className="meet-title bold">{this.props.title}</h2>
                    <h2 className="meet-author regular">by {this.props.author}</h2>
                </div>
            </div>
        );
    }
}

export default Meet;
