import TaskModel from '../models/task.model.js';

let editIndex = null;
export default class TaskController {
    constructor() {
        this.taskModel = TaskModel(); // instance of model
    }

    getAllTasks = (req, res) => {
        let tasks = this.taskModel.getAllTasks();
        res.render('tasks', { tasks, editIndex });
    };

    addTask = (req, res) => {
        const newTask = req.body.task;
        this.taskModel.addTask(newTask);
        res.redirect('/');
    };

    deleteTask = (req, res) => {
        let taskIndex = req.body.taskIndex;
        this.taskModel.deletetask(taskIndex);
        res.redirect('/');
    };

    updateTask = (req, res) => {
        let taskIndex = req.body.taskIndex;
        let updatedTask = req.body.updatedTask;
        this.taskModel.updateTask(taskIndex, updatedTask);
        res.redirect('/');
    };

    editTask = (req,res)=>{
        editIndex = req.query.taskIndex;
        console.log("editIndex12",req.query.taskIndex)
        res.redirect('/');
    }
}
