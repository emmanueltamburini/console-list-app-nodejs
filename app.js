import { inquirerMenu, pause } from "./helpers/inquirer.js";

const main = async () => {
    let opt = "";
    do {
        opt = await inquirerMenu();
        console.log({ opt });
        console.log('\n');
        await pause();
    } while (opt !== '7');
};

main();
