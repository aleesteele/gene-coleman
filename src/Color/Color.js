import React, {Component} from 'react';
import './Color.css';

class Color extends Component {
    render() {
        console.log('inside Color component');
        return (
            <div className="Color">
                <p>This is where the color series will go...</p>
            </div>
        );
    }
}

export default Color;
