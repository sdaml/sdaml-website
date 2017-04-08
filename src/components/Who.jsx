import React, { Component } from 'react';

import Section from './Section.jsx';

class Feature extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Section
                {...{
                    title: 'Who We Are'
                }}
            >
                <div className="who-block">
                    <p className="measure f4 mt0">
                        {
                            'A community of students and software enthusiasts interested \
                            in using the latest technology and techniques to build innovative things.'
                        }
                    </p>
                </div>

                <div className="who-block">
                    <p className="measure f4 mt0">
                        {
                            'We get together every week to listen to one of our own \
                            share about a topic they are passionate about. Newcomers are welcome.'
                        }
                    </p>
                </div>

            </Section>
        );
    }
}

export default Feature;
