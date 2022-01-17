const Mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const Schema = Mongoose.Schema;

const UserSchema = new Schema({
    name: {
        type:String,
        required:true,
        trim:true
    },
    email: {
        type:String,
        required:true,
        unique:true,
        trim:true,
        lowercase:true,
    },
    password: {
        type:String,
        required: true,
        trim: true,
    }
},{versionKey:false, timestamps:true});

UserSchema.pre('save', function(next){
    const user = this;
    bcrypt.hash(user.password, 10, (err, hash) => {
        if(err) throw err;
        user.password = hash;
        next();
    });
});

module.exports = Mongoose.model('User',UserSchema);
