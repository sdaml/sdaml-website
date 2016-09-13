import React, { Component } from 'react';

import Section from './Section.jsx';

class Feature extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Section {...{
                title: 'Who We Are'
            }}>

                <div className="who-block">
                    <p className="small-measure">
                        {
                            "A community of students and software enthusiasts interested \
                            in using the latest technogloy and techniques to build amazing things."
                        }
                    </p>
                </div>

                <div className="who-block">
                    <p className="small-measure">
                        {
                            "We get together every week to listen to one of our own \
                            share about a topic they are passionate about. Newcomers are welcome."
                        }
                    </p>
                </div>

            </Section>
        );
    }
}

export default Feature;
