import React, { Component } from 'react';

import MeetsList from './MeetsList.jsx';

import meets from '../../js/data/meets.js';

const upcomingMeets = () => {
    const now = new Date();
    return {
        title: 'Upcoming',
        meets: meets.filter(function(meet) {
            return meet.dateStart.isAfter(now);
        })
    };
};

const pastMeets = () => {
    const now = new Date();
    return {
        title: 'Past',
        meets: meets.filter(function(meet) {
            return meet.dateStart.isBefore(now);
        })
    };
};

class MeetsSections extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="meets-sections col-12 grid-noGutter">
                <MeetsList {...upcomingMeets()} />
                <MeetsList {...pastMeets()} />
            </div>
        );
    }
}

export default MeetsSections;
