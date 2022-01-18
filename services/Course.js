const CourseModel = require('../models/Course');

const insert = async (payload) => {
    return await CourseModel.create(payload);
}
const read = async (slug) => {
    return await CourseModel.findOne({slug});
}
const readAll = async () => {
    return await CourseModel.find();
}
const update = async (payload) => {
    return await CourseModel.updateOne(payload);
}
const deleteOne = async (id) => {
    return await CourseModel.findIdAndDelete(id);
}

module.exports = {
    insert,
    read,
    readAll,
    update,
    deleteOne
}