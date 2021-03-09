import React from "react";
import img1 from '../src/images/img1.svg';
import Common from "./Common";

const Home = () => {
    return (
        <>
            <Common
                text="Grow your business with"
                button="Get Started"
                img={img1}
                visit="/services"
                alter="Home Image"
            />
        </>
    );
}
export default Home;