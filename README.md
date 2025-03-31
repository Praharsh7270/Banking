# Banking Application

A secure and efficient banking application built with Node.js, Express, and MongoDB for backend services. The application uses JWT for authentication, bcrypt.js for password hashing, and Tailwind CSS for a clean UI.

## Features
- **User Authentication**: Secure login and registration with JWT.
- **Database Integration**: MongoDB with Mongoose for data management.
- **Secure Password Handling**: bcrypt.js for hashing passwords.
- **Environment Variables**: dotenv for managing sensitive data.
- **Middleware Support**: Cookie-parser for handling cookies.
- **Frontend Styling**: Tailwind CSS for a modern UI.

## Tech Stack
- **Backend**: Node.js, Express, MongoDB
- **Authentication**: JWT, bcrypt.js
- **Styling**: Tailwind CSS
- **Environment Management**: dotenv

## Installation

### Prerequisites
- Node.js (v16+ recommended)
- MongoDB installed and running

### Steps to Run the Project

1. **Clone the Repository**
   ```sh
   git clone https://github.com/your-repo/banking-app.git
   cd banking-app
   ```

2. **Install Dependencies**
   ```sh
   npm install
   ```

3. **Set Up Environment Variables**
   Create a `.env` file in the root directory and add the following:
   ```env
   MONGO="your-mongodb-connection-string"
   VITE_FIREBASE_API_KEY="your-firebase-api-key"
   JWT_SECRET="your-secret-key"
   ```

4. **Start the Development Server**
   ```sh
   npm run dev
   ```
   The app will be available at `http://localhost:3000`.

5. **Install Dependencies Manually (If Needed)**
   ```sh
   npm install bcryptjs cookie-parser dotenv express jsonwebtoken mongoose nodemon
   ```

## Dependencies
```json
"dependencies": {
    "bcryptjs": "^2.4.3",
    "cookie-parser": "^1.4.6",
    "dotenv": "^16.3.1",
    "express": "^4.18.2",
    "jsonwebtoken": "^9.0.2",
    "mongoose": "^8.0.2",
    "nodemon": "^3.0.2"
}
```

## Folder Structure
```
banking-app/
│── src/
│   ├── models/         # Mongoose models
│   ├── routes/         # Express routes
│   ├── controllers/    # Business logic and API controllers
│   ├── middleware/     # Authentication and security middleware
│   ├── config/         # Configuration files
│   ├── server.js       # Entry point
│── public/             # Static assets
│── .env                # Environment variables
│── package.json        # Dependencies and scripts
│── tailwind.config.js  # Tailwind CSS configuration
```

## Contributing
Feel free to submit pull requests or report issues to improve the project.


