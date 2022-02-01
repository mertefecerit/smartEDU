const UserModel = require('../models/User');

const insert = async (payload) => {
    return await UserModel.create(payload);
}

const read = async (email) => {
    return await UserModel.findOne({email:email});
}

const getCourses = async (id) => {
    return await UserModel.findById(id).populate('courses');
}

const getTeachers = async () => {
    return await UserModel.find({role:'teacher'});
}

const getStudents = async () => {
    return await UserModel.find({role:'student'});
}

const insertCourse = async (userId, courseId) => {
    try {
        const user =  await UserModel.findById(userId);
        if(!user.courses.includes(courseId)){
            user.courses.push(courseId);
            return user.save();
        }
        return true;
    } catch (error) {
        console.log(error);
    }
}

module.exports = {
    insert,
    read,
    getTeachers,
    getStudents,
    insertCourse,
    getCourses
}
