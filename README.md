# Anime Spin

![Anime Spin Logo](path/to/logo.png)

Anime Spin is a web application that brings the excitement of discovering new anime to your fingertips.
As the name suggests, Anime Spin allows you to spin the wheel and get a random anime recommendation,
helping you explore a vast library of anime series and movies.

## Key Features

- **Random Anime Recommendations:** With just a click of a button, Anime Spin generates a random anime
  suggestion for you to watch. Each spin reveals a new title,
  providing endless possibilities for your next anime adventure.

- **Favorite List:** Found an anime you love? Add it to your favorites list to keep track of your favorite shows.
  You can easily access this list later to revisit your chosen anime gems.

- **Backend and Server:** The application's backend and server functionality are implemented in the "server" folder.
  This enables seamless communication between the frontend and the database, ensuring efficient retrieval and storage of user data.

- **Authentication with Firebase Google Auth:** Anime Spin utilizes Firebase Google Authentication to provide a secure and hassle-free login experience.
  Users can log in with their Google accounts, allowing them to personalize their experience and access their saved favorites.

- **Technologies Used:** Anime Spin incorporates a range of powerful technologies to deliver a smooth and engaging user experience.
  The stack includes Express.js for the server, MongoDB for the database, Firebase for authentication, Tailwind CSS and DaisyUI for styling, SolidJS for the frontend framework, and the AniList API for extracting anime data. For more details, refer to `./src/extract.js`.

## Installation and Setup

To install and run Anime Spin on your local machine, follow these steps:

1. Clone the repository: `git clone https://github.com/Mohamed-Echbiy/Anime_Spin`.
2. Install dependencies: `pnpm install`.
3. Set up the server: Navigate to the "server" folder and follow the provided instructions.
4. Go inside `./server` and run npm install
5. Config your .env with your MongoDb database secret key
6. Configure Firebase: Set up your Firebase project and configure the necessary API keys and credentials.
7. Start the application server: Run `npm run dev` if you have nodemon else run `npm start` .
8. Go back to root and run `npm run dev` to launch Anime Spin in your browser

Please ensure that you have the required dependencies, such as Node.js installed on your machine before proceeding.

---

![Project Screenshot 1](./assets/src/screenshot1.png)

![Project Screenshot 2](./assets/src/screenshot2.png)

![Project Screenshot 3](./assets/src/screenshot3.png)
