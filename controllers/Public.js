const CourseService = require('../services/Course');
const UserService = require('../services/User');

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

const enrollCourse = async (req, res) => {
    await UserService.insertCourse(req.session.user._id, req.body.courseId);
    res.redirect('/user/dashboard');
}

module.exports = {
    homepage,
    coursesPage,
    coursePage,
    enrollCourse
}