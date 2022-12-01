import { inquireConfirmMenu, inquireDeleteMenu, inquirerMenu, pause, readInput } from "./helpers/inquirer.js";
import { readDb, saveDB } from "./helpers/saveFile.js";
import Tasks from "./models/tasks.js";

const main = async () => {
    let opt = "";
    const tasksDb = readDb();

    const tasks = new Tasks();
    if (tasksDb) tasks.constructorByObject(tasksDb);
    do {
        opt = await inquirerMenu();
        switch (opt) {
            case '1':
                const desc = await readInput('Description: ');
                tasks.createTask(desc);
                break;
            case '2':
                tasks.listTask();
                break;
            case '3':
                tasks.listTask(true);
                break;
            case '4':
                tasks.listTask(false);
                break;
            case '5':
                break;
            case '6':
                const id = await inquireDeleteMenu(tasks.listArray);
                const ok = await inquireConfirmMenu('Are you sure?');
                if (ok) {
                    tasks.deleteTask(id);
                }
                break;
        }

        console.log('');
        saveDB(JSON.stringify(tasks));

        await pause();
    } while (opt !== '7');
};

main();
