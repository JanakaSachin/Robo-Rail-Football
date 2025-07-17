import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

const PlayerNames = () => {
    const [playerNames, setPlayerNames] = useState(['', '']);
    const history = useHistory();

    const handlePlayerNameChange = (index, value) => {
        const newPlayerNames = [...playerNames];
        newPlayerNames[index] = value;
        setPlayerNames(newPlayerNames);
    };

    const handleContinue = () => {
        if (playerNames[0].trim() && playerNames[1].trim()) {
            localStorage.setItem('playerNames', JSON.stringify(playerNames));
            history.push('/game-mode');
        }
    };

    return (
        <div className="container players-page">
            <h1>Enter Players</h1>
            <div className="players-form">
                {playerNames.map((name, index) => (
                    <div key={index} className="player-input-group">
                        <label htmlFor={`player${index + 1}`}>Player {index + 1}</label>
                        <input
                            id={`player${index + 1}`}
                            className="player-input"
                            type="text"
                            value={name}
                            onChange={(e) => handlePlayerNameChange(index, e.target.value)}
                            placeholder="Enter name"
                        />
                    </div>
                ))}
                <button 
                    className="continue-button"
                    onClick={handleContinue}
                    disabled={!playerNames[0].trim() || !playerNames[1].trim()}
                >
                    Continue
                </button>
            </div>
        </div>
    );
};

export default PlayerNames;
