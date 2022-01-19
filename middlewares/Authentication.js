const authorization = (req, res, next) => {
    if(req.session.user){
        return next();
    }
    return res.redirect('/user/login');
}

const isAdmin = (req, res, next) => {
    if(req.session.user.role === 'admin'){
        return next();
    }
    return res.redirect('/user/dashboard');
}

const isTeacherOrAdmin = (req, res, next) => {
    if(req.session.user.role === 'teacher' || req.session.user.role === 'admin'){
        return next();
    }
    return res.redirect('/user/dashboard');
}

const hasLoggedIn = (req, res, next) => {
    global.sessionUser = req.session.user || false;
    next();
}

module.exports = {
    authorization,
    hasLoggedIn,
    isAdmin,
    isTeacherOrAdmin
};