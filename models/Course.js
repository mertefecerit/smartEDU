const Mongoose = require('mongoose');
const slugify = require('slugify');

const Schema = Mongoose.Schema;
const CourseSchema = new Schema({
    name: {
        type: String,
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
    },
    category: {
        type: Mongoose.Schema.Types.ObjectId,
        ref: 'Category'
    },
    user: {
        type: Mongoose.Schema.Types.ObjectId,
        ref: 'User'
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

// VERY IMPORTANT SECTION :D
CourseSchema.pre('findOneAndUpdate', function(next){
    this._update.slug = slugify(this._update.name,{
        replacement: '-',
        lower: true,
        strict: true,
        trim: true
    });
    next();
});
// VERY IMPORTANT SECTION :D

module.exports = Mongoose.model('Course', CourseSchema);