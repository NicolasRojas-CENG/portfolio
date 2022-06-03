import React from 'react';
import LinkedInImage from '../../assets/linkedin.png';
import GitHubImage from '../../assets/GitHub.png'

function Footer() {
    return (
        <footer id="Footer">

            <a  href='https://www.linkedin.com/feed/?trk=msn-top-ca'><img alt='LinkedIn link' src={LinkedInImage}></img></a>
            <a  href='https://github.com/NicolasRojas-CENG'><img alt='GitHub link' src={GitHubImage}></img></a>
        </footer>
    );
}

export default Footer;