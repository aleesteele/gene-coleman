import React, {Component} from 'react';
import './Carousel.css';

class CarouselSlide extends Component {
    render() {
        // console.log('props inside Carousel slide:', this.props.slide.caption);
        return (
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
        );
    }
}

export default CarouselSlide;
