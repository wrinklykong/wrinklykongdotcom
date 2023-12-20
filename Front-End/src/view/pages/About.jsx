import "../css/About.css"
import JohnPhoto from "../images/profpic.jpg"

const AboutPage =() => {
    return(
        <div>
            <h1>
                About 
            </h1>
            <div className="block">
                <div className="paragraph">
                    <img src={JohnPhoto} id="johnphoto" align="left"/>
                    <p> My name is John Jones and I am a Reverse Engineering at iCR, inc. I am a Computer Science 
                        graduate from the University of Texas at San Antonio with interests in embedded systems security, 
                        wireless systems, green 5G, and network security.
                        <br/><br/>
                        I am experienced in microcontroller programming, network programming, reverse engineering, and
                        electronics.
                        <br/><br/>
                        In my free time I produce experimental electronic music and DJ electronic dance music under the
                        stage name DJ KLAPTRAP. You can find my work <a href="https://djkl4ptr4p.neocities.org/">here</a>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default AboutPage;