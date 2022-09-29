import React from "react";
//import { useNavigate } from "react-router-dom";
import './style.css';
const Home = () => {
    // const nav = useNavigate();

    return (
        <>
            <div className="home-cotainer" style={{ margin: "10px" }}>
                <a href="/">Home</a>
                <a href="/about">About Us</a>
                <a href="/blog">Blog</a>
            </div>
            <h1 id="heading"></h1>
            <div className="content">
                <h3>Lets talk about Nature</h3>
                <p>Nature includes living and non-living components that together make life on Earth possible.<br></br>
                 Some forms of nature can be seen through the lush green forests, 
                 the vast sky above us, the oceans without an end, the mountains standing tall and so on.<br></br>
                 Nature nourishes the survival needs of plants, animals and humans alike.<br></br>
                 It's used for building interactive user interfaces and web applications quickly and efficiently with <br></br>
                 significantly less code than you would with vanilla JavaScript</p>
            </div>
        </>
    )
};

export default Home;