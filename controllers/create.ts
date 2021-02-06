import { create } from "ts-node";

 //Importar os models
const profile = require('../models/profile')

module.exports = ( app ) => {
    const createdController = {
        index(req, res) {
            res.render('create/index',)
        },
        async createProfile(req,res) {
            //Gravar as informações do form
           const profiles = [];
            try {
               const user = await profile.create(req.body)

               return res.send({ user })


            } catch (err) {
                return res.status(400).send({error:"Não enviou..."})
            }
            //const { profileData } = req.body;
           
          
            //Salvar dados
            //console.log()
        }
    };
    return createdController
}
