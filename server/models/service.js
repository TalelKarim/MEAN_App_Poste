import mongoose from 'mongoose';

const serviceSchema = mongoose.Schema({
  id_service:{
      type:Number,
      required: true
  },

  libelle_service: {
      type:String,
      required: true
  },

})



export default mongoose.model('service', serviceSchema);