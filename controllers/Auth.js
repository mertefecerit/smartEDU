const UserService = require('../services/User');
const bcrypt = require('bcrypt');

const login = async (req, res) => {
    try{
        const {email, password} = req.body;
        const user = await UserService.read(email);
        const pass = await bcrypt.compare(password, user.password);
        if(user && pass){
            req.session.userID = user.id;
            return res.redirect('/');
        }else{
            return res.redirect('/user/login');
        }
    }catch(err){
        res.status(400).send("An Error Occured. : " + err);
    }

}

const logout = (req, res) => {
    req.session.destroy(()=>res.redirect('/'));
}

module.exports = {
    login,
    logout
}