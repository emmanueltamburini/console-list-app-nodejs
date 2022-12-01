import { v4 as uuidv4 } from 'uuid';

export default class Task {
    id = '';
    desc = '';
    completedIn = null;

    constructor(desc) {
        this.id = uuidv4();
        this.desc = desc;
    }

    createTask(id, desc, completedIn) {
        this.id = id;
        this.desc = desc;
        this.completedIn = completedIn;
    }
}  