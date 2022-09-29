import React from "react";
import './style.css';
//import { useNavigate } from "react-router-dom";

const Blog = () => {
   // const nav = useNavigate();

    return (
        <>

            <div className="blog-cotainer" style={{ margin: "10px" }}>
                <a href="/">Home</a>
                <a href="/about">About Us</a>
            </div>
            <h1 style={{ color: "green", textAlign: "center" }}>Blog Page</h1>
            <div className="content">
            <p>A number of years ago I went on holiday to a beautiful part of Portugal.<br></br>
            We stayed in a converted farmhouse in the middle of a national park.<br></br>
            The farmhouse was in a valley. We arrived in the evening when the birds were just starting to roost.<br></br>
            It was still warm and the air smelled…</p>
            </div>
        </>
    )
};

export default Blog;