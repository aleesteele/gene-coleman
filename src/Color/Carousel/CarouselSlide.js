import React, {Component} from 'react';
import './Carousel.css';

class CarouselSlide extends Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick(e){
        console.log('this is the props: ', this.props.slide);
    }
    render() {
        // console.log('props inside Carousel slide:', this.props.slide.caption);
        return (
            <div className="carousel-slide">
                <div className="carousel-slide-wrapper">
                    <div className="carousel-slide__info" onClick={this.handleClick}>
                        <h2 className="carousel-slide__caption" onClick={this.handleClick}>{this.props.slide.caption}</h2>
                    </div>
                    <div className="carousel-slide__content">
                        <img className="carousel-slide__img" src={this.props.slide.url} alt={this.props.slide.caption} onClick={this.handleClick}/>
                    </div>
                </div>
            </div>
        );
    }
}

export default CarouselSlide;
