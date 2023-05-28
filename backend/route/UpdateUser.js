const connection = require ('../database');

const UpdateUser = async (req,res) => {
    const UserId = req.user.id;
    const Newuser = req.body.username;

    connection.query(
        `UPDATE users
        SET username = ?
        WHERE id = ?; `,[Newuser, UserId],
        (err, result) => {
            // console.log(result);
            if(err){
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

module.exports = UpdateUser;