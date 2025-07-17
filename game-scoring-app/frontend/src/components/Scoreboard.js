import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

const Scoreboard = () => {
    const history = useHistory();
    const playerNames = JSON.parse(localStorage.getItem('playerNames')) || ['Player 1', 'Player 2'];
    const [scores, setScores] = useState(Array(playerNames.length).fill(0));
    const [gameEnded, setGameEnded] = useState(false);

    const handleScoreUpdate = (index, newScore) => {
        const updatedScores = [...scores];
        updatedScores[index] = newScore;
        setScores(updatedScores);
    };

    const handleEndGame = () => {
        setGameEnded(true);
    };

    const getWinner = () => {
        const maxScore = Math.max(...scores);
        const winnerIndexes = scores.reduce((acc, score, idx) => {
            if (score === maxScore) acc.push(idx);
            return acc;
        }, []);
        if (winnerIndexes.length === 1) {
            return playerNames[winnerIndexes[0]];
        } else {
            return winnerIndexes.map(i => playerNames[i]).join(' & ');
        }
    };

    return (
        <div className="scoreboard">
            <h2>Scoreboard</h2>
            <ul>
                {playerNames.map((name, index) => (
                    <li key={index}>
                        {name}: {scores[index]}
                        {!gameEnded && (
                            <>
                                <button className="button" onClick={() => handleScoreUpdate(index, scores[index] + 1)}>+1</button>
                                <button className="button" onClick={() => handleScoreUpdate(index, Math.max(0, scores[index] - 1))}>-1</button>
                            </>
                        )}
                    </li>
                ))}
            </ul>
            {!gameEnded ? (
                <button className="button" onClick={handleEndGame}>End Game</button>
            ) : (
                <div className="winner">
                    <h3>Winner: {getWinner()}</h3>
                    <button className="button" onClick={() => history.push('/')}>Back to Home</button>
                </div>
            )}
        </div>
    );
};

export default Scoreboard;