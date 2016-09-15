import React, { Component } from 'react';

/*
 * uvic
 * software
 * club
*/

import allComments from '../js/data/comments.js';

import { randomIndex } from '../js/utils.js';

class Cover extends Component {
    constructor(props) {
        super(props);

        this.state = {
            commentIndex: 0,
            comments: allComments[0]
        };
    }

    componentDidMount() {
        setInterval(() => {
            const newCommentIndex = randomIndex(allComments);

            this.setState({
                commentIndex: newCommentIndex,
                comments: allComments[newCommentIndex]
            });
        }, 3000);
    }

    render() {
        return (
            <div className="cover full gutter-small grid-centered-noGutter">
                <div className="col-10_lg-8_md-10_sm-10_xs-12 center-vertical">
                    <h1 className="title f-subheadline animated fadeInLeft">
                        {this.commentIndex}
                        <span className="mono title-comment">{this.state.comments ? this.state.comments[0] : ''}</span> <br/>
                        <span className="mono title-comment">{this.state.comments ? this.state.comments[1] : ''}</span> uvic <br/>
                        <span className="mono title-comment">{this.state.comments ? this.state.comments[2] : ''}</span> software <br/>
                        <span className="mono title-comment">{this.state.comments ? this.state.comments[3] : ''}</span> club <br/>
                        <span className="mono title-comment">{this.state.comments ? this.state.comments[4] : ''}</span> <br/>
                    </h1>
                </div>
            </div>
        );
    }
}

export default Cover;
