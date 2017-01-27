import React, { Component } from 'react';

import Github from '../../assets/github.svg';

class Meet extends Component {
    constructor(props) {
        super(props);
    }

    formattedDate() {
        const dateStart = this.props.dateStart;
        const dateEnd = this.props.dateEnd;

        if (dateEnd.isAfter(dateStart, 'month')) {
            return dateStart.format('MMM Do') + ' - ' + dateEnd.format('MMM Do');
        } else if (dateEnd.isAfter(dateStart, 'day')) {
            return dateStart.format('MMM Do') + ' - ' + dateEnd.format('Do');
        }
        return this.props.dateStart.format('dddd MMM Do');
    }

    formattedTime() {
        const timeStart = this.props.dateStart.format('h a');
        const timeEnd = this.props.dateEnd.format('h a');
        return timeStart + ' - ' + timeEnd;
    }

    renderAuthor() {
        if (this.props.author) {
            return <h2 className="meet-author regular mb0">by {this.props.author}</h2>;
        }
    }

    renderGithub() {
        if (this.props.githubLink) {
            return <a className="meet-github bold" href={this.props.githubLink}>
                <img srcSet={Github} className="vert-align-middle" />
                find on github
            </a>;
        }
    }

    render() {
        return (
            <div className="meet grid-noGutter">

                <div className="meet-info">
                    <h2 className="meet-title bold">{this.props.title}</h2>
                    {this.renderAuthor()}

                    <p className="meet-date mb0">{this.formattedDate()}</p>
                    <p className="meet-time-location mt0">{this.formattedTime()} | {this.props.location}</p>

                    {this.renderGithub()}
                </div>

                <div className="meet-text">
                    <p className="measure mb0 pt4-ns mt0">{this.props.description}</p>
                </div>
            </div>
        );
    }
}

export default Meet;
