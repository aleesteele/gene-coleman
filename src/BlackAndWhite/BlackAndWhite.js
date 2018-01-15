import React, {Component} from 'react';
import './BlackAndWhite.css';
import Carousel from './Carousel/Carousel';

class BlackAndWhite extends Component {
    render() {
        console.log('inside BlackAndWhite component');
        const carouselSlidesData = [
            {
                img: "https://s3.amazonaws.com/gene-coleman/11th+Avenue%2C+1999.jpg",
                caption: "11th Avenue, 1999"
            }, {
                img: "/carousel/2.jpg",
                caption: "this is a caption"
            }, {
                img: "/carousel/3.jpg",
                caption: "this is a caption"
            }, {
                img: "/carousel/4.jpg",
                caption: "this is a caption"
            }, {
                img: "/carousel/5.jpg",
                caption: "this is a caption"
            }
        ];
        return (<div className="BlackAndWhite">
            <Carousel slides={carouselSlidesData}/>
        </div>);
    }
}

export default BlackAndWhite;
