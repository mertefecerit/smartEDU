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

module.exports = {
    read,
    readAll,
    insert
}