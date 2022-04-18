const Tarea = require("./tarea")
// Más de una tarea
class Tareas {
    _listado = {};

    constructor(){
        this._listado = {};
    };

    crearTarea(desc = ""){
        const tarea = new Tarea(desc);
        // Guardamos la tarea en el '_listado'
        // Creamos propiedad id en el '_listado'
        // esto apunta a la tarea
        this._listado[tarea.id] = tarea;
    };
}

module.exports = Tareas;