module.exports = ( app ) => {
    const createdController = {
        index(req, res) {
            res.render('view/index',)
        },
        list(req,res) {
            return res.json(req.user)
        }
    };
    return createdController
}