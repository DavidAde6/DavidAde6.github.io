import { useScroll, useTransform, motion } from "framer-motion";
import styled from "styled-components";

function AboutMe() {

    const Title = styled(motion.h1)`
    font-size: 270px;
    font-family: 'Montserrat-Bold';
    color: rgb(238, 238, 238);
    position: absolute;
    margin-left: auto;
    margin-right: -30px;
`

    const {scrollYProgress} = useScroll();
    const x = useTransform(scrollYProgress, [0, 1], [-200, 200]);
    return (
        <div className="aboutMeContainer">
                <Title style={{x}}> About Me</Title>
                <p className="aboutMe-p1">Being able to create while expanding my craft is what gives <br /> me purpose</p>
                <p className="aboutMe-p2">Here are some cool projects I built along the way 😎</p>
        </div>
            
    )
}
export default AboutMe