const connection = require ('../database');

const Gloden = async (req,res) => {
    // const user = req.body.username;
    const num = req.query.cardNum;
    console.log(num);

    connection.query(
        `SELECT * FROM goldens; `,
        (err, result) => {
            // console.log(result);
            if(err){
                res.send({ err : err});
            }
            else if(result){
                console.log(result[num]);
                    res.json({

                        success : true,
                        data : result[num],
    
                    })
                } else {
                    res.json({
                        message: "Something went wrong!",
                    })
                }
        }
    )  
 
}

module.exports = Gloden;