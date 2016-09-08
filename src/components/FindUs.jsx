import React, { Component } from 'react';

import Section from './Section.jsx';

class FindUs extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Section {...{
                title: 'Find Us'
            }}>
            </Section>
        );
    }
}

export default FindUs;
