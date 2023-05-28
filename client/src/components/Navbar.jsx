import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Stack, colors } from "@mui/material";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

import styles from '../styles/Navbar.module.css'
import { Link, useNavigate } from "react-router-dom";


export default function Navbar() {
  const navigate = useNavigate()

  function handleAccount() {
    navigate("/account");
  }


  return (
    <Stack
      className="BotNav"
      direction= "row"
      justifyContent="space-between"
      sx={{
        backgroundColor: "none",
        height: "50px",
        gap: { md: 10, xs: 0},
        fontsize: { xs: 16},
      }}
      >
        <Link to="/home" style={{textDecoration: "none"}}>
        <Box className={styles.LeftBox} sx={{ color: "white"}}>
          Blue Moon
        </Box>
        </Link>

        <Box className={styles.RightBox} sx={{ color: "white"}}>
        <IconButton
            onClick={handleAccount}
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 , color: "white",marginTop: "-10px", marginRight: "-10px"}}>
          <AccountCircleIcon oncl></AccountCircleIcon>
          </IconButton>
        </Box>
    </Stack>

  
  );
}
