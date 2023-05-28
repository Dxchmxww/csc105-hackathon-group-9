const connection = require ('../database');

const History = async (req,res) => {
    const userId = req.user.id;
    
    connection.query(
        `SELECT * FROM histories WHERE user_id = ?; `,[userId],
        (err, result) => {
            console.log(result);
            if(err){
                res.send({ err : err});
            }
            else if (result && result.length > 0) {
                res.json({
                    success: true,
                    data: result,
                });
            } else {
                res.json({
                    success: false,
                    message: 'No data found for the user',
                });
            }
            }
    )  
 
}

module.exports = History;