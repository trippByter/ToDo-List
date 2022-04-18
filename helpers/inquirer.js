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
        // Los choices se trabajan mejor en objetos
        choices: [
            {
                value: "1",
                name: "1. Crear tarea",
            },
            {
                value: "2",
                name: "2. Listar tareas",
            },
            {
                value: "3",
                name: "3. Listar tareas completadas",
            },
            {
                value: "4",
                name: "4. Listar tareas pendientes",
            },
            {
                value: "5",
                name: "5. Completar tarea(s)",
            },
            {
                value: "6",
                name: "6. Borrar tarea",
            },
            {
                value: "0",
                name: "0. Salir",
            }
        ]
    }
];

const inquirerMenu = async() => {

    console.clear();
    console.log("  ==========================".yellow);
    console.log("    SELECCIONE UNA OPCIÓN ".cyan);
    console.log("  ==========================\n".yellow);   
    // "inquirer" trabaja en base a promesas
    // inquirer.prompt = hacer preguntas (revisar doc)
    // Lo que se reciba del inquirer.prompt,
    // se guarda en opt.
    //Lo mostramos mediante "opcion"
    const {opcion} = await inquirer.prompt(preguntas);
    return opcion;
};

const pausa = async() => {
    const preguntasPausa = [
        {
            type: "input",
            name: "enter",
            message: `Presione ${"ENTER".bold.blue} para continuar.`
        }
    ];
    console.log("\n");
    await inquirer.prompt(preguntasPausa);
};

// Aquí enviamos el valor que quiero 
// imprimir por consola
const leerInput = async(message) => {
    const preguntasInput = [
        {
            type: "input", // Para que la persona pueda escribir
            name: "desc",
            message,
            validate(value){
                if(value.length === 0){
                    return "Por favor ingrese un valor";
                }
                // Si pasa la validacion, return true
                return true;
            }   

        } 
    ];

    // Aquí devuelve un objeto
    const {desc} = await inquirer.prompt(preguntasInput);
    return desc;
};


module.exports = {
    inquirerMenu,
    pausa,
    leerInput
};