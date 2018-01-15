import React, {Component} from 'react';
import './Home.css';


class Home extends Component {
    render() {
        console.log('inside Home component');

        return (<div className="Home">
            {/* <div className="Home-carousel-wrapper"> */}
                {/* <div showArrows={true}> */}
                    {/* <div className="Home-carousel-child">
                        <img src="/carousel/1.jpg" className="Home-carousel-img"/>
                        <p className="legend">Legend 1</p>
                    </div>
                    <div className="Home-carousel-child">
                        <img src="/carousel/2.jpg" className="Home-carousel-img"/>
                        <p className="legend">Legend 2</p>
                    </div>
                    <div className="Home-carousel-child">
                        <img src="/carousel/3.jpg" className="Home-carousel-img"/>
                        <p className="legend">Legend 3</p>
                    </div>
                    <div className="Home-carousel-child">
                        <img src="/carousel/4.jpg" className="Home-carousel-img"/>
                        <p className="legend">Legend 4</p>
                    </div> */}
                    <div className="Home-carousel-child">
                        <img src="/carousel/5.jpg" className="Home-carousel-img"/>
                    </div>
                {/* </div> */}
                {/* <Carousel slides={carouselSlidesData}/> */}
                {/* <img src="/carousel/1.jpg" className="preview-img"/> */}
            {/* </div> */}
        </div>);
    }
}
 // onChange={onChange} onClickItem={onClickItem} onClickThumb={onClickThumb}

export default Home;
