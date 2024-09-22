# Task Management Application

## Overview

A simple web-based **Task Management Application** where users can:
- Add tasks
- Edit tasks
- Update tasks
- Delete tasks

The application is built with **Node.js**, **Express**, and **EJS**, with tasks being persisted in a JSON file (`taskdata.json`).

## Table of Contents

- [Features](#features)
- [Project Structure](#project-structure)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Running the Application](#running-the-application)
- [Usage](#usage)
- [Technologies Used](#technologies-used)
- [License](#license)
- [Contribution](#contribution)

## Features

- **Add Task**: Create new tasks and save them.
- **Edit Task**: Modify existing tasks.
- **Update Task**: Save updates to a task.
- **Delete Task**: Remove tasks from the list.
- **Persistent Data**: Tasks are stored in a JSON file.

## Project Structure

```plaintext
Task-management-Application/
├── src/
│   ├── controllers/
│   │   └── task.controller.js      # Controller for handling task routes
│   ├── models/
│   │   └── task.model.js           # Model for task operations (CRUD)
│   ├── public/
│   │   └── taskdata.json           # Stores the task data
│   ├── views/
│   │   └── tasks.ejs               # EJS view for displaying tasks
│   └── app.js                      # Main app configuration and routing
├── index.js                        # Entry point for the app
├── package.json                    # Project metadata and dependencies
└── README.md                       # Documentation
