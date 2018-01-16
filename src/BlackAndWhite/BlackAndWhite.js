import React, {Component} from 'react';
import axios from 'axios';
import './BlackAndWhite.css';
import Carousel from './Carousel/Carousel';

class BlackAndWhite extends Component {
    constructor(props) {
        super(props);

        this.state = {
            photos: []
        };
    }
    componentDidMount() {
        axios.get(`/data/b&w.json`).then(res => {
            const photos = res.data.map(obj => obj)
            this.setState({photos});
            console.log('new state: ', this.state);
        });
    }
    render() {
        console.log('inside BlackAndWhite component');
        return (<div className="BlackAndWhite">
            <Carousel slides={this.state.photos}/>
        </div>);
    }
}

export default BlackAndWhite;
