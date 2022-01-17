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


module.exports = {
    read,
    readAll,
    insert
}