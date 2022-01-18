const authorization = (req, res, next) => {
    if(req.session.userID){
        return next();
    }
    return res.redirect('/user/login');
}

const hasLoggedIn = (req, res, next) => {
    global.userIn = req.session.userID || false;
    next();
}

module.exports = {
    authorization,
    hasLoggedIn
};