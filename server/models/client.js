import mongoose from 'mongoose';

const clientSchema = mongoose.Schema({
  id_client:{
      type:Number,
      required: false
  },

  libelle: {
      type:String,
      required: true
  },

  telephone: {
    type:Number,
    required:true,
  },

   fax: {
      type:String,
      required: true
  },

  adresse: {
      type:String,
      required:true 
  },
  
  mail: {
      type:String,
      required: true
  }


})



export default mongoose.model('client', clientSchema);