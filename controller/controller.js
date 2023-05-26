const User=require('../Model/schema');
const express =require('express');
const app = express();

app.post('/create',async (req, res) =>{
    const user = new User({
        username,
        email,
        phone,

 })

 await user.save()
 res.status(200).json(user)

})

exports.getAllUsers = async(req, res)=>{
    const user = await User.find()
    res.status(200).json(user)
}
app.put('/update/:id',async(req,res)=>{
    const user = await User.findByIdAndUpdate(req.params.id,req.body,{new:true})
    res.json(user)
  })
  
  app.delete('/delete/:id',async(req,res)=>{
    const user = await User.findByIdAndDelete(req.params.id,req.body,{new:true})
    res.json(user)
  })
  
  
