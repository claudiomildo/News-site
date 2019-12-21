try {
    module.exports = (express) => {

        express.get('/noticias', (req, res) => {

            var connection = express.config.ConnectionDatabase()
            var noticiasModel = express.app.models.noticiasModels

            noticiasModel.getNoticias(connection, (error, result) => {
                res.render("noticias/noticias", { noticias: result })
            })
        })
    }
} catch (error) {
    console.log(error)
}