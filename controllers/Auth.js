const UserService = require('../services/User');
const bcrypt = require('bcrypt');

const login = async (req, res) => {
    try{
        const {email, password} = req.body;
        const user = await UserService.read(email);
        if(user){
            const pass = await bcrypt.compare(password, user?.password || 'false');
            if(pass){
                // create new object because user variable has mongoose wrapper.
                // Why this way, because I don't want new user query for dashboard.
                // User data transport to session
                const sessionUser = {
                    ...user._doc
                }
                delete sessionUser.password
                req.session.user = sessionUser;
                return res.redirect('/user/dashboard');
            }
            // PASSWORD WRONG
            await req.flash('fail','Login Failed');
            return res.redirect('/user/login'); 
        }else{
            // USER NOT FOUND
            await req.flash('fail','Login Failed');
            return res.redirect('/user/login');
        }
    }catch(err){
        // OTHER ERRORS
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