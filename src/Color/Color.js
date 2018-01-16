import React, {Component} from 'react';
import axios from 'axios';
import './Color.css';
import Carousel from './Carousel/Carousel';

class Color extends Component {
    constructor(props) {
        super(props);

        this.state = {
            photos: []
        };
    }
    componentDidMount() {
        axios.get(`/data/color.json`).then(res => {
            const photos = res.data.map(obj => obj)
            this.setState({photos});
            // console.log('new state: ', this.state);
        });
    }
    render() {
        console.log('inside Color component');
        return (
            <div className="BlackAndWhite">
                <Carousel
                    slides={this.state.photos}
                />
            </div>
        );
    }
}

export default Color;
