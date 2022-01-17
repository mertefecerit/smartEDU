const CategoryModel = require('../models/Category');
const CourseModel = require('../models/Course');

const read = async (slug) => {
    const category = await CategoryModel.findOne({slug});
    let courses = await CourseModel.find({category:category._id});
    return {
        ...category._doc,
        courses
    }
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