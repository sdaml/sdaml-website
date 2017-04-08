import React, { Component } from 'react';

import { capitalize, toClass } from '../js/utils.js';

class Section extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="section col-12 cf">
                <div
                    className={
                        !this.props.noGrid
                            ? ['grid-noGutter', toClass(this.props.title)].join(
                                  ' '
                              )
                            : toClass(this.props.title)
                    }
                >
                    <div className={!this.props.noGrid ? 'col-12' : null}>
                        <h2 className="f2 bold">
                            <span>{capitalize(this.props.title)}</span>
                        </h2>
                        <div className="section-child">
                            {this.props.children}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Section;
