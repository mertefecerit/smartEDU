const CourseServices = require('../services/Course');

const create = (req, res) => {
    CourseServices.insert(req.body)
        .then(response => {
            res.status(201).json({
                status:true,
                message:'Success',
                result : response
            });
        })
        .catch(error => {
            res.status(400).json({
                status:false,
                message:error,
                result:null
            });
        });
}


module.exports = {
    create,
}