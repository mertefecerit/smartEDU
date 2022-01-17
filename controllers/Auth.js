const UserService = require('../services/User');
const bcrypt = require('bcrypt');

const login = async (req, res) => {
    try{
        const {email, password} = req.body;
        const user = await UserService.read(email);
        const pass = await bcrypt.compare(password, user.password);
        if(user && pass){
            return res.render('index');
        }else{
            return res.render('pages/user/login');
        }
    }catch(err){
        res.status(400).send("An Error Occured. : " + err);
    }

}

const logout = (req, res) => {

}

module.exports = {
    login,
    logout
}