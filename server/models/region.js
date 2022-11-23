import mongoose from 'mongoose';

const regionSchema = mongoose.Schema({
  id_region:{
      type:Number,
      required: true
  },

  libelle_region: {
      type:String,
      required: true
  },

})



export default mongoose.model('region', regionSchema);