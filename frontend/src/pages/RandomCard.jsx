import * as React from "react";
import Box from "@mui/material/Box";
import Navbar from "../components/Navbar";
import { Button, Typography } from "@mui/material";
import "../styles/Card.css"

export default function Home() {
  return (
    <Box sx={{ width: "100vw", height: "auto", background: "#0c023e" }}>
      <Navbar />
      <Box
        sx={{
          color: "white",
          fontSize: { xs: "30px", md: "50px" },
          direction: "flex",
          justifyContent: "center",
          textAlign: "center",
          marginTop: "100px",
          marginBottom: "30px",
          transition: "font-size 0.3s ease-in-out",
        }}
      >
        <p>Time for miracle</p>
      </Box>
      <Box
        sx={{
          paddingX: "16rem",
          display: "flex",
          flexWrap: 'wrap',
          justifyContent: "center",
          alignItems: "center",
          marginRight: "60px",
        }}
      >
        {
          [...Array(22).keys()].map((i)=>
          <div style={{
            width: '100px'
          }} className="zoom">
            <img src="https://www.shitsuren-tarot.com/wp/wp-content/uploads/2017/06/M_10.png" style={{
            width: '160px',
            zIndex: i,
          }}/>
            </div>)
        }
      </Box>
      <div style={{marginBottom: "150px"}} />
    </Box>
  );
}
