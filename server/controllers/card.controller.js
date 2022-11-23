import Card from '../models/card.js'

export const getAllElements = (req,res,next) => { 
    Card.find()
    .then((data) =>{
        res.status(201).json(data)
    })
    .catch((err) =>{ 
        console.log(err.stack)
    })
}


const createElement = (req,res,next) => {
    const card = new Card({
        ...req.body
    });
    
    card.save()
      .then(() => res.status(201).json({ message: 'Objet enregistré !'}))
      .catch(error => res.status(400).json({ error }));
      }

