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

const list = (req, res) => {
    CourseServices.readAll()
    .then(response => {
        res.status(200).json({
            status: true,
            message: 'Success',
            result : response
        });
    })
    .catch(error => {
        res.status(400).json({
            status: false,
            message: error,
            result: null
        });
    });
}

const deleteOne = (req, res) => {
    CourseServices.deleteOne(req.params.id)
    .then(response => {
        res.status(200).json({
            status: true,
            message: 'Success',
            result : response
        });
    })
    .catch(error => {
        res.status(400).json({
            status: false,
            message: error,
            result: null
        });
    });
}

const update = (req, res) => {
    CourseServices.update(req.body)
    .then(response => {
        res.status(200).json({
            status: true,
            message: 'Success',
            result : response
        });
    })
    .catch(error => {
        res.status(400).json({
            status: false,
            message: error,
            result: null
        });
    });
}

module.exports = {
    create,
    list,
    deleteOne,
    update

}