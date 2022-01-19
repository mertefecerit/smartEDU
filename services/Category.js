const CategoryModel = require('../models/Category');

const insert = async (payload) => {
    return await CategoryModel.create(payload);
}
const read = async (id) => {
    return await CategoryModel.findById(id);
}
const readAll = async () => {
    return await CategoryModel.find();
}
const update = async (payload) => {
    return await CategoryModel.updateOne(payload);
}
const deleteOne = async (id) => {
    try {
        return await CategoryModel.findByIdAndDelete(id);
    } catch (error) {
        console.log(error);
    }
}

module.exports = {
    insert,
    read,
    readAll,
    update,
    deleteOne
}