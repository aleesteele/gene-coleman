import React, {Component} from 'react';

class CarouselSlide extends Component {
    render() {
        // console.log('props inside Carousel slide:', this.props.slide.caption);
        return (
            <div className="carousel-slide">
                <div className="carousel-slide-wrapper">
                    <div className="carousel-slide__info">
                        <h3>{this.props.slide.caption}</h3>
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
