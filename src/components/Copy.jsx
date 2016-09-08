import React, { Component } from 'react';

import FindUs from './FindUs.jsx';
import Who from './Who.jsx';
import Meet from './Meet.jsx';
import Members from './Members.jsx';

import meets from '../js/data/meets.js';

class Copy extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="copy gutter-small grid-centered-noGutter">
                <div className="col-10_lg-8_md-10_sm-10_xs-12 grid-noGutter center-vertical">
                    <FindUs />
                    <Who />

                    {meets.map(function(meet) {
                        return <Meet key={meet.title} {...meet} />;
                    })}

                    <Members />
                </div>
            </div>
        );
    }
}

export default Copy;
