const connection = require ('../database');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')

const Login  = async (req, res) => {
    const usernameOremail = req.body.email;
    const password = req.body.password;

  
    connection.query(
      `SELECT * FROM users WHERE username = ? OR email= ?;` , [usernameOremail, usernameOremail],
      (err, result) => {
        if (err){
          res.status(500).send({ err : err});
        }
        if(result.length > 0){
          bcrypt.compare(password, result[0].password, (error,response)=>{
            if(response){
              const jwt_token = jwt.sign({id:result[0].id},'somesecret');
              res.cookie('jwt_token', jwt_token);
              res.json({
              success: true,
              data: {
              message: "login successful",
              },
            });
            }else{
              res.status(401).send({ 
                message:"Wrong username or password!",
            });
            }
          });
        }else{
          res.status(401).send({ message: "User doesn't exist!"})
        }
      }
    )
  }

  module.exports = Login;