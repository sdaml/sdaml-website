import React, { Component } from 'react';

import FindUs from './FindUs.jsx';
import Who from './Who.jsx';
import MeetsSections from './meets/MeetsSections.jsx';
import Members from './Members.jsx';

class Copy extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="copy gutter-small grid-centered-noGutter">
                <div className="col-10_lg-8_md-10_sm-10_xs-12 grid-noGutter center-vertical">

                    <h1 className='tc w-100 f1-ns f2 mv5 su bold'>Software Development & Machine Learning</h1>

                    <Who />
                    <FindUs />

                    <MeetsSections />

                    <Members />
                </div>
            </div>
        );
    }
}

export default Copy;
