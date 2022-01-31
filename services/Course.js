const CourseModel = require('../models/Course');

const insert = async (payload) => {
    try {
        return await CourseModel.create(payload);
    } catch (error) {
        console.log(error);
    }
}
const readBySlug = async (slug) => {
    try {
        return await CourseModel.findOne({slug});
    } catch (error) {
        console.log(error);
    }
}
const read = async (id) => {
    try {
        return await CourseModel.findById(id);
    } catch (error) {
        console.log(error);
    }
}
const getAllPublic = async () => {
    try {
        return await CourseModel.find();
    } catch (error) {
        console.log(error);
    } 
}
const readAll = async (parameters) => {
    try {
        return await CourseModel.find(parameters).populate('user');
    } catch (error) {
        console.log(error);
    } 
}
const update = async (id, payload) => {
    try {
        await CourseModel.findOneAndUpdate({_id:id},payload);
    } catch (error) {
        console.log(error);
    }  
}
const deleteOne = async (id) => {
    try {
        return await CourseModel.findByIdAndDelete(id);
    } catch (error) {
        console.log(error);
    }
}

module.exports = {
    insert,
    read,
    readBySlug,
    readAll,
    update,
    deleteOne,
    getAllPublic
}