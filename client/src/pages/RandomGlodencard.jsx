import * as React from "react";
import Box from "@mui/material/Box";
import Navbar from "../components/Navbar";
import { Button, Typography } from "@mui/material";
import "../styles/Card.css";
import axios from "../axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Major() {
  const [rannum, setrannum] = useState();
  const navigate = useNavigate();


  function randomIntFromInterval(min, max) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min)
  }

  const onCardClick = () => {
    const num = randomIntFromInterval(1, 41);

    // Backend
    try {
      axios
        .get(`http://localhost:8001/golden?cardNum=${num}`)
        .then((res) => {
          console.log(res.data);
          if (res.data.success) {
            navigate(`/card?type=golden&cardNum=${num}`);
          } else {
            console.log(res.data.message);
          }
        });
    } catch (e) {
      console.log(e);
    }
  };

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
          flexWrap: "wrap",
          justifyContent: "center",
          alignItems: "center",
          marginRight: "60px",
        }}
      >
        {[...Array(41).keys()].map((i) => (
          <div
            style={{
              width: "100px",
            }}
            className="zoom"
          >
            <img
              src="https://www.shitsuren-tarot.com/wp/wp-content/uploads/2017/06/M_10.png"
              style={{
                width: "160px",
                zIndex: i,
              }}
              onClick={onCardClick}
            />
          </div>
        ))}
      </Box>
      <div style={{ marginBottom: "150px" }} />
    </Box>
  );
}
