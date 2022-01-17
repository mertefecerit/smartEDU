const CategoryService = require('../services/Category');

const create = (req, res) => {
    CategoryService.insert(req.body)
    .then(response => res.status(200).json(response))
    .catch(err => res.status(400).json(err));
}

const list = (req, res) => {
    CategoryService.readAll()
    .then(response => res.status(200).json(response))
    .catch(err => res.status(400).json(err));
}

const getOneAndRelations = (req, res) => {
    CategoryService.read(req.params.slug)
    .then(response => {
        res.status(200).json(response)
    })
    .catch(err => res.status(400).json(err));
}

module.exports = {
    create,
    list,
    getOneAndRelations
}