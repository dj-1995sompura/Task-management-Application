// import modeles
import express from 'express'
import bodyParser from 'body-parser';
import TaskController from './src/controllers/task.controller.js' // call controller
let app = express(); //instance of express

// call middleware
app.use(bodyParser.urlencoded({extended:false}));

// set engine and path
app.set('view engine', 'ejs');
app.set('views', './src/views');

let taskController = new TaskController(); // instance of controller

// routes
app.get('/', taskController.getAllTasks);
app.post('/add-task', taskController.addTask);
app.get('/edit-task', taskController.editTask);
app.post('/update-task', taskController.updateTask);
app.post('/delete-task', taskController.deleteTask);

export default app
