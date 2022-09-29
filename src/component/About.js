import React from "react";
import './style.css';
//import { useNavigate } from "react-router-dom";

const About = () => {
   // const nav = useNavigate();

    return (
        <>
            <div className="about-cotainer" style={{ margin: "10px" }}>
                <a href="/">Home</a>
                <a href="/blog">Blog</a>
            </div>
            <h1 id="aboutHeading">About Us</h1>
            <div className="content">
            <img src="https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg" alt="Flowers in Chania"/>
            </div>
        </>
    )
};

export default About;