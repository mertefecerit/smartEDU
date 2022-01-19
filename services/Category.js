const CategoryModel = require('../models/Category');

const insert = async (payload) => {
    try {
        return await CategoryModel.create(payload);
    } catch (error) {
        console.log(error);
    }
}
const read = async (id) => {
    try {
        return await CategoryModel.findById(id);
    } catch (error) {
        console.log(error);
    }
}
const readAll = async () => {
    try {
        return await CategoryModel.find();
    } catch (error) {
        console.log(error);
    }
    
}
const update = async (id, payload) => {
    try {
        return await CategoryModel.findByIdAndUpdate(id, payload);
    } catch (error) {
        console.log(error);
    }
    
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