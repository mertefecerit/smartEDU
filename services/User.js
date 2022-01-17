const UserModel = require('../models/User');

const insert = async (payload) => {
    return await UserModel.create(payload);
}

const read = async (email) => {
    return await UserModel.findOne({email:email});
}

module.exports = {
    insert,
    read
}