import * as React from "react";
import Box from "@mui/material/Box";
import Navbar from "../components/Navbar";
import { Button, Grid, Typography } from "@mui/material";
import TaroCard from "../components/TaroCard";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <Box
      sx={{
        width: "100vw",
        height: "100vh",
        background: "-webkit-linear-gradient(bottom, #0c023e, black)",
      }}
    >
      <Navbar />
      <Box>
          <Link to="/Randomcard" style={{textDecoration: "none"}}>
          <Box>
          <TaroCard salub={false} title={"Major Arcana"} image={"https://www.pngmart.com/files/19/Tarot-PNG-Image.png"} des={"- The Fool's Journey -"}/>
          </Box>
          </Link>

          <Link to="/Randomcard" style={{textDecoration: "none"}}>
          <Box>
          <TaroCard salub={true} title={"Suit of Wands"} image={"https://netspirit.in/wp-content/uploads/tarot-serie-pentacles.png"} des={"- energy, drive, willpower, creativity, power -"}/>
          </Box>
          </Link>

          <Link to="/Randomcard" style={{textDecoration: "none"}}>
          <Box>
          <TaroCard salub={false} title={"Suit of Cups"} image={"https://png.pngtree.com/png-clipart/20221122/ourmid/pngtree-tarot-divination-goblet-wings-png-image_6453625.png"} des={"- emotion, feelings, intuition, relationships -"}/>
          </Box>
          </Link>

          <Link to="/Randomcard" style={{textDecoration: "none"}}>
          <Box>
          <TaroCard salub={true} title={"Suit of Swords"} image={"https://www.freeiconspng.com/thumbs/sword-png/sword-png-3.png"} des={"- logic, ideas, intellect, communication -"}/>
          </Box>
          </Link>

          <Link to="/Randomcard" style={{textDecoration: "none"}}>
          <Box>
          <TaroCard salub={false} title={"Suit of Pentacles"} image={"https://www.transparentpng.com/thumb/money-bag/XtaBYB-money-bag-free-download-transparent.png"} des={"- nature, body, material world, stability -"} />
          </Box>
          </Link>
      </Box>
     </Box>)}