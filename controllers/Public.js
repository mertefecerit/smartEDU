const homepage = (req, res) => {
    const locals = {
        title: "SmartEdu",
    }
    res.render('index', locals);
}

module.exports = {
    homepage
}