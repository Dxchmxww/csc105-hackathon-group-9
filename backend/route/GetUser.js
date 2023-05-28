const connection = require ('../database');

const GetUser = async (req,res) => {
     const UserId = req.user.id;
 
     connection.query(
         `SELECT * FROM users WHERE id = ?`,[UserId], (err, result) => {
             if(err) {
                 res.send({ err : err});
             }
             else if(result){
               res.json({

               success : true,
               data : Newuser,

               })
               } else {
                    res.json({
                    message: "Something went wrong!",
                    })
               }
         }
     )  
  
 }
 
 export default GetUser;