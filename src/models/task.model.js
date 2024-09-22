import fs from 'fs'
import path from 'path'

const taskOperation = ()=>{
    let filepath = path.resolve('src','public','taskdata.json');
    const readFileData = ()=>{
        let data = fs.readFileSync(filepath, 'utf8');
        return JSON.parse(data);
    }

    const writeFileData = (tasks) =>{
        fs.writeFileSync(filepath, JSON.stringify(tasks, null, 2));
    }

    const getAllTasks = () => { return readFileData()};
    const addTask = (task)=>{
        let tasks = readFileData();
        tasks.push(task);
        writeFileData(tasks);
    }

    const deletetask = (index)=> {
        let tasks = readFileData();
        tasks.splice(index,1);
        writeFileData(tasks);
    }

    const updateTask = (index, updatetask)=>{
        let tasks = readFileData();
        tasks[index] = updatetask;
        writeFileData(tasks)
    }

    return {getAllTasks, addTask, updateTask, deletetask}
}

export default taskOperation;

