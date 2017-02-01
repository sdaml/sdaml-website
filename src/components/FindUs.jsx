import React, { Component } from 'react';

import Section from './Section.jsx';

// Logos
import Facebook from '../assets/facebook_logo.svg';
// import Slack from '../assets/slack_logo.svg';
import Twitter from '../assets/twitter_logo.svg';

// {
//     name: 'Slack',
//     icon: Slack,
//     href: '#'
// }

const findUsLinks = [
    {
        name: 'Facebook',
        icon: Facebook,
        href: 'https://www.facebook.com/groups/uvic.software'
    }, {
        name: 'Twitter',
        icon: Twitter,
        href: 'https://twitter.com/uvicsdaml'
    }
];

class FindUs extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Section {...{
                title: 'Find Us',
                noGrid: true
            }}>

                {findUsLinks.map(function(findLink) {
                    return <div key={findLink.name} className="find-link">
                        <a href={findLink.href}>
                            <img className="find-icon vert-align-middle" srcSet={findLink.icon} />
                            <span className="find-name bold">{findLink.name}</span>
                        </a>
                    </div>;
                })}

            </Section>
        );
    }
}

export default FindUs;
