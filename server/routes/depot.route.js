import express  from "express";
import mongoose from "mongoose";
// import DepotController from '../controllers/Depot.controller.js';
const router = express.Router();
import Depot from '../models/depot.js'

router.get('/filter',(req,res) => {
    const filters = req.query; 
    let date1 = new Date(filters.date_s)
    let date2 = new Date(filters.date_e)
    let number_one = date1.getTime();
    let number_two = date2.getTime();

    console.log(number_one, number_two, number_one - number_two)
    Depot.find()
    .then((data) =>{
        const filteredDepot = data.filter( depot => {
            const date = new Date(depot.date_envoi);
            const number =  date.getTime()
            let isValid = true;
            for (let filter in filters){
                console.log(filter, depot[filter], filters[filter]);
              depot[filter] != null ?  isValid = isValid && depot[filter] == filters[filter] && number < number_two && number > number_one : null;
            }
            return isValid
        })
        res.status(201).json({filteredDepot})
    })
    .catch((err) =>{ 
        console.log(err.stack)
    })
}
)

//get with filters: 
  
  

router.get('/',(req,res) => { 
    Depot.find()
    .then((data) =>{
        res.status(201).json({data})
    })
    .catch((err) =>{ 
        console.log(err.stack)
    })
}
)



router.post('/', (req,res,next) => {
    const depot = new Depot({
        ...req.body
    });
    depot.save()
      .then(() => res.status(201).json({ message: 'Objet enregistré !'}))
      .catch(error => console.log(error.response) );
}
)


router.patch('/:id',(req,res,next) => {
    const {id : _id} = req.params;
    if(!mongoose.Types.ObjectId.isValid(_id)){
        return res.status(404).send('No post with that id ')
    }
    Depot.updateOne({_id: req.params.id}, {
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
    Depot.deleteOne({_id: req.params.id})
    .then(() => {
        res.status(200).json({message:"Objet supprimé !"})
    })
    .catch(error => {
        res.status(400).json({error})
    })
})


export default  router