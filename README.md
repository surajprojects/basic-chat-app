---

# Basic Chat App

This is a real-time chat application built using WebSockets, allowing users to create or join chat rooms and exchange messages with other members in the same room.

## Features

- **Create or Join Rooms**: Users can either create a new chat room or join an existing one.
- **Real-Time Messaging**: Messages are instantly shared with all members in the same room.
- **Room Isolation**: Messages are not shared across different rooms.
- **WebSockets for RTC**: Enables real-time communication without page refresh.

## Technologies Used

### Frontend:
- **HTML, CSS, JavaScript**: For building a simple and responsive UI.
- **GitHub Pages**: Used for hosting the frontend.

### Backend:
- **Node.js & Express.js**: Handles server-side logic.
- **Native HTTP Server**: Used alongside Express.js for efficient handling.
- **WebSockets**: Enables real-time bidirectional communication.
- **Render.com**: Used for hosting the backend.

## Deployment

- **Frontend**: Hosted on GitHub Pages - [Chat App Frontend](https://surajprojects.github.io/basic-chat-app)
- **Backend**: Hosted on Render - [Chat App Backend](https://basic-chat-app-57al.onrender.com)

## Getting Started

To run the project locally:

For the frontend:

1. Clone this repository.
2. Navigate to the frontend folder.
3. Open `index.html` in your browser using serve npm package.

For the backend:

1. Navigate to the backend folder.
2. Install dependencies using `npm run build`.
3. Start the server with `npm run start`.
4. The server runs on `http://localhost:3000`.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---