import React from 'react';
import computer from '../../assets/images/intro-vector.svg';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import './styles.css';

function Intro() {
    return (
        <div id="intro">
            <div className="apresentation">
                <h5>HELLO, WORLD.</h5>
                <h1>I'm Salmo Mascarenhas.</h1>
                <p className="intro-development">
                    <span>Front-end developer</span>
                    <span>Back-end developer</span>
                    <span>Mobile developer</span>
                </p>
            </div>

            <div className="vector">
                <img src={computer} alt="Computer" />
            </div>

            <a className="contact-me" target='_blank' rel='noopener noreferrer' href="https://api.whatsapp.com/send?phone=5588993017866&text=Hello%20Salmo,%20I%20would%20like%20your%20developer%20services.">
                <WhatsAppIcon className="icon-whatsapp" />
                <p>Contact Me</p>
            </a>
        </div>
    );
}

export default Intro;