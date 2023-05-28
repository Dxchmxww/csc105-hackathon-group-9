// import * as React from "react";
// import Button from "@mui/material/Button";
// import CssBaseline from "@mui/material/CssBaseline";
// import TextField from "@mui/material/TextField";
// import Box from "@mui/material/Box";
// import Container from "@mui/material/Container";
// import { createTheme, ThemeProvider } from "@mui/material/styles";
// import "../styles/Login.css";

// import Card from "@mui/material/Card";
// import CardContent from "@mui/material/CardContent";

// const styles = {
//   backgroundColor: "#0c023e",
// };

// const bull = (
//   <Box
//     component="span"
//     sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
//   ></Box>
// );

// const theme = createTheme();

// export default function BasicCard() {
//   const [formData, setFormData] = React.useState({
//     email: "",
//     password: "",
//   });

//   const handleChange = (event) => {
//     const { name, value } = event.target;
//     setFormData((prevFormData) => ({
//       ...prevFormData,
//       [name]: value,
//     }));
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     console.log(formData);
//   };

//   return (
//     <div style={styles}>
//       <div className="page-container">
//         <Card
//           sx={{ minWidth: 275 }}
//           style={{
//             width: "500px",
//             height: "500px",
//             display: "flex",
//             alignItems: "center",
//             justifyContent: "center",
//           }}
//         >
//           <CardContent>
//             <ThemeProvider theme={theme}>
//               <Container component="main" maxWidth="xs">
//                 <CssBaseline />
//                 <Box
//                   sx={{
//                     marginTop: 5,
//                     marginBottom: 5,
//                     display: "flex",
//                     flexDirection: "column",
//                     alignItems: "center",
//                   }}
//                 >
//                   <Box
//                     sx={{
//                       fontSize: { xs: "30px", md: "40px" },
//                       direction: "flex",
//                       justifyContent: "center",
//                       textAlign: "center",
//                       fontFamily: "Times New Roman, Times, serif",
//                       transition: "font-size 0.3s ease-in-out",
//                     }}
//                   >
//                     Moon Light
//                   </Box>
//                   <Box
//                     component="form"
//                     onSubmit={handleSubmit}
//                     noValidate
//                     sx={{ mt: 1 }}
//                   >
//                     <TextField
//                       margin="normal"
//                       required
//                       fullWidth
//                       id="username"
//                       label="Username"
//                       name="username"
//                       autoComplete="username"
//                       autoFocus
//                       value={formData.username}
//                       onChange={handleChange}
//                     />

//                     <TextField
//                       margin="normal"
//                       required
//                       fullWidth
//                       id="email"
//                       label="Email"
//                       name="email"
//                       autoComplete="email"
//                       autoFocus
//                       value={formData.email}
//                       onChange={handleChange}
//                     />

//                     <TextField
//                       margin="normal"
//                       required
//                       fullWidth
//                       name="password"
//                       label="Password"
//                       type="password"
//                       id="password"
//                       autoComplete="current-password"
//                       value={formData.password}
//                       onChange={handleChange}
//                     />

//                     <Button
//                       type="submit"
//                       fullWidth
//                       variant="contained"
//                       sx={{ mt: 3, mb: 2 }}
//                       style={{ background: "black", height: "50px" }}
//                     >
//                       SIGN UP
//                     </Button>
//                   </Box>
//                 </Box>
//               </Container>
//             </ThemeProvider>
//           </CardContent>
//         </Card>
//       </div>
//     </div>
//   );
// }


// Import the necessary libraries and components

import React, { useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";

const styles = {
  backgroundColor: "#0c023e",
};

const theme = createTheme();

export default function SignUpCard() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Make an HTTP request to your backend API endpoint
    // Send the form data (formData) to the backend for signup

    fetch("/api/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => {
        // Handle the response from the backend
        console.log(data); // For demonstration purposes, log the response data
      })
      .catch((error) => {
        console.error("Error:", error);
      });
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
                    Moon Light
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
