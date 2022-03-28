const inquirer = require("inquirer");
require("colors");

// Definimos arreglo de preguntas 
// para mandarlos al "inquirer.prompt"
// revisar la doc de inquirer
const preguntas = [
    {
        type: "list",
        name: "opcion",
        message: "Qué desea hacer?",
        choices: ["opt1", "opt2", "opt3"]
    }
];

const inquirerMenu = async() => {

    // console.clear();
    console.log("  ==========================".yellow);
    console.log("    SELECCIONE UNA OPCIÓN ".cyan);
    console.log("  ==========================\n".yellow);   
    // "inquirer" trabaja en base a promesas
    // inquirer.prompt = hacer preguntas (revisar doc)
    // Lo que se reciba del inquirer.prompt,
    // se guarda en opt
    const opt = await inquirer.prompt(preguntas);
    return opt;
};

module.exports = {
    inquirerMenu
};