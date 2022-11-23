import mongoose from "mongoose";


const  agentSchema = mongoose.Schema({


    matricule:{
        type:Number,
        required: false
    },

    nom :{
        type:String,
        required: true 
    },

    prenom :{
        type:String,
        required: true 
    }, 
    
    tel_ag :{
        type:String,
        required: true 
    },
    
    mail_ag :{
        type:String,
        required: true 
    },
    
    password :{
        type:String,
        required: true 
    },

})

export default mongoose.model('agent',  agentSchema)