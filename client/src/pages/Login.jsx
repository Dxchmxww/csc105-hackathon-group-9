import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import "../styles/Login.css";

import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import axios from '../axios'
import { useNavigate } from "react-router-dom";

const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  ></Box>
);

const theme = createTheme();

export default function BasicCard() {
  const [formData, setFormData] = React.useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    try{
      event.preventDefault();
      await axios.post('/login',formData);
      navigate('/');
    } catch(error){
      console.log(error);
    }
  };

  return (
      <div className="page-container">
        <Card
          sx={{ minWidth: 275 }}
          style={{
            width: "500px",
            height: "500px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <CardContent>
            <ThemeProvider theme={theme}>
              <Container component="main" maxWidth="xs">
                <CssBaseline />
                <Box
                  sx={{
                    marginTop: 5,
                    marginBottom: 5,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  <Box
                    sx={{
                      fontSize: { xs: "30px", md: "40px" },
                      direction: "flex",
                      justifyContent: "center",
                      textAlign: "center",
                      fontFamily: "Times New Roman, Times, serif",
                      transition: "font-size 0.3s ease-in-out",
                    }}
                  >
                    Blue Moon
                  </Box>
                  <Box
                    component="form"
                    onSubmit={handleSubmit}
                    noValidate
                    sx={{ mt: 1 }}
                  >
                    <TextField
                      margin="normal"
                      required
                      fullWidth
                      id="email"
                      label="Email or Username"
                      name="email"
                      autoComplete="email"
                      autoFocus
                      value={formData.email}
                      onChange={handleChange}
                    />

                    <TextField
                      margin="normal"
                      required
                      fullWidth
                      name="password"
                      label="Password"
                      type="password"
                      id="password"
                      autoComplete="current-password"
                      value={formData.password}
                      onChange={handleChange}
                    />
                   
                    <Button
                      type="submit"
                      fullWidth
                      variant="contained"
                      sx={{ mt: 3, mb: 2 }}
                      style={{ background: "black" ,height: "50px"}}
                    >
                      Log In
                    </Button>

                    <Box sx={{ display: "flex", alignItems: "center" , justifyContent: "center" }}>
                      <Typography sx={{ fontFamily: "Times New Roman" }}>
                        Don't have an account?
                      </Typography>
                      <Link to="/Signup"
                        sx={{
                          fontFamily: "Time New Roman",
                        }}
                      >
                        Sign Up
                      </Link>
                    </Box>

                  </Box>
                </Box>
              </Container>
            </ThemeProvider>
          </CardContent>
        </Card>
    </div>
  );
}
