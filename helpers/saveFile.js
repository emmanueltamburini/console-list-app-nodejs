import fs from 'fs';

const file = './db/data.json'

const saveDB = data => {

    fs.writeFileSync(file, data);
}

const readDb = () => {
    if (!fs.existsSync(file)) {
        return null;
    }

    return JSON.parse(fs.readFileSync(file, {encoding: 'utf-8'}));
}

export {
    saveDB,
    readDb
}