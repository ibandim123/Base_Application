module.exports = ( app ) => {
    const LandingController = {
        index(req, res) {
            const { usuario } = req.session;
            res.render('landing/index', { usuario })
        },
    };
    return LandingController
}