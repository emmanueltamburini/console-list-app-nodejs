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
        task.createTask(object.id, object.desc, object.completeIn);

        this._list[task.id] = task;
    }

    listTask(complete = null) {
        const currentTaskList = complete === null ? this.listArray : this.listArray.filter(element => complete ? (element.completeIn) : !(element.completeIn));
        console.log();
        currentTaskList.forEach((element, index) => {
            const completeIn = complete ? element.completeIn.green : 'Complete'.green;
            console.log(`${((index+1).toString() + '.').green} ${element.desc} :: ${element.completeIn ? completeIn : 'Pendent'.red}`)
        });
    }
}  