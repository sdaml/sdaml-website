import React, { Component } from 'react';

import Section from './Section.jsx';
import members from '../js/data/members.js';

class Members extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Section
                {...{
                    title: 'Members',
                    noGrid: true
                }}
            >
                {members.map(function(member) {
                    return (
                        <div key={member.name} className="member">
                            <a
                                className="member-link f3 bold"
                                href={member.link}
                            >
                                {member.name}
                            </a>
                            <div className="member-sep" />
                        </div>
                    );
                })}
            </Section>
        );
    }
}

export default Members;
