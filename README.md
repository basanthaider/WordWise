## WordWise Online Library System

### Overview
This project aims to develop an online library system that efficiently manages books and user interactions. 
The system caters to two primary user roles: librarian and normal user. 

### Actors
* **Librarian:** Responsible for managing books, user accounts, and borrow requests.
* **Normal User:** Can search for books, borrow books, and view borrowing history.

### Requirements
#### Librarian
* Manage books (create, list, update, delete)
* Filter books by ISBN and rack number
* Manage user requests (approve/reject, limit number of borrowed books, set return date)
* Generate reports on borrowed and available books

#### Normal User
* Register and login
* Search for books by various attributes
* Request to borrow a book
* View borrowing history

### System Functionality
#### Librarian
* **Login/Logout**
* **Book Management:**
  * Create, update, and delete books
  * Filter books by ISBN and rack number
* **User Management:**
  * Approve or reject user accounts
  * Manage borrow requests (approve/reject, set limits, due dates)
* **Reporting:**
  * Generate reports on borrowed and available books

#### Normal User
* **Login/Logout**
* **Registration**
* **Book Search:**
  * Search books by various attributes
* **Borrowing:**
  * Request to borrow a book
* **History:**
  * View borrowing history

### Technology Stack
  * Frontend: React
  * Backend: java spring-boot
  * Database: MySQL database
  * docker for dockerizing every service
  * docker compose file to run services  

### Project Structure
  * MVC pattern
  * Microservices Architecture
  

### Getting Started
* install docker for running containers 

