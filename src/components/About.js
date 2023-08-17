import React from "react";
function About (props) {
    const myImage = props.image ||"https://via.placeholder.com/215"
    return (
        <aside>
            <img src={myImage} alt="blog logo"/>
            <p>{props.about}</p>
        </aside>
    )
}
export default About;