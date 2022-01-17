const Mongoose = require('mongoose');
const Schema = Mongoose.Schema;

const CourseSchema = new Schema({
    name: {
        type: String,
        unique: true,
        required: true,
        trim:true
    },
    desc: {
        type: String,
        required: String,
        trim:true,
    },
    img: {
        type: String,
        required: true
    },
},{versionKey:false, timestamps:true});


module.exports = Mongoose.model('Course', CourseSchema);