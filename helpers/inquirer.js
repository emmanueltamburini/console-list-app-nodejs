import inquirer from 'inquirer';
import 'colors';

const inquirerMenu = async () => {
    const menuOpt = [
        {
            type: 'list',
            name: 'option',
            message: 'What do you want to do?',
            choices: [
                {
                    value: '1',
                    name: `${'1.'.green} Create task`
                },
                {
                    value: '2',
                    name: `${'2.'.green} List all tasks`
                },
                {
                    value: '3',
                    name: `${'3.'.green} List completed tasks`
                },
                {
                    value: '4',
                    name: `${'4.'.green} List pending tasks`
                },
                {
                    value: '5',
                    name: `${'5.'.green} Complete task(s)`
                },
                {
                    value: '6',
                    name: `${'6.'.green} Delete task(s)`
                },
                {
                    value: '7',
                    name: `${'7.'.green} Exit \n`
                }
            ]
        }
    ];
    
    console.clear();
    console.log('=================================='.green);
    console.log('         Show an option'.white);
    console.log('=================================='.green);

    const {option} = await inquirer.prompt(menuOpt);

    return option;
}

const pause = async () => {
    const pauseOpt = [
        {
            type: 'input',
            name: 'pause',
            message: `Press ${'ENTER'.green}: to continue:`
        }
    ];

    return await inquirer.prompt(pauseOpt);
}

const readInput = async (message) => {
    const question = [
        {
            type: 'input',
            name: 'desc',
            message,
            validate(value) {
                if (value.length === 0) {
                    return 'Please type a value'
                }

                return true;
            }
        }
    ];

    const {desc} = await inquirer.prompt(question); 
    return desc;
}

const inquireDeleteMenu = async (tasks = []) => {
    console.clear();
    const choices = tasks.map((task, index) => 
        ({
            value: task.id,
            name: `${((index+1).toString() + '.').green} ${task.desc}`
        }));

        choices.unshift({
            value: 0,
            name: `${'0.'.green} Cancel`           
        });

        const questions = [
            {
                type: 'list',
                name: 'id',
                message: 'What do you want to delete?',
                choices
            }
        ];

        const {id} = await inquirer.prompt(questions); 
        return id;
}

const inquireConfirmMenu = async (message) => {
    const question = [
        {
            type: 'confirm',
            name: 'ok',
            message
        }
    ];

    const {ok} = await inquirer.prompt(question); 
    return ok;
}

export {
    inquirerMenu,
    pause,
    readInput,
    inquireDeleteMenu,
    inquireConfirmMenu
}