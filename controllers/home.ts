import { Session } from "inspector";

module.exports = ( app ) => {
    const HomeControllers = {
        index(req,res) {
            res.render('home/index') 
        },
        login(req,res) {
            const { user } = req.body;
            const { password, name } = user;
            if ( password && name ) {
                user.connect = [];
                req.session.usuario = user;
                res.redirect('/landing')
                console.log(req.body)
            }else {
                res.redirect('/');
            }
        },
        logout(req,res) {
            req.session.destroy();
            res.redirect('/');
        }
     
    };
    return HomeControllers
    
}