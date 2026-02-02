# Backend Project – User Management API

A production-ready REST API built using Node.js, Express, MongoDB and JWT.

## Features
- User signup & login
- Password hashing using bcrypt
- JWT authentication
- Role-based authorization (Admin/User)
- Protected routes
- MongoDB persistence
- Clean error handling

## Tech Stack
- Node.js
- Express
- MongoDB
- Mongoose
- JWT
- bcrypt

## Setup
1. Clone the repo
2. Install dependencies
   npm install
3. Create `.env`
   PORT=3000
   MONGO_URI=your_mongo_url
   JWT_SECRET=your_secret
4. Run server
   nodemon src/app.js

## API Routes
POST /api/auth/signup  
POST /api/auth/login  
GET /api/users (admin only)
