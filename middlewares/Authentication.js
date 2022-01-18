const authorization = (req, res, next) => {
    if(req.session.user){
        return next();
    }
    return res.redirect('/user/login');
}

const hasLoggedIn = (req, res, next) => {
    global.user = req.session.user || false;
    next();
}

module.exports = {
    authorization,
    hasLoggedIn
};