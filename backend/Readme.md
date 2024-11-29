# User Registration API Documentation

## Overview

This document provides detailed information about the `user/register` API endpoint, including its purpose, usage, required data, status codes, and examples.

---

## Endpoint: User Registration

### **URL**
`POST /user/register`

### **Description**
This endpoint registers a new user by validating input data, hashing the password, and storing the user information in the database. A JWT token is generated and returned along with the user's details upon successful registration.

---

## Request Details

### **Headers**
| Key           | Value             | Required |
|---------------|-------------------|----------|
| `Content-Type` | `application/json` | Yes      |


### **Request Body**
The API expects a JSON object with the following fields:

| Field                | Type   | Description                                     | Required |
|----------------------|--------|-------------------------------------------------|----------|
| `fullname.firstname` | String | First name of the user (minimum 3 characters). | Yes      |
| `fullname.lastname`  | String | Last name of the user (minimum 3 characters).  | No       |
| `email`              | String | Valid email address of the user.               | Yes      |
| `password`           | String | Password of the user (minimum 6 characters).   | Yes      |



**Example Request Body**:
```json
{
  "fullname": {
    "firstname": "John",
    "lastname": "Doe"
  },
  "email": "john.doe@example.com",
  "password": "securepassword123"
}



Status Code	Description
400	Validation error. Missing or invalid fields.
500	Internal server error.



This `README.md` provides a detailed explanation of the `user/register` endpoint and covers all the required aspects in a single file. Let me know if you need further changes!
