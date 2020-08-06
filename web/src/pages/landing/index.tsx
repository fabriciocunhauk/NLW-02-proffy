import React, { useState, useEffect } from 'react';
// add Link for SPA activation
import { Link } from 'react-router-dom';

import logoimg from '../../assets/images/logo.svg';
import landingimg from '../../assets/images/landing.svg';

import studyicon from '../../assets/images/icons/study.svg';
import giveClassesIcon from '../../assets/images/icons/give-classes.svg';
import purpleHeartIcon from '../../assets/images/icons/purple-heart.svg';

import api from '../../services/api';

import './styles.css';

const Landing = () => {
    const [totalConnections, setTotalConnections] = useState(0);

    useEffect(() => {
        api.get('connections').then(res => {
            const { total } = res.data;

            setTotalConnections(total)
        })
    }, [])

    return (
        <div id="page-landing">
            <div id="page-landing-content" className="container">
                <div className="logo-container">
                    <img src={logoimg} alt="proffy-logo" />
                    <h2>Your learning platform.</h2>
                </div>

                <img
                    src={landingimg}
                    alt="landing-page"
                    className="hero-image"
                />

                <div className="buttons-container">
                    <Link to="/study" className="study">
                        <img src={studyicon} alt="study" />
                        Study
                    </Link>

                    <Link to="/give-classes" className="give-classes">
                        <img src={giveClassesIcon} alt="" />
                        Teach
                        </Link>
                </div>

                <span className="total-connections">
                    Total {totalConnections} Connections <img src={purpleHeartIcon} alt="purple-heart" />
                </span>
            </div>
        </div>

    )
}

export default Landing;