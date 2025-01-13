# TaskSync

TaskSync is a modern task management system designed to help users efficiently organize, track, and manage their tasks and projects. The name TaskSync reflects the synchronization of tasks across multiple platforms and devices, offering seamless and real-time task management. With features like task creation, deadline tracking, completion status, and user authentication, TaskSync aims to streamline productivity and collaboration for both individuals and teams.

Features:
User Authentication: Register and login using JWT (JSON Web Token) for secure access.
Task Management: Users can create, update, and delete tasks.
Task Syncing: Tasks are synchronized across devices, ensuring real-time updates.
Completion Status: Users can mark tasks as completed and keep track of progress.
User Interface: Intuitive and simple UI for both individual and team use.
Steps to Run TaskSync:
Here are the steps to run the TaskSync project locally on your machine.

1. Clone the Repository (If Available)
If you have the project repository, clone it to your local system. For example:

bash
Copy code
git clone https://github.com/yourusername/tasksync.git
cd tasksync
2. Set Up Backend (Node.js and MongoDB)
Install Dependencies: Navigate to the backend folder and install the necessary dependencies:

bash
Copy code
cd backend
npm install
Set Up MongoDB:

Make sure you have MongoDB running locally or use a cloud-based solution like MongoDB Atlas.
Update the db.js file with your MongoDB connection string.
Set Up Environment Variables: Create a .env file in the backend root directory with the following variables:

MONGO_URI=<your-mongodb-uri>
JWT_SECRET=<your-secret-key>
PORT=5000 (or any other port you want to use)
Run the Server: Start the backend server using:

bash
Copy code
node server.js
The server should be running on http://localhost:5000.

3. Set Up Frontend (React.js)
Navigate to the Frontend Directory: If you don't already have a React app, create one inside the frontend folder:

bash
Copy code
cd frontend
npm install
Install Dependencies: If the dependencies are not installed, run:

bash
Copy code
npm install
Set Up API Integration:

In your React app, update the API URL to match the backend endpoint (http://localhost:5000 or whatever you configured).
You will need to integrate frontend components with the backend API for authentication and task management.
Run the React App: To run the React app locally:

bash
Copy code
npm start
The frontend will now be available at http://localhost:3000.

4. Testing the Application
Create a User Account:

Go to the Register page (/register) to create a new account.
After successful registration, you will be redirected to the Login page (/login).
Login:

Login with the credentials you just created.
Create and Manage Tasks:

Once logged in, you can start adding, editing, and deleting tasks.
Tasks will be displayed with options to mark them as completed or delete them.
Sync Tasks:

Tasks will sync across devices if you are logged in from multiple devices.
