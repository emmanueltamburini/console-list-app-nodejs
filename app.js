const { showMenu, pause } = require('./helpers/messages');

require('colors');
console.clear();

const main = async() => {
    let opt = '';
    do {
        opt = await showMenu();
        console.log({opt});

        if (opt !== '0') await pause();
    } while (opt !== '0');
}

main();