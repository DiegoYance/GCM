const Router = require('express').Router()
const tesis = require('../controllers/tesis')

const s3upload = require('../middlewares/s3-upload')

Router.post("/crear", s3upload.single("archivo"), tesis.crear)

Router.post("/:id/eliminar", tesis.borrarTesis)

module.exports = Router