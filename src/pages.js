//responsável pelas funções das rotas

module.exports = {
    index(request, response) {
        return response.render('index')
    },

    orphanage(request, response) {
        return response.render('orphanage')
    },

    orphanages(request, response) {
        return response.render('orphanages')
    },

    createOrphanage(request, response) {
        return response.render('create-orphanage')
    }
}
