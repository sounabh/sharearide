# Backend API Documentation

This API allows users to register and log in. It uses MongoDB for database management and includes robust validation for input data.

## Endpoints

### 1. **User Registration**
   - **Endpoint:** `/register`
   - **Method:** `POST`
   - **Description:** Registers a new user by storing their information in the database.

#### Request Body
```json
{
  "fullname": {
    "firstname": "John",
    "lastname": "Doe"
  },
  "email": "johndoe@example.com",
  "password": "password123"
}


Validations
fullname.firstname: Must be at least 3 characters long.
email: Must be a valid email address.
password: Must be at least 6 characters long.


ex
{
  "token": "jwt_token_here",
  "user": {
    "_id": "64fcb1a2e7df12345a6789bc",
    "fullname": {
      "firstname": "John",
      "lastname": "Doe"
    },
    "email": "johndoe@example.com",
    "createdAt": "2024-11-29T10:00:00.000Z",
    "updatedAt": "2024-11-29T10:00:00.000Z"
  }
},
{
  "errors": [
    {
      "msg": "Firstname should have minimum 3 character long",
      "param": "fullname.firstname",
      "location": "body"
    }
  ]
}




User Login

Endpoint: /login
Method: POST
Description: Authenticates a user and generates a JWT token.



{
  "email": "johndoe@example.com",
  "password": "password123"
}

Validations

Field	Rule	Error Message
email	Must be a valid email address.	Invalid Email.
password	Must be at least 6 characters long.	Password must be at least 6 characters long.


{
  "token": "jwt_token_here",
  "userExist": {
    "_id": "64fcb1a2e7df12345a6789bc",
    "fullname": {
      "firstname": "John",
      "lastname": "Doe"
    },
    "email": "johndoe@example.com",
    "createdAt": "2024-11-29T10:00:00.000Z",
    "updatedAt": "2024-11-29T10:00:00.000Z"
  }
}

{
  "message": "Invalid Email" || "Invalid Password"
}

Status Code	Meaning
201	Resource created successfully.
200	Request processed successfully.
400	Bad input validation errors.
401	Unauthorized access.


Notes
Authentication: The API uses JWT for user authentication. Store the token securely after login.
Database: MongoDB is used to store user details, including hashed passwords.
Dependencies:
express for routing.
mongoose for database management.
bcrypt for password hashing.
jsonwebtoken for token generation.