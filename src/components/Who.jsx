import React, { Component } from 'react';

import Section from './Section.jsx';

class Feature extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Section {...{
                title: 'Who We Are'
            }}>
            </Section>
        );
    }
}

export default Feature;
