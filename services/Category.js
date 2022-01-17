const CategoryModel = require('../models/Category');

const read = async (slug) => {
    return await CategoryModel.findOne({slug});
}

const readAll = async () => {
    return await CategoryModel.find();
}

const insert = async (payload) => {
    return await CategoryModel.create(payload);
}

const deleteOne = async (id) => {
    return await CategoryModel.findByIdAndDelete(id);
}

const update = async (payload) => {
    return await CategoryModel.findOneAndUpdate(payload);
}

module.exports = {
    read,
    readAll,
    insert,
    update,
    deleteOne
}