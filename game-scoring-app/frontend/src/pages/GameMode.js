import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

const GameMode = () => {
    const [gameMode, setGameMode] = useState('classic');
    const history = useHistory();

    const handleGameModeChange = (mode) => {
        setGameMode(mode);
    };

    const handleStartGame = () => {
        localStorage.setItem('gameMode', gameMode);
        history.push('/scoreboard');
    };

    return (
        <div className="container game-mode-page">
            <h1>Select Game Mode</h1>
            <div className="game-modes">
                <div 
                    className={`mode-card ${gameMode === 'classic' ? 'selected' : ''}`}
                    onClick={() => handleGameModeChange('classic')}
                >
                    <h2>Classic Mode</h2>
                    <p>Play until you reach the target score</p>
                </div>
                <div 
                    className={`mode-card ${gameMode === 'timed' ? 'selected' : ''}`}
                    onClick={() => handleGameModeChange('timed')}
                >
                    <h2>Timed Mode</h2>
                    <p>Race against the clock</p>
                </div>
            </div>
            <button className="start-button" onClick={handleStartGame}>
                Start Game
            </button>
        </div>
    );
};

export default GameMode;
