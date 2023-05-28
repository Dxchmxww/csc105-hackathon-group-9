import * as React from "react";
import Box from "@mui/material/Box";
import Navbar from "../components/Navbar";
import { Button, Grid, Typography } from "@mui/material";
import { useSearchParams } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";
import axios from "../axios";

export default function Card() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [card, setCard] = useState({});

  useEffect(() => {
    const type = searchParams.get('type');
    const num = searchParams.get('cardNum');

    try {
      if (type == 'golden') {
        axios
        .get(`http://localhost:8001/golden?cardNum=${num}`)
        .then((res) => {
          console.log(res.data.data);
          if (res.data.success) {
            setCard(res.data.data)
          } else {
            console.log(res.data.message);
          }
        })
      } else {
        axios.get(`http://localhost:8001/card?cardNum=${num}&type=${type}`).then((res) => {
          if (res.data.data.success) {
            console.log(res.data.data);
            setCard(res.data.data);
          } else {
            console.log(res.data.message);
          }
        })
      }
    } catch (e) {
      console.log(e);
    }
  }, [])

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
            src={card.image}
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
           {card.name}
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
            {card.info}
            </Typography>
            {
              !searchParams.get('type') == 'golden' && (
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
              )
            }
        </Grid>
      </Grid>
    </Box>
  );
}
