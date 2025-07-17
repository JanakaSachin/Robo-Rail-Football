const express = require('express');
const router = express.Router();
const gameController = require('../controllers');

// Define routes for game scoring
router.post('/start', gameController.startGame);
router.post('/score', gameController.updateScore);
router.get('/state', gameController.getGameState);
router.post('/end', gameController.endGame);

module.exports = router;