# WordWise Online Library Management System

## Description

WordWise is a full-stack application designed as a library management system. It is built with a microservice architecture, separating the backend user service (Spring Boot) from the frontend (React). The application allows users to manage books, users, and potentially other library-related functionalities, providing a comprehensive solution for digital library operations.



## Features

- **Microservice Architecture**: Separated backend (Spring Boot) and frontend (React) for scalability and maintainability.
- **User Management**: Functionality for user registration, login, and management.
- **Book Management**: Features for adding, updating, and deleting books.
- **Librarian Interface**: Dedicated interface for librarians to manage users and books.
- **Search and Browse**: Users can search and browse available books.
- **User History**: Tracks user activity and borrowing history.
- **Responsive Design**: Frontend built with React and Bootstrap for a responsive user experience.
- **Database Integration**: Utilizes MySQL for data persistence.



## Installation

To set up and run WordWise locally, you will need to set up both the backend (UserServiceApp) and the frontend (ReactServiceApp).

### Prerequisites

- Java Development Kit (JDK) 21 or higher
- Maven (for building the Spring Boot application)
- Node.js and npm (for the React application)
- MySQL database server

### Backend Setup (UserServiceApp)

1.  **Navigate to the backend directory:**
    ```bash
    cd WordWise/library-microservice/UserServiceApp
    ```
2.  **Database Configuration:**
    Create a MySQL database (e.g., `wordwise_db`). Update the `src/main/resources/application.properties` file with your database credentials:
    ```properties
    spring.datasource.url=jdbc:mysql://localhost:3306/wordwise_db?useSSL=false&serverTimezone=UTC
    spring.datasource.username=your_mysql_username
    spring.datasource.password=your_mysql_password
    spring.jpa.hibernate.ddl-auto=update
    ```
3.  **Build and Run:**
    ```bash
    mvn clean install
    mvn spring-boot:run
    ```
    The backend service will typically run on `http://localhost:8080`.

### Frontend Setup (ReactServiceApp)

1.  **Navigate to the frontend directory:**
    ```bash
    cd WordWise/library-microservice/ReactServiceApp
    ```
2.  **Install Dependencies:**
    ```bash
    npm install
    ```
3.  **Run the React Application:**
    ```bash
    npm start
    ```
    The frontend application will typically open in your browser at `http://localhost:3000`.



## Usage

Once both the backend and frontend services are running, you can access the WordWise application through your web browser. 

- **Login/Signup**: Register a new account or log in with existing credentials.
- **Browse Books**: Explore the collection of books available in the library.
- **Manage Books (Librarian)**: If you have librarian privileges, you can add, edit, or remove books from the system.
- **Manage Users (Librarian)**: Librarians can also manage user accounts.
- **View History**: Track your borrowing history and other activities.
