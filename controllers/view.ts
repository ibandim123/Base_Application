module.exports = ( app ) => {
    const createdController = {
        index(req, res) {
            res.render('view/index',)
        },
    };
    return createdController
}