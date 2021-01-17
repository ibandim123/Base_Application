const mongoose = require('mongoose');

const Schema = mongoose.Schema;

module.exports = (app) => {

    const userSchema = new Schema(
        {
            name: {
                type        : String,   
                required    : true,     
                unique      : true,     
                trim        : true,    
                minlength   : 3         
            },
            dataBirth: {
                type        : Date,
                
            },
            gender: {
                type        :Boolean,
            },
            phone: {
                type        :Number
            }
        },
        
        {
            timestamps      : true,     // timestamps for creation and modified
        }
    );
    
    // create a model based on the schema
    const userProfile = mongoose.model('userProfile', userSchema);
    // export the model
    module.exports =  userProfile;   

}
