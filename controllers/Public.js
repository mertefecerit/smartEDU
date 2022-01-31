const CourseService = require('../services/Course');

const homepage = (req, res) => {
    const locals = {
        title: "SmartEdu",
    }
    res.render('index', locals);
}

const coursesPage = async (req, res) => {
    const courses = await CourseService.getAllPublic();
    const locals = {
        title: 'Courses',
        courses
    }
    res.render('pages/courses',locals);
}

const coursePage = async (req, res) => {
    const course = await CourseService.readBySlug(req.params.slug);
    const locals = {
        title: course.title,
        course
    }
    res.render('pages/course',locals);
}

module.exports = {
    homepage,
    coursesPage,
    coursePage
}