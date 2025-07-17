# Game Scoring Application

This project is a game scoring application built with React for the frontend and Node.js for the backend. It allows users to manage game scores, track player performance, and provide a seamless gaming experience.

## Project Structure

The project is divided into two main parts: the backend and the frontend.

### Backend

The backend is built using Node.js and Express. It handles API requests and manages game logic.

- **src/app.js**: Entry point of the Node.js application. Sets up the Express server, middleware, and routes.
- **src/controllers/index.js**: Contains functions for game logic, including starting a game, updating scores, retrieving game state, and ending the game.
- **src/routes/index.js**: Exports the API routes, linking endpoints to the corresponding controller functions.
- **src/models/index.js**: Defines data structures for managing game state, including players and scores.
- **package.json**: Configuration file for npm, listing dependencies and scripts.

### Frontend

The frontend is built using React. It provides a user interface for interacting with the game scoring system.

- **src/App.js**: Main component that sets up routing and renders the appropriate pages.
- **src/components/Scoreboard.js**: Component that displays player scores and provides controls to update them.
- **src/pages/HomePage.js**: Component containing the form for entering player names and selecting the game mode.
- **src/styles/App.css**: Styles for the React application.
- **public/index.html**: Main HTML file that serves the React application.
- **package.json**: Configuration file for npm, listing dependencies and scripts.

## Getting Started

To get started with the project, follow these steps:

1. Clone the repository.
2. Navigate to the `backend` directory and run `npm install` to install backend dependencies.
3. Navigate to the `frontend` directory and run `npm install` to install frontend dependencies.
4. Start the backend server by running `node src/app.js`.
5. Start the frontend application by running `npm start` in the `frontend` directory.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any improvements or features you would like to add.

## License

This project is licensed under the MIT License.