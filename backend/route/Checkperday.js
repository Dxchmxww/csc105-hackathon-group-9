const connection = require ('../database');

const Checkperday = async (req,res) => {
    // const user = req.body.username;
    const userId = req.user.id;

    connection.query(
        `SELECT COUNT(*) as count FROM histories WHERE date = CURDATE() AND user_id = ?; `,[userId],(err, result) => {
            console.log(result);
            if(err){
                res.send({ err : err});
            }
            else if(result[0].count == 1){
                    res.json({
                        perday : false,
                    })
                } else if(result[0].count == 0){
                    res.json({
                        perday : true,
                    })
                }
            }
        
    )
}

module.exports = Checkperday;