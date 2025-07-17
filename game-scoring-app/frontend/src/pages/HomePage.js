import React from 'react';
import { useHistory } from 'react-router-dom';

const HomePage = () => {
    const history = useHistory();

    const handlePlayClick = () => {
        history.push('/players');
    };

    return (
        <div className="container home-page">
            <div className="game-title">
                <h1>ROBO Rail FootBall</h1>
                <p>Experience the ultimate table football game</p>
            </div>
            <button className="play-button" onClick={handlePlayClick}>
                Play Now
            </button>
        </div>
    );
};

export default HomePage;