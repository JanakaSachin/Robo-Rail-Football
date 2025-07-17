const mongoose = require('mongoose');

const playerSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    score: {
        type: Number,
        default: 0
    }
});

const gameSchema = new mongoose.Schema({
    players: [playerSchema],
    status: {
        type: String,
        enum: ['ongoing', 'finished'],
        default: 'ongoing'
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

const Player = mongoose.model('Player', playerSchema);
const Game = mongoose.model('Game', gameSchema);

module.exports = { Player, Game };