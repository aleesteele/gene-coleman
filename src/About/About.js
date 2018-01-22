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
                        Gene Coleman was born on October 16, 1937 and raised on a wheat farm in Western Nebraska. At 17, he recieved a scholarship to study classical piano at the University of Wyoming, but at the insistence of his parents he went to BYU in Provo, Utah instead. At 19, however, he dropped out and moved to New York. After seeing James Dean in "East of Eden", he was amongst the thousands of others who came to the city to study theatre. Gene studied with Uta Hagen and later won the Barter award in 1961, picked by Hume Cronyn to do a season at the Barter theatre in Abingdon, VA.
                        <br/><br/>
                        Unfortunately, alcohol entered the picture (though he's been sober since 1983), and it was hard to parlay a career in theatre. After he fell in love and got married in 1969, Gene felt that he needed to make a proper living. He bought a Nikon F and starting photographing actor's headshots and theater productions. At the same time, he started shooting street photography. His first photo was of a man sitting under the Alamo sculpture, reading about the moon landing in 1969. After developing that roll, he was hooked. Later, Gene became a studio photographer, mostly doing editorial still lifes for magazines. On his off hours, he would go "hunting" for street photographs, which became a passion. He avidly documented New York throughout the 70s, 80s, 90s and early 2000s.
                        <br/><br/>
                        With the rise of digital photography, Gene stopped doing studio work in 1998. Meanwhile, he never thought to promote his street work and put it away in a closet. To make a living, Gene joined his wife Linda in selling antiques at New York's Annex Flea Market (previously the infamous Garage in Chelsea). She passed away to cancer in 2002. Only recently was Gene convinced (by the same 20-something who made this website) that the time was ripe to dust off his negatives and show them to the public. Gene can still be seen at flea markets around the city, selling old cameras and antiques. Now 80, he still photographs but mostly with his iPhone. He has one daughter, Heather, who was born in 1979 and lives with her husband Alex and baby Eloise in Brooklyn, New York.
                        <br/><br/>
                        Gene can be contacted at <a href="mailto: coleman5537@hotmail.com">coleman5537@hotmail.com</a>.
                        <br/><br/>
                        Photo: Self-portrait, Barnes & Noble, 1999.<br/><br/>
                        <a href="https://www.instagram.com/genecolemanphoto/"><img src="/instagram.png" className="About-nav-img"/></a>
                        <a href="https://www.facebook.com/genecolemanphoto/"><img src="/facebook.png" className="About-nav-img"/></a>
                    </p>
                </div>
            </div>
        );
    }
}

export default About;
