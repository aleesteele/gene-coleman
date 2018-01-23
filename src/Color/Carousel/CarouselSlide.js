import React, {Component} from 'react';
import {Link} from 'react-router';
import ColorSlide from './ColorSlide';
import './Carousel.css';

class CarouselSlide extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        // console.log('props inside Carousel slide:', this.props.slide.caption);
        return (
            // <Link to="/ColorSlide">
                <div className="carousel-slide">
                    <div className="carousel-slide-wrapper">
                        <div className="carousel-slide__info">
                            <h2 className="carousel-slide__caption">{this.props.slide.caption}</h2>
                        </div>
                        <div className="carousel-slide__content">
                            <img className="carousel-slide__img" src={this.props.slide.url} alt={this.props.slide.caption}/>
                        </div>
                    </div>
                </div>
            // </Link>
        );
    }
}

export default CarouselSlide;
