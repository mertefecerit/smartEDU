const CourseModel = require('../models/Course');

const read = async (slug) => {
    return await CourseModel.findOne({slug});
}

const readAll = async () => {
    return await CourseModel.find();
}

const insert = async (payload) => {
    return await CourseModel.create(payload);
}

const deleteOne = async (id) => {
    return await CourseModel.findByIdAndDelete(id);
}

const update = async (payload) => {
    return await CourseModel.findOneAndUpdate(payload);
}

module.exports = {
    read,
    readAll,
    insert,
    update,
    deleteOne
}