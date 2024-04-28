This repository contains a frontend React project and a backend Node.js project. Follow the steps below to set up and run both projects locally.

*****Frontend (React) Setup*************
1) Clone the Repository

   git clone <repository_url>
  cd <repository_directory>

2)Install Dependencies

 cd frontend
npm install

3)Create Environment VariablesCreate a .env file in the frontend directory and add necessary environment variables.

  REACT_APP_API_URL=http://localhost:5000/api

  
4) Run the Application
    npm start
The React application will start at http://localhost:3000.


****************Backend (Node.js) Setup****************
 *) Navigate to Backend Directory
     cd <repository_directory>/backend

*) Install Dependencies
    npm install


*) Set Up Environment VariablesCreate a .env file in the backend directory and add necessary environment variables, including any secret keys.

PORT=5000
DB_URI=<your_database_connection_string>
SECRET_KEY=<your_secret_key>
Replace <your_database_connection_string> and <your_secret_key> with your actual database connection string and a secure secret key for JWT authentication.

*)Run the Server
npm start

Environment Variables and Secret Keys
Sensitive information like database credentials or secret keys should never be hardcoded into your source code. Use a .env file to manage these variables securely:

Create a .env File:
In each project directory (frontend and backend), create a .env file.
Add Environment Variables:
Define your environment variables inside the .env file in the format KEY=VALUE.
Access Environment Variables:
Use process.env.KEY in your code to access the values from the .env file.
Example .env (backend):

By following these steps, you'll be able to set up and run a full-stack application using React for the frontend and Node.js for the backend, with secure management of environment variables including secret keys.
