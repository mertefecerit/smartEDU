const Mongoose = require('mongoose');
const slugify = require('slugify');

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
    slug: {
        type: String,
        unique: true,
    }
},{versionKey:false, timestamps:true});

CourseSchema.pre('validate', function(next){
    this.slug = slugify(this.name,{
        replacement: '-',
        lower: true,
        strict: true,
        trim: true
    });
    next();
});

module.exports = Mongoose.model('Course', CourseSchema);