
exports.test = (req, res, next) => {
    res.render('test', {title: "Página de inicio", layout: "main"});
}


exports.home = (req, res, next) => {
    res.render('home/home', {title: "Home", layout: "main"});
}
exports.buscar = (req, res, next) => {
    res.render('home/buscar', {title: "Home", layout: "main"});
}

exports.comunidad_coleccion = (req, res, next) => {
    res.render('Buscador/comunidad_coleccion/comunidad_coleccion', {title: "Comunidad & Coleccion", layout: "main"});
}

exports.palabra_clave = (req, res, next) => {
    res.render('Buscador/palabra_clave/palabra_clave', {title: "Palabra Clave", layout: "main"});
}