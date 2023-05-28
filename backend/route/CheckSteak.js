const connection = require ('../database');

const CheckSteak = async (req,res) => {
    // const user = req.body.username;
    const userId = req.user.id;

    connection.query(
        `SELECT COUNT(*) as count FROM histories WHERE (date >= CURDATE() - INTERVAL 3 DAY) AND date <= curdate() AND user_id = ?; `,[userId],(err, result) => {
            console.log(result);
            if(err){
                res.send({ err : err});
            }
            else if (result[0].count == 3){
                res.json({
                    golden : true,
                })
            } else {
                res.json({
                    golden : false,
                })
            }
        }
        
    )
}

module.exports = CheckSteak;