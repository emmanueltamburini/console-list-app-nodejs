import Task from "./task.js";
export default class Tasks {
    _list = {};

    get listArray () {
        return Object.values(this._list);
    }

    constructor() {
        this._list = {}
    }

    createTask(desc = '') {
        const task = new Task(desc);

        this._list[task.id] = task;
    }
}  