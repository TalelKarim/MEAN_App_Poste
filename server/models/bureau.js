import mongoose from 'mongoose';

const bureauSchema = mongoose.Schema({
  id_bp:{
      type:Number,
      required: true
  },

  nom_bp: {
      type:String,
      required: true
  },

  code_postal: {
    type:String,
    required:true,
  },

  region: {
      type: Number,
      required: true
  }



})



export default mongoose.model('bureau', bureauSchema);