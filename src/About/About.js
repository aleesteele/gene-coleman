import React, {Component} from 'react';
import './About.css';

class About extends Component {
    render() {
        console.log('inside About component');
        return (
            <div className="About">
                <div className="About-photo-wrapper">
                    <img className="About-photo-img" src="/images/bio.jpg"/>
                </div>
                <div className="About-text-wrapper">
                    <p className="About-text-p">
                        (1937 - Present)
                        <br/><br/>
                        Gene Coleman was born on October 16, 1937 and raised on a wheat farm in Western Nebraska. At 17, he won a scholarship to study classical piano at the University of Wyoming, but was made to attend BYU in Provo, Utah instead. Yes, Gene was raised a Mormon. At 19, he dropped out of BYU and moved to New York. After seeing James Dean in "East of Eden", he and thousands of others came to the city to study theatre. Gene studied with Utahagen and later won the Barter award in 1961, picked by Hume Cronyn to do a season at the Barter theatre in Abingdon, VA.
                        <br/><br/>
                        Unfortunately, alcohol entered the picture (though he's been sober since 1983), and it was hard to parlay a career in theatre. After he got married to Linda in 1969, Gene felt that he needed to make a proper living. He bought a Nikon F and starting photographing his actor friends' headshots. At the same time, he started shooting street photography. His first photo was 'Man Sitting Under the Alamo Sculpture, Reading About the Moon Landing,' 1969. After that, he was hooked. Gene became a studio photographer, mostly doing editorial still lifes for magazines. On his off hours, he would go "hunting" for street photographs, which became a passion.
                        <br/><br/>
                        With the rise of digital photography, Gene stopped doing studio work in 1998. Meanwhile, he never promoted his street work, and starting selling antiques at New York's Annex Flea Market (previously The Garage). Only recently has he decided that the time was ripe to let the public see them (and he knows that time is of the essence). Gene can still be seen at flea markets around the city, selling old cameras and other odd things.
                        <br/><br/><br/><br/>
                        Photo: Barnes & Noble, 1999.
                    </p>
                </div>
            </div>
        );
    }
}

export default About;
