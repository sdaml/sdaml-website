import React, { Component } from 'react';

import Section from '../Section.jsx';
import Meet from './Meet.jsx';

class MeetsList extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Section
                {...{
                    title: this.props.title + ' Meets'
                }}
            >
                {this.props.meets.map(function(meet) {
                    return <Meet key={meet.title} {...meet} />;
                })}
            </Section>
        );
    }
}

export default MeetsList;
