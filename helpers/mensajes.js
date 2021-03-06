require("colors");

const mostrarMenu = () => {
    // Integramos promesas para
    // repetir el menu de forma infinita
    return new Promise(resolve => {
      //==========Mostramos menú en pantalla==========//
      console.clear();
      console.log("  ==========================".yellow);
      console.log("    SELECCIONE UNA OPCIÓN ".cyan);
      console.log("  ==========================\n".yellow);
      console.log(`  ${"1.".green} Crear tarea`);
      console.log(`  ${"2.".green} Listar tareas`);
      console.log(`  ${"3.".green} Listar tareas completadas`);
      console.log(`  ${"4.".green} Listar tareas pedientes`);
      console.log(`  ${"5.".green} Completar tarea(s)`);
      console.log(`  ${"6.".green} Borrar tarea`)
      console.log(`  ${"0.".green} Salir\n`);
    
      // 'readline' ya viene en node
      // Creamos interface para recibir
      // y enviar info por consola
      const readline = require("readline").createInterface({
          input: process. stdin,
          output: process.stdout
      });

      // Se usa con stdout para mostrar pregunta
      // En el callback se recibe la info
      readline.question("Selecione una opción: ".bold.blue, (opt) => {
        // Mostramos en input de la consola
        //console.log(opt);
        // Para no esperar más info del usuario
        readline.close();
        // Mandamos el resolve con la rpta del input
        // Por eso se coloca en este bloque de código
        resolve(opt);
      });
    });
};

const pausa = () => {
    return new Promise(resolve => {
      const readline = require("readline").createInterface({
        input: process. stdin,
        output: process.stdout
      });

      // Se usa con stdout para mostrar pregunta
      // En el callback se recibe la info
      readline.question(`\nPresione ${'ENTER'.bold.blue} para continuar\n`, (opt) => {
        readline.close();
        // Este resolve no retorna nada
        // No lleva argumentos
        resolve();
      });
    });
};

module.exports = {
    mostrarMenu,
    pausa
}
