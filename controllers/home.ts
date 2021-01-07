module.exports = ( app ) => {
    const HomeControllers = {
        index: function(req,res) {
            res.render('home/index') 
        }
    }
    return HomeControllers
}