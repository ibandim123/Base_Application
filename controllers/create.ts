
module.exports = ( app ) => {
    const createdController = {
        index(req, res) {
            res.render('create/index',)
        },
        createProfile(req,res) {
            //Gravar as informações do form
            const { profileData  } = req.body;

            
            console.log(profileData)
           
        }
    };
    return createdController
}