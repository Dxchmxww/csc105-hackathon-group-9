import React, { useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import axios from "../axios";
import { useNavigate } from "react-router-dom";

const styles = {
  background: "-webkit-linear-gradient(bottom, #0c023e, black)",
};

const theme = createTheme();

export default function SignUpCard() {
  const [formData, setFormData] = useState({
    username: "",
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
      await axios.post('/register', formData);
      navigate('/login');
    } catch(error){
      console.log(error);
    }
  };

  return (
    <div style={styles}>
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

                  <form onSubmit={handleSubmit}>
                    {/* Username field */}
                    <TextField
                      margin="normal"
                      required
                      fullWidth
                      id="username"
                      label="Username"
                      name="username"
                      autoComplete="username"
                      autoFocus
                      value={formData.username}
                      onChange={handleChange}
                    />

                    {/* Email field */}
                    <TextField
                      margin="normal"
                      required
                      fullWidth
                      id="email"
                      label="Email"
                      name="email"
                      autoComplete="email"
                      value={formData.email}
                      onChange={handleChange}
                    />

                    {/* Password field */}
                    <TextField
                      margin="normal"
                      required
                      fullWidth
                      name="password"
                      label="Password"
                      type="password"
                      id="password"
                      autoComplete="new-password"
                      value={formData.password}
                      onChange={handleChange}
                    />

                    {/* Submit button */}
                    <Button
                      type="submit"
                      fullWidth
                      variant="contained"
                      sx={{ mt: 3, mb: 2 }}
                      style={{ background: "black", height: "50px" }}
                    >
                      SIGN UP
                    </Button>

                    <Box sx={{ display: "flex", alignItems: "center" , justifyContent: "center" }}>
                      <Typography sx={{ fontFamily: "Times New Roman" }}>
                        Already have an account?   
                      </Typography>
                      <Link to="/"
                        sx={{
                          fontFamily: "Times New Roman",
                        }}
                      >
                        Log in
                      </Link>
                    </Box>

                  </form>
                </Box>
              </Container>
            </ThemeProvider>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
