const Mongoose = require('mongoose');
const slugify = require('slugify');

const Schema = Mongoose.Schema;
const CategorySchema = new Schema({
    name: {
        type:String,
        required: true,
        trim: true
    },
    slug: {
        type: String,
        unique: true,
    }
},{versionKey:false, timestamps:true});

CategorySchema.pre('validate', function(next){
    this.slug = slugify(this.name,{
        replacement: '-',
        lower: true,
        strict: true,
        trim: true
    });
    next();
});

module.exports = Mongoose.model('Category', CategorySchema);