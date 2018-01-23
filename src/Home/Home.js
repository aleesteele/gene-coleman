import React, {Component} from 'react';
import './Home.css';

class Home extends Component {
    constructor (props) {
        super(props);

        this.state = {
            video: 'e5G19pJdeqI',
            autoplay: 1,
            rel: 0,
            modest: 1
        }
    }
    render() {
        console.log('inside Home component');

        var videoSrc = "https://www.youtube.com/embed/" +
            this.state.video + "?autoplay=" +
            this.state.autoplay + "&rel=" +
            this.state.rel + "&modestbranding=" +
            this.state.modest;

        return (
            <div className="Home">
                <div className="Home-wrapper">
                        <iframe
                            className="player"
                            type="text/html"
                            width="100%"
                            height="100%"
                            src={videoSrc}
                            frameBorder="0"
                        />
                </div>
            </div>
        );
    }
}

export default Home;
