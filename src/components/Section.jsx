import React, { Component } from 'react';

import { capitalize, toClass } from '../js/utils.js';

class Section extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="section col-12">
                <div className={['grid', toClass(this.props.title)].join(' ')}>
                    <div className="col-12">
                        <h2 className="f2">
                            <span>{capitalize(this.props.title)}</span>
                        </h2>
                        {this.props.children}
                    </div>
                </div>
            </div>
        );
    }
}

export default Section;
