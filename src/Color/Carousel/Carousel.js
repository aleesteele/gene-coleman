import React, {Component} from 'react';
import axios from 'axios';
import CarouselSlide from './CarouselSlide';
import InfiniteScroll from 'react-simple-infinite-scroll'
import './Carousel.css';

class Carousel extends Component {
    constructor(props) {
        super(props);

        this.state = {
            
        };
    }
    componentDidMount() {
        this.loadMore();
    }
    loadMore = () => {
        this.setState({
            isLoading: true,
            error: undefined
        })

        axios.get(`/data/b&w.json`).then(res => {
            const photos = res.data.map(obj => obj)
            this.setState({photos});
            console.log('new state: ', this.state);
        });

        fetch(`https://api.example.com/v1/items?from=${this.state.cursor}`).then(res => res.json()).then(res => {
            this.setState(state => ({
                items: [
                    ...state.items,
                    ...res.items
                ],
                cursor: res.cursor,
                isLoading: false
            }))
        }, error => {
            this.setState({isLoading: false, error})
        })
    }

    render() {
        // console.log('state inside Carousel: ', this.state)
        // console.log('props inside Carousel: ', this.props);
        return (<div className="carousel-container">
            <div className="carousel">
                {/* <InfiniteScroll
                    throttle={100}
                    threshold={300}
                    isLoading={this.state.isLoading}
                    hasMore={!!this.state.cursor}
                    onLoadMore={this.loadMore}> */}
                    <div className="carousel__slides">
                        {this.props.slides.map((slide, index) => <CarouselSlide slide={slide}/>)}
                    </div>
                {/* </InfiniteScroll> */}
                {/* {this.state.isLoading && (
                    <MyLoadingState />
                )} */}
            </div>
        </div>);
    }
}

export default Carousel;
