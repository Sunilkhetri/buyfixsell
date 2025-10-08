# Backend Project

## Overview
This backend project is structured for user authentication and dashboard features. It separates concerns into models, controllers, routes, and middleware for maintainability and scalability.

## Project Structure
```
Back
├── server.js
├── config
│   └── database.js
├── models
│   └── userModel.js
├── controllers
│   ├── authController.js
│   └── dashboardController.js
├── routes
│   ├── authRoutes.js
│   └── dashboardRoutes.js
├── middleware
│   └── authMiddleware.js
├── package.json
├── package-lock.json
├── .env
└── README.md
```

## Getting Started

### Prerequisites
- Node.js
- npm (Node Package Manager)
- MongoDB (local or Atlas)

### Installation
1. Clone the repository:
   ```
   git clone <repository-url>
   ```
2. Navigate to the project directory:
   ```
   cd Back
   ```
3. Install dependencies:
   ```
   npm install
   ```

### Environment Setup
Create a `.env` file in the project root:
```
MONGO_URI=<your-mongodb-uri>
JWT_SECRET=<your-jwt-secret>
PORT=3000
```

### Running the Application
To start the server, run:
```
node server.js
```
The server will connect to MongoDB and listen for incoming requests.

### API Endpoints
- **POST /api/auth/register** — Register a new user
- **POST /api/auth/login** — Login and receive JWT
- **GET /api/dashboard** — Access dashboard (JWT protected)

### Contributing
Contributions are welcome! Please open an issue or submit a pull request for enhancements or bug fixes.

### License
This project is licensed under the MIT License. See the LICENSE file for details.