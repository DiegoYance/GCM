const Documento = require('../models/Documento')


const AppError = require("../helpers/AppError")

/**
 * Crear y guardar un nuevo documento
**/
exports.crear = async (req, res, next) => {
    try {
        
        const body = req.body
        // Crear un nuevo documento
        const documento = new Documento({
            titulo: req.body.titulo,
            resumen: req.body.resumen,
            fecha: body.fecha.split('-')[0],
            URL_archivo: req.body.URL_archivo,
            grado: req.body.grado,
            cita: req.body.cita,
            URI: req.body.URI,
            descripcion: req.body.descripcion,
            disciplina: req.body.disciplina,
            tipo: req.body.tipo
        });
        //Crear asesores
        const asesores = Array.isArray(body.asesores) ? body.asesores : [body.asesores]
        documento.asesores = asesores
        //Crear autores
        const autores = Array.isArray(body.autores) ? body.autores : [body.autores]
        documento.autores = autores
        //Crear palabras clave
        const palabras_clave = Array.isArray(body.palabras_clave) ? body.palabras_clave : [body.palabras_clave]
        documento.palabras_clave = palabras_clave
        // Guardar un documento en la base de datos
        await documento.save()
        req.flash("success", {msg: "Tesis creada correctamente."})
        res.redirect('/admin/tesis')
    
    } catch (error) {
        next(new AppError(error, "back"))
    }
};
