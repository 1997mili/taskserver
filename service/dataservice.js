
// import dataservice

const dataservice=require('./service/dataservice')


 // import jsonwebtoken

 const jwt=require('jsonwebtoken')

   userDetails={
     title:{title:plumber,username:"anu",ctct:123,HrRate:1000},
     title:{title:electrician,username:"amal",ctct:321,HrRate:1100},
    title:{title:carpenter,username:"anas",ctct:456,HrRate:1200},
      title:{title:painter,username:"arav",ctct:789,HrRate:1300},
   }

   //register
register = (title,contact,rate)=>{

  if(title in userDetails){
     return{
      statusCode:401,
       status:false,
       message:"user already exist"
     } 
    }
    else{
     userDetails[title]={title,username:uname,contact:ctct,Rate:HrRate}
     console.log(userDetails);
    
     return {
      statusCode:200,
       status:true,
      message:"registration success"
    }
   }
}

 
   


//login
login = (title, ctct)=>{
 
  if(title in userDetails){
   if(ctct==userDetails[title]["ctct"]){

    const token=jwt.sign({jobtitle:title},'secretkey123')
   
    return {
      statusCode:200,
      status:true,
      message:"login success",
      token
    }
  }
  else{
    return{
      statusCode:401,
       status:false,
       message:"Incorrect ctct"
    }
  }
}
else{
  return{
    statusCode:401,
       status:false,
       message:"Incorrect title"
  }
}

}




module.exports={
    register,
    login
   
}
