# QuickTasks-Mini-Issue-Tracker

## Goal: A polished, small full-stack app showing your ability to:
1. Build with Quarkus and Vue.js
2. Work like an open source contributor (issues, reviews, commits)
3. Handle both frontend and backend tasks

## Setup project (quarkus:dev, RESTEasy) - Backend Application
1. Create Task entity with fields:
  id, title, description, status
2. Implement basic REST endpoints:
  1. GET /tasks
  2. POST /tasks
  3. PUT /tasks/{id} (to update status)

## Create a Vue app with:
1. Task input form
2. Task list view
3. Status dropdown for each task (e.g., "open", "in progress", "done")
4. Fetch data from Quarkus REST API using Axios

## intial repository setup
1. git clone https://github.com/JavascriptFreak/QuickTasks-Mini-Issue-Tracker.git
2. cd QuickTasks-Mini-Issue-Tracker

## setup for the frontend 
1. npm create vite@latest quicktasks-frontend --template vue
2. cd quicktasks-frontend
3. npm install
4. npm install axios

## Dependencies for the Quarkus
1. quarkus-resteasy: For building RESTful APIs.
2. quarkus-hibernate-orm-panache: To simplify interactions with JPA (Java Persistence API).
3. quarkus-jdbc-h2: H2 database for development (you can switch to any database later).



