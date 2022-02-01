const authorization = (req, res, next) => {
    if(req.session.user){
        return next();
    }
    return res.redirect('/user/login');
}

const isStudent = (req, res, next) => {
    if(req.session.user.role === 'student'){
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
    res.locals.user = req.session.user || false;
    next();
}

const isLoggedIn = (req, res, next) => {
    if(req.session.user){
        return res.redirect('/user/dashboard');
    }
    next();
}

module.exports = {
    authorization,
    hasLoggedIn,
    isAdmin,
    isStudent,
    isTeacherOrAdmin,
    isLoggedIn
};