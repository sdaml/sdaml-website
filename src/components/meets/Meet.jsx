import React, { Component } from 'react';

class Meet extends Component {
    constructor(props) {
        super(props);
    }

    formattedDate() {
        return this.props.dateStart.format('dddd MMM Do');
    }

    formattedTime() {
        const timeStart = this.props.dateStart.format('h a');
        const timeEnd = this.props.dateEnd.format('h a');
        return timeStart + ' - ' + timeEnd;
    }

    render() {
        return (
            <div className="meet grid-noGutter">

                <div className="col-4_xs-12 meet-info">
                    <h2 className="meet-title bold">{this.props.title}</h2>
                    <h2 className="meet-author regular mb0">by {this.props.author}</h2>

                    <p className="meet-date mb0">{this.formattedDate()}</p>
                    <p className="meet-time-location mt0">{this.formattedTime()} | {this.props.location}</p>
                    <a className="meet-github" href={this.props.githubLink}>find on github</a>
                </div>

                <div className="col-8_xs-12">
                    <p className="meet-body measure mb0">{this.props.description}</p>
                </div>
            </div>
        );
    }
}

export default Meet;
