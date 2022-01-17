const UserModel = require('../models/User');

const insert = async (payload) => {
    return await UserModel.create(payload);
}

module.exports = {
    insert
}