import Task from "./task.js";
import 'colors';
export default class Tasks {
    _list = {};

    get listArray () {
        return Object.values(this._list);
    }

    constructor() {
        this._list = {}
    }

    constructorByObject(object) {
        Object.keys(object._list).map(key => this.createTaskByObject(object._list[key]));
    }

    createTask(desc = '') {
        const task = new Task(desc);

        this._list[task.id] = task;
    }

    createTaskByObject(object) {
        const task = new Task();
        task.createTask(object.id, object.desc, object.completedIn);

        this._list[task.id] = task;
    }

    listTask(complete = null) {
        const currentTaskList = complete === null ? this.listArray : this.listArray.filter(element => complete ? (element.completedIn) : !(element.completedIn));
        console.log();
        currentTaskList.forEach((element, index) => {
            const completedIn = complete ? element.completedIn.green : 'Complete'.green;
            console.log(`${((index+1).toString() + '.').green} ${element.desc} :: ${element.completedIn ? completedIn : 'Pendent'.red}`)
        });
    }

    deleteTask(id = '') {
        if(this._list[id]) {
            console.log(`Task '${this._list[id].desc}' has been deleted successfully`)
            delete this._list[id];
        }
    }

    markTasks(ids = []) {
        this.listArray.forEach(element => {
            if (ids.includes(element.id)) {
                element.completedIn = element.completedIn ? element.completedIn : new Date().toISOString();  
            } else {
                element.completedIn = null;
            }
        });
    }
}  