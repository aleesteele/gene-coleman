import React, {Component} from 'react';
import './Carousel.css';

class CarouselSlide extends Component {
    render() {
        console.log('props inside Carousel slide:', this.props);
        return (
            <li className={this.props.index === this.props.activeIndex
                ? "carousel__slide carousel__slide--active"
                : "carousel__slide"
            }>
            <img className="carousel-slide__content" src={this.props.slide.img} alt="{this.props.slide.caption}"/>
            </li>
        );
    }
}

export default CarouselSlide;
