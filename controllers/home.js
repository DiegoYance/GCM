const Documento = require('../models/Documento')
const AppError = require("../helpers/AppError")

exports.home = async (req, res, next) => {
    try {
        const tesis = await Documento.find().sort({"createdAt": -1}).limit(10)
        return res.render('home/home', {title: "Inicio", layout: "main", tesis});
    } catch (error) {
        next(new AppError(error))        
    }
}
