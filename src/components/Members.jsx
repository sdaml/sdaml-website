import React, { Component } from 'react';

import Section from './Section.jsx';
import members from '../js/data/members.js';

class Members extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Section {...{
                title: 'Members'
            }}>
                {members.map(function(member) {
                    return <div key={member.name} className="member">
                        <a className="member-link" href={member.link}>
                            <h3 key={member} className="f3">{member.name}</h3>
                        </a>
                    </div>;
                })}
            </Section>
        );
    }
}

export default Members;
