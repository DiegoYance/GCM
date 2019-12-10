const EscuelaProfesional = require('../models/EscuelaProfesional')
const Tipo = require('../models/Tipo')
const Facultad = require('../models/Facultad')
const AreaAcademica = require('../models/AreaAcademica')
const Documento = require('../models/Documento')

const AppError = require("../helpers/AppError")


exports.homeadmin = (req, res, next) => {

    const query = req.query;

    if (query.usuario == "admin" && query.clave == "admin")
        res.redirect('/admin/tesis');
    else
        res.render('Admin/loginadmin', { title: "Home del Admin", msj: "Usuario o clave invalida", layout: "main2" });

}

exports.tesis = async (req, res, next) => {
    try {

        const eaps = await EscuelaProfesional.find().sort({"name": -1})
        const tipos = await Tipo.find().sort({"name": -1})
        const facultades = await Facultad.find().sort({"name": -1})
        const documentos = await Documento.find().sort({"createdAt": -1}).populate({
            path: "tipo", ref: "tipo", populate: {path: "escuela_profesional", ref: "escuelaprofesional", populate: {path: "facultad", ref:"facultad", populate: {path: "area_academica", ref:"areaacademica"}}}
        })
        
        res.render('Admin/Tesis', { title: "Tesis", layout: "main2", eaps, tipos, facultades, documentos });
    } catch (error) {
        next(new AppError(error, "back"))
    }
}

exports.loginadmin = (req, res, next) => {

    res.render('Admin/loginadmin', { title: "login Admin", layout: "main2" });
}