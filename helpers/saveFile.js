import fs from 'fs';

const file = './db/data.json'

const saveDB = data => {

    fs.writeFileSync(file, data);
}

const readDb = () => {
    try {
        if (!fs.existsSync(file)) {
            return null;
        }
    
        return JSON.parse(fs.readFileSync(file, {encoding: 'utf-8'}));
    } catch (error) {
       console.log("There was a error with you data.json file. it was created again");
       return null;
    }
}

export {
    saveDB,
    readDb
}