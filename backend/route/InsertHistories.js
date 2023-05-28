const connection = require ('../database');

const InsertHistories = async (req,res) => {
    const userId = req.user.id;
    const cardId = req.body.card_id;
    const date = new Date();
    // console.log("ตรวนี้นะจ้ะ");
    // console.log(date.toDateString);

    connection.query(
      ` INSERT INTO histories (user_id, card_id, date) VALUES (?,?,?); `,
      [userId, cardId , date],
      (err, rows) => {
        //   console.log(username, email, hash);
        // Check if cannot find the data in the database then return the error
        if (err) {
          console.log(err);
          res.json({
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

module.exports = InsertHistories;