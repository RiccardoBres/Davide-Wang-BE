# Barista Web App - Backend

This repository contains the backend for the barista web application developed using the MERN stack.

## Description

The backend of the barista web application handles client requests and provides an API for the frontend. It uses JSON Web Token (JWT) for authentication of the reserved area, where the page owner can access to upload the latest events they have participated in. These events are saved in the database and can be managed, including deletion if necessary.

## Technologies Used

Technologies used on the Backend include:

- Node.js
- Express.js
- MongoDB (with Mongoose ORM)
- JSON Web Token (JWT) for authentication

## Installation Instructions

To install the backend:

1. Make sure you have Node.js and MongoDB installed.
2. Clone this repository.
3. Navigate to the cloned directory and run `npm install` to install dependencies.
4. Create a `.env` file to configure environment variables, such as JWT secret and MongoDB database URL.
5. Run `npm start` to start the backend server.

## Contributions

Contributions and bug fixes are welcome. Please open a pull request to discuss proposed changes.
