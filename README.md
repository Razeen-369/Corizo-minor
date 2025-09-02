# Simple Contact Manager - Web Development Project

This is a full-stack web application that demonstrates the fundamental **CRUD (Create, Read, Update, Delete)** operations. The application allows a user to manage a list of personal contacts.

---

## 🚀 Technology Stack
- **Frontend:** HTML, CSS, JavaScript (Vanilla JS)  
- **Backend:** Node.js, Express.js  
- **Database:** MongoDB (with Mongoose)  

---

## ⚠️ Important Note on Viewing This Project
This project consists of two main parts:  
- A **frontend** (the user interface you see in the browser)  
- A **backend** (the server and database that manage the data)  

👉 Simply opening the `index.html` file in a browser will **NOT** work correctly.  

The frontend needs to communicate with the backend server to save, retrieve, update, and delete contacts. Therefore, the backend server **must be running** on the local machine for the application to be fully functional.  

---

## 📦 Prerequisites
Before you begin, ensure you have the following software installed on your computer:

- [Node.js and npm](https://nodejs.org/) (npm is included with Node.js)  
- [MongoDB Community Server](https://www.mongodb.com/try/download/community)  
  - Ensure MongoDB is running in the background.  
  - You can verify this by using **MongoDB Compass** or running `mongosh` in your terminal.  

---

## 🛠️ How to Run the Application (Step-by-Step)

### 1. Download and Unzip the Project
Download the project folder and unzip it to your desired location.

### 2. Install Backend Dependencies
Open your terminal or command prompt.  
Navigate into the project folder where `server.js` and `package.json` are located:  

```bash
cd path/to/your-project-folder
``` 
Run the following command to install the required backend packages (Express, Mongoose, etc.):
```bash
npm install
```
### 3. Start the Backend Server

**This is a critical step.** The project is configured to connect to a database running on `localhost`. You must update the connection string to point to your own MongoDB database.

1.  Open the `server.js` file in your code editor.
2.  Find the `mongoose.connect(...)` line.
3.  **Add your connection string**

   
Make sure your local MongoDB server is running.
In the same terminal, run:
```bash
node server.js
```

You should see a confirmation message in the terminal, like:
```bash
Server is running on http://localhost:5000
MongoDB connected successfully!
```

👉 Keep this terminal window open. The server needs to stay running.

### 4. View the Frontend Application

Now, open the index.html file in your web browser.

The application will load and be able to communicate with your local server.

You can now add, edit, and delete contacts. All the data you create will be stored in your local MongoDB database in a collection named contacts inside the contactdb database.

### ✨ Application Features

Create: Add new contacts via the form.

Read: View a list of all saved contacts.

Update: Edit the information of an existing contact.

Delete: Remove a contact from the list.
