import React, { Component } from 'react';

import Cover from './Cover.jsx';
import Copy from './Copy.jsx';

class App extends Component {
    render() {
        return (
            <div className="main mw100">
                <Cover />
                <Copy />
            </div>
        );
    }
}

export default App;

