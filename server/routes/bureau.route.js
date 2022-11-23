import express  from "express";
import mongoose from "mongoose";
// import BureauController from '../controllers/Bureau.controller.js';
const router = express.Router();
import Bureau from '../models/bureau.js'

router.get('/',(req,res) => { 
    Bureau.find()
    .then((data) =>{
        res.status(201).json({data})
    })
    .catch((err) =>{ 
        console.log(err.stack)
    })
}
)

router.get('/:reg',(req,res) => { 
    Bureau.find({region : req.params.reg})
    .then((data) =>{
        res.status(201).json({data})
    })
    .catch((err) =>{ 
        console.log(err.stack)
    })
}
)

router.post('/', (req,res,next) => {
    const bureau = new Bureau({
        ...req.body
    });
    bureau.save()
      .then(() => res.status(201).json({ message: 'Objet enregistré !'}))
      .catch(error => console.log(error.response) );
}
)


router.patch('/:id',(req,res,next) => {
    const {id : _id} = req.params;
    if(!mongoose.Types.ObjectId.isValid(_id)){
        return res.status(404).send('No post with that id ')
    }
    Bureau.updateOne({_id: req.params.id}, {
        ...req.body, _id:req.params.id
    })
    .then(() => {
        res.status(200).json({message:'Objet Modifié !'})
    })
    .catch(error => {
        res.status(400).json({error})
    })
})


router.delete('/:id',(req,res,next) => {
    Bureau.deleteOne({_id: req.params.id})
    .then(() => {
        res.status(200).json({message:"Objet supprimé !"})
    })
    .catch(error => {
        res.status(400).json({error})
    })
})


export default  router