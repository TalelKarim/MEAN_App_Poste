import mongoose from "mongoose";


const depotSchema = mongoose.Schema({

    id_depot:{
        type:Number,
        required: false
    },

    service :{
        type:Number,
        required: true 
    },

    client:{
         type:Number,
        required: true 
    },

    date_envoi:{
        type:String,
        required: false 
    },
    
    bureau :{
        type:Number,
        required: true  
    },

    montant:{
        type:Number,
        required: true  
    },

    nombre:{
         type:Number,
        required: true 
    }
})

export default mongoose.model('depot', depotSchema)