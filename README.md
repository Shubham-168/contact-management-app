# Contact Management API

A simple **Contact Management Application Backend** built with **Node.js, Express.js, and MongoDB** that allows users to manage their contacts (Create, Read, Update, Delete).

---

## 📌 Features
- **CRUD Operations**: Create, Read, Update, Delete contacts
- **Validation**: Ensures valid input using `express-validator`
- **Error Handling**: Returns appropriate error messages
- **No Authentication**: Simple API without authentication

---

## 🚀 Installation & Setup

### 1️⃣ Clone the Repository
```bash
git clone https://github.com/Shubham-168/contact-management-app.git
cd contact-management-api
```

### 2️⃣ Install Dependencies
```bash
npm install
```

### 3️⃣ Set Up Environment Variables
Create a `.env` file in the root folder and add:
```
PORT=5000
MONGO_URI= mongodb+srv://8014shubham:owqjf08XwWegQPV7@cluster0.5xsr7.mongodb.net/
```

### 4️⃣ Start the Server
```bash
npm start
```
_Server runs at `http://localhost:5000/`_

---

## 📌 API Endpoints

### 1️⃣ **Create a Contact**
**POST** `/contacts`
#### Request Body:
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "phoneNumber": "123-456-7890",
  "address": "123 Main St"
}
```
#### Response:
```json
{
  "_id": "65a1c3d5f0c1a8b123456789",
  "name": "John Doe",
  "email": "john@example.com",
  "phoneNumber": "123-456-7890",
  "address": "123 Main St",
  "createdAt": "2025-02-10T12:00:00.000Z"
}
```

---

### 2️⃣ **Get All Contacts**
**GET** `/contacts`
#### Response:
```json
[
  {
    "_id": "65a1c3d5f0c1a8b123456789",
    "name": "John Doe",
    "email": "john@example.com",
    "phoneNumber": "123-456-7890",
    "address": "123 Main St"
  }
]
```

---

### 3️⃣ **Get a Contact by ID**
**GET** `/contacts/:id`
#### Response:
```json
{
  "_id": "65a1c3d5f0c1a8b123456789",
  "name": "John Doe",
  "email": "john@example.com",
  "phoneNumber": "123-456-7890",
  "address": "123 Main St"
}
```

---

### 4️⃣ **Update a Contact**
**PUT** `/contacts/:id`
#### Request Body:
```json
{
  "name": "John Doe Updated",
  "email": "john.doe@example.com",
  "phoneNumber": "555-666-7777",
  "address": "789 Updated St"
}
```
#### Response:
```json
{
  "message": "Contact updated successfully"
}
```

---

### 5️⃣ **Delete a Contact**
**DELETE** `/contacts/:id`
#### Response:
    json
{
  "message": "Contact deleted successfully"
}




curl -X GET http://localhost:5000/contacts


## 📌 Technologies Used
- **Node.js** & **Express.js** - Backend framework
- **MongoDB & Mongoose** - Database & ODM
- **express-validator** - Input validation

