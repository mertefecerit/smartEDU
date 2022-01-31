const UserModel = require('../models/User');

const insert = async (payload) => {
    return await UserModel.create(payload);
}

const read = async (email) => {
    return await UserModel.findOne({email:email});
}

const getTeachers = async () => {
    return await UserModel.find({role:'teacher'});
}

const getStudents = async () => {
    return await UserModel.find({role:'student'});
}

module.exports = {
    insert,
    read,
    getTeachers,
    getStudents
}
