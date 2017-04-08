import React, { Component } from 'react';

import MeetsList from './MeetsList.jsx';

import meets from '../../js/data/meets.js';

const upcomingMeets = () => {
    const now = new Date();
    return {
        title: 'Upcoming',
        meets: meets
            .filter(function(meet) {
                return meet.dateEnd.isAfter(now);
            })
            .map(function(meet) {
                meet.type = 'upcoming';
                return meet;
            })
    };
};

const pastMeets = () => {
    const now = new Date();
    return {
        title: 'Past',
        meets: meets
            .filter(function(meet) {
                return meet.dateEnd.isBefore(now);
            })
            .map(function(meet) {
                meet.type = 'past';
                return meet;
            })
    };
};

class MeetsSections extends Component {
    constructor(props) {
        super(props);
    }

    renderUpcoming() {
        const upcoming = upcomingMeets();
        if (upcoming.meets.length) {
            return <MeetsList {...upcoming} />;
        }
    }

    renderPast() {
        const past = pastMeets();
        if (past.meets.length) {
            return <MeetsList {...past} />;
        }
    }

    render() {
        return (
            <div className="meets-sections col-12 grid-noGutter">
                {this.renderUpcoming()}
                {this.renderPast()}
            </div>
        );
    }
}

export default MeetsSections;
