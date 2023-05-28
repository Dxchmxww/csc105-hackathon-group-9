const connection = require ('../database');

const Card = async (req,res) => {
    const cardNum = req.query.cardNum;
    const type = req.query.type;

    connection.query(
        `SELECT * FROM cards WHERE type = ?; `,[type],
        (err, result) => {
            if(err){
                res.send({ err : err});
            }
            else if(result){
                console.log(result);
                    res.json({
                        success : true,
                        data : result[cardNum]
                    })
                } else {
                    res.json({
                        message: "Something went wrong!",
                    })
                }
        }
    )  
 
}

module.exports = Card;