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
    },
    role:{
        type: String,
        enum:['admin','teacher','student'],
        default:'student'
    },
    courses: [{
        type: Mongoose.Schema.Types.ObjectId,
        ref:'Course',
    }]
},{versionKey:false, timestamps:true});

UserSchema.pre('save', function(next){
    const user = this;
    // Coyote catcher :D
    if(user.role === 'admin'){
        user.role = 'student'
    }
    if(user.isModified('password')){
        user.password = bcrypt.hashSync(user.password, 10);
    }
    next();
});

module.exports = Mongoose.model('User',UserSchema);
