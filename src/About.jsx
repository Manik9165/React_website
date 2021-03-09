import React from "react";
import img2 from '../src/images/img2.svg';
import Common from "./Common";

const About = () => {
    return (
        <>
            <Common
                text="Welcome to about page"
                button="Contact Us"
                img={img2}
                visit="/contact"
                alter="About Image"
            />
        </>
    );
}
export default About;