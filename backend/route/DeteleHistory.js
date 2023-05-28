const connection = require ('../database');

const DeleteHistory = async (req,res) => {
    const userId = req.user.id;
    const id = req.params.id;

    connection.query(
      ` DELETE FROM histories where user_id = ? AND id = ?`,
      [userId,  id],
      (err, rows) => {
        //   console.log(username, email, hash);
        // Check if cannot find the data in the database then return the error
        if (err) {
          console.log(err);
          res.status(500).json({
            success: false,
            err : err
          });
        } else {
          // Return data to the client if success
        //   console.log(rows);
          if (rows) {
            res.json({
              success: true,
            });
          }
        }
      }
    );
 
}

module.exports = DeleteHistory;