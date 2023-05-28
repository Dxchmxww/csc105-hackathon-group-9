import * as React from "react";
import Box from "@mui/material/Box";
import Navbar from "../components/Navbar";
import { Button, Typography } from "@mui/material";
import "../styles/Card.css"
import axios from "../axios";
import { useState } from "react";
import { useEffect } from "react";
import { Axios } from "axios";
import { useNavigate } from "react-router-dom";


export default function Major() {
  function randomIntFromInterval(min, max) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min)
  }

  const [perday,setPerday] = useState(true)
  const navigate = useNavigate()

  useEffect(() =>{
    axios.get("http://localhost:8001/checkperday")
    .then(response => {
      setPerday(response.data.perday)
      console.log(response.data.perday);
    });

    axios.get("http://localhost:8001/checkSteak")
    .then(response => {
      if (response.data.golden) {
        navigate("/RandomGoldenCard")
      }
    });
  },[] );
  
  const onCardClick = () => {
    console.log(perday);
      if(perday == true){
        const num = randomIntFromInterval(1,22);

        // Backend
        try {
          console.log(2);
          axios.get(`http://localhost:8001/card?cardNum=${num}&type=Major`).then((res) => {
            if (res.data.data.success) {
              console.log(res.data.data);
              axios.post("http://localhost:8001/history", {card_id: res.data.data.id}).then(() => console.log("Insert complete"))
              navigate(`/card?type=Major&cardNum=${num}`)
            } else {
              console.log(res.data.message);
            }
          })
        } catch (e) {
          console.log(e);
        }
      }
      else{
        console.error(401); 
      }
  }

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
        {perday ?  (
          
            [...Array(22).keys()].map((i)=>
            <div style={{ width: '100px'}} className="zoom" key={i} >
              <img src="https://www.shitsuren-tarot.com/wp/wp-content/uploads/2017/06/M_10.png" 
              style={{
              width: '160px',
              zIndex: i}} 
              onClick={()=>console.log("test")} 
            />
            
              </div>)
          
        ) : <Typography sx={{ color : "white"}} >Reached the limit today</Typography> }
        
      </Box>
      <div style={{marginBottom: "150px"}} />
    </Box>
  );
}
