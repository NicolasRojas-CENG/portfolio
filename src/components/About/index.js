import React from 'react';
import coverImage from '../../assets/Avatar.svg';
function About() {
    return (
        <section className="About my-5">
            <div className="my-2">
                <h1 id="about">Who am I?</h1>
                <img src={coverImage} className="my-2" alt="cover" />
            </div>
            <p>
            My name is Luca Rojas. I am a 23-year-old Costarican born Canadian. I have a background
        in computer engineering technology and recent graduate of the University of Toronto's
        full-stack web development Bootcamp. I have 5 years of coding experience, which cover Java, JavaScript,
        HTML/CSS, C, and Python. I am always excited to learn new technologies to further my knowledge
        in the web development field.
                </p>
        </section>
    );
}

export default About;