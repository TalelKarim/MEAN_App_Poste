import express  from "express";
import mongoose from "mongoose";
// import AgentController from '../controllers/Agent.controller.js';
const router = express.Router();
import Agent from '../models/agent.js'
import bcrypt, { hash } from 'bcrypt'

router.get('/',(req,res) => { 
    Agent.find()
    .then((data) =>{
        res.status(201).json({data})
    })
    .catch((err) =>{ 
        console.log(err.stack)
    })
}
)


router.post('/', (req,res,next) => {
    bcrypt.hash(req.body.password, 10)
    .then( hash => {
        const agent = new Agent({
          ...req.body,
          password: hash
        })
        agent.save()
        .then(() => res.status(201).json({ message: 'Objet enregistré !'}))
        .catch(error => console.log(error.response) );})
    .catch(error => res.status(500).json({ error }))   
}
)


router.post('/login', (req, res, next) => {
    Agent.findOne({ mail_ag: req.body.mail_ag })
        .then(agent => {
            if (!agent) {
                return res.status(401).json({ message: 'Paire login/mot de passe incorrecte'});
            }
            bcrypt.compare(req.body.password, agent.password)
                .then(valid => {
                    if (!valid) {
                        return res.status(401).json({ message: 'Paire login/mot de passe incorrecte' });
                    }
                    res.status(200).json({
                        agentId: agent._id,
                        token: 'TOKEN'
                    });
                })
                .catch(error => res.status(500).json({ error }));
        })
        .catch(error => res.status(500).json({ error }));
 })

router.patch('/:id',(req,res,next) => {
    const {id : _id} = req.params;
    if(!mongoose.Types.ObjectId.isValid(_id)){
        return res.status(404).send('No post with that id ')
    }
    Agent.updateOne({_id: req.params.id}, {
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
    Agent.deleteOne({_id: req.params.id})
    .then(() => {
        res.status(200).json({message:"Objet supprimé !"})
    })
    .catch(error => {
        res.status(400).json({error})
    })
})


export default  router