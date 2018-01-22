import React, {Component} from 'react';
import axios from 'axios';
import Carousel from './Carousel/Carousel';
import './DearNewYorkCity.css';

class DearNewYorkCity extends Component {
    constructor(props) {
        super(props);

        this.state = {
            photos: []
        };
    }
    componentDidMount() {
        axios.get(`/data/dearnyc.json`).then(res => {
            const photos = res.data.map(obj => obj)
            this.setState({photos});
            // console.log('new state: ', this.state);
        });
    }
    render() {
        console.log('inside DearNewYorkCity component');
        return (
            <div className="DearNewYorkCity">
                <div className="DearNYC-description">
                    <p className="DearNYC-p">
                        "Dear New York is my small protest against the epidemic of overbuilding, destroying mom and pop stores, and the daily erosion of the human scale and community of New York we used to know and love. These street photographs were taken in the 70's and 80's. The letters are laments. In those days, I was excited to get my camera and hit the streets, when I had time off from my studio photography that helped fund my passion. Every block, every street offered hope of seeing something exciting, and it was a total adventure of being an urban explorer. These are the results of that time."
                    </p>
                    <br/><br/><br/>
                </div>
                <Carousel
                    slides={this.state.photos}
                />
            </div>
        );
    }
}

export default DearNewYorkCity;
