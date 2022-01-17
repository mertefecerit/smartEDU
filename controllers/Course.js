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
        res.render('pages/courses',{courses:response});
    })
    .catch(error => {
        res.status(400).send('Hata Oldu : ' + error);
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

const getOne = (req, res) => {
    CourseServices.read(req.params.id)
    .then(response => {
        const locals = {
            title: response.name
        }
        res.render('pages/course_detail',{locals, course:response})
    })
    .catch(error => res.status(400).send('Hata Oldu : ' + error));
}

module.exports = {
    create,
    list,
    deleteOne,
    update,
    getOne
}