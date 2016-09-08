import React, { Component } from 'react';

import Section from './Section.jsx';

class Meet extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Section {...{
                title: this.props.title + ' Meets'
            }}>
            </Section>
        );
    }
}

export default Meet;
