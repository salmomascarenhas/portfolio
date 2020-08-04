import React from 'react';
import computer from '../../assets/images/intro-vector.svg';

function Intro() {
    return (
        <div id="intro">
            <div className="apresentation">
                <h1>HELLO, WORLD.</h1>
                <h1>I'm Salmo Mascarenhas.</h1>
                <h1>| FRONT-END DEVELOPER | BACK-END DEVELOPER | MOBILE DEVELOPER |</h1>
            </div>
            <div className="vector">
                <img src={computer} alt="Computer" />
            </div>
        </div>
    );
}

export default Intro;