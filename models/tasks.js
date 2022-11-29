import Task from "./task.js";
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
}  