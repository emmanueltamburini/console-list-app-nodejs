import { inquirerMenu, pause, readInput } from "./helpers/inquirer.js";
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
                console.log(desc);
                break;
            case '2':
                console.log(tasks.listArray);
                break;
            case 3:
                
                break;
        }

        console.log('\n');
        saveDB(JSON.stringify(tasks));

        await pause();
    } while (opt !== '7');
};

main();
