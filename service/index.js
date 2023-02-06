// Import dataservice file from service folder
const dataservice=require('./service/dataService')

// import jsonwebtoken
const jwt=require('jsonwebtoken')

// import express
const express=require('express')
const { json } = require('express')

// create app
const app=express()

//to convert json datas
app.use(express.json())

//middleware for verify the token

const jwtmiddleware=(res,req,next)=>{
    console.log(".................router specfic middleware");
    try{
        const token=req.body.token
        const data=jwt.verify(token,"secretkey123")
           console.log(data);
           next()

    }
   catch{
    res.status(422).json(  {
        statusCode:422,
        status:false,
        message:"please login first"
    })
   }



}

//REQUEST
// register

app.post('/registration',(req,res)=>{
   
 const result=dataservice.register(req.body.title,req.body.contact,req.body.rate); {

 if(result){
    res.send('registration success')
 }
 else{
    res.send('user already exists')
 }
}
 })
//login
app.post('/login',(req,res)=>{
   
    const result=dataservice.login(req.body.title,req.body.contact)
   
    res.status(result.statusCode).json(result)
       
   })

   

       
   





//GET
// app.get('/',(req,res)=>{
//     res.send('GET Method checking..........')
// })
//POST
// app.post('/',(req,res)=>{
//     res.send('POST Method checking..........')
// })

// // put
// app.put('/',(req,res)=>{
//     res.send('PUT Method checking..........')
// })
// //patch
// app.patch('/',(req,res)=>{
//     res.send('PATCH Method checking..........')
// })
// // delete
// app.delete('/',(req,res)=>{
//     res.send('DELETE Method checking..........')
// })




// Set port
app.listen(3000,()=>{
    console.log("server started at port no 3000");
})