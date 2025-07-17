# Game Scoring Application - Backend

This is the backend part of the Game Scoring Application built with Node.js and Express. 

## Features

- RESTful API for managing game scores
- Endpoints for starting a game, updating scores, retrieving game state, and ending the game
- Middleware for handling requests and responses

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm (Node Package Manager)

### Installation

1. Clone the repository:
   ```
   git clone <repository-url>
   ```

2. Navigate to the backend directory:
   ```
   cd game-scoring-app/backend
   ```

3. Install the dependencies:
   ```
   npm install
   ```

### Running the Application

To start the server, run:
```
npm start
```

The server will run on `http://localhost:5000` by default.

### API Endpoints

- `POST /api/start-game`: Starts a new game
- `POST /api/update-score`: Updates the score of a player
- `GET /api/game-state`: Retrieves the current game state
- `POST /api/end-game`: Ends the current game

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any enhancements or bug fixes.

## License

This project is licensed under the MIT License.