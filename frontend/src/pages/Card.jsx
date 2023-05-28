import * as React from "react";
import Box from "@mui/material/Box";
import Navbar from "../components/Navbar";
import { Button, Grid, Typography } from "@mui/material";

export default function Home() {
  return (
    <Box
      sx={{
        width: "100vw",
        background: "-webkit-linear-gradient(bottom, #0c023e, black)",
      }}
    >
      <Navbar />
      <Grid
        container
        sx={{
          display: "flex",
          justifyContent: "space-evenly",
          padding: "70px",
          marginTop: "100px",
        }}
      >
        <Grid item xs={12} md={6} style={{textAlign:'center'}}>
          
          <img
            src="https://www.shitsuren-tarot.com/wp/wp-content/uploads/2017/06/M_10.png"
            style={{ width: {xs:"100px" }}}
          />
          

        </Grid>
        
        <Grid item xs={12} md={6} >
          
          <Typography
            style={{
              color: "#E5B80B",
              fontSize: "60px",
              fontFamily: "Times New Roman, Times, serif",
              fontWeight: "bold",
              textAlign:'center'
            }}
          >
            Major Arcana
          </Typography>
          <Typography
            style={{
              width:{xs:"400px",},
              color: "white",
              fontSize: {xs:"10px",md:"16px"},
              fontFamily: "Times New Roman, Times, serif",
              display: "flex",
              justifyContent: "center",
            }}
          >
The Fool card is numbered 0, which is considered to be a number of infinite potential. Consider him a blank slate, for The Fool has yet to develop a clear personality. He is the symbol of innocence - his journey to come will shape his character yet. To see the The Fool generally means a beginning of a new journey, one where you will be filled with optimism and freedom from the usual constraints in life. When we meet him, he approaches each day as an adventure, in an almost childish way. He believes that anything can happen in life and there are many opportunities that are lying out there, in the world, waiting to be explored and developed. He leads a simple life, having no worries, and does not seem troubled by the fact that he cannot tell what he will encounter ahead. 
To meet him in a reading can also be seen as a call to the risk-taking part of your own character. He inspires courage, for he understands that every day is a chance to open up new areas in your life, and with that comes a mixture of anticipation, wonder, awe and curiosity. The Fool is there to show that you can never really tell what lies ahead, and you can only greet it with joy.          </Typography>
          <Typography
            style={{
              marginTop: "30px",
              color: "white",
              fontSize: "40px",
              fontFamily: "Times New Roman, Times, serif",
              display: "flex",
              justifyContent: "center",
             width: {xs:"100px" }
            }}
          >
            "personal use"
          </Typography>
          
        </Grid>
      </Grid>
    </Box>
  );
}
