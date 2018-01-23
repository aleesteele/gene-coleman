import React, {Component} from 'react';
import './Carousel.css';

class CarouselSlide extends Component {
    render() {
        if (!this.props.slide.caption) {
            return (
                <div className="loading">
                    <img src="loading.gif"/>
                </div>
            )
        }
        if (!this.props.slide.lowDef) {
            return (
                <div className="loading">
                    <img src="loading.gif"/>
                </div>
            )
        }
        if (!this.props.slide) {
            return (
                <div className="loading">
                    <img src="loading.gif"/>
                </div>
            )
        }
        return (
            <div className="carousel-slide">
                <div className="carousel-slide-wrapper">
                    <div className="carousel-slide__info">
                        <h2 className="carousel-slide__caption">{this.props.slide.caption}</h2>
                    </div>
                    <div className="carousel-slide__content">
                        <img className="carousel-slide__img" src={this.props.slide.lowDef} alt={this.props.slide.caption}/>
                    </div>
                </div>
            </div>
        );
    }
}

export default CarouselSlide;
