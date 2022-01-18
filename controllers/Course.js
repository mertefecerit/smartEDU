const CourseService = require('../services/Course');

const create = async (req, res) => {
    try{
        await CourseService.insert(req.body);
        //res.redirect('/management/course');
    }catch(err){
        res.render(500).send('An Error Occurred. : ' + err);
    }
}

module.exports = {
    create,
}