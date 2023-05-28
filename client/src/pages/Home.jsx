import * as React from "react";
import Box from "@mui/material/Box";
import Navbar from "../components/Navbar";
import { Button, Typography } from "@mui/material";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <Box sx={{ width: "100vw", height: "100vh", background: "#0c023e" }}>
      <Navbar />
      <Box
        sx={{
          color: "white",
          fontSize: { xs: "30px", md: "60px" },
          direction: "flex",
          justifyContent: "center",
          textAlign: "center",
          marginTop: "30px",
          transition: "font-size 0.3s ease-in-out",
        }}
      >
        <img
          src="https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExOGU1ODFkMDMyMmFhZDgwOGNkMjUzZmUxNzc2MTZlNGY3MmEyMjQ4MyZlcD12MV9pbnRlcm5hbF9naWZzX2dpZklkJmN0PXM/d1XsyV6L6yjjC4rGaa/giphy.gif"
          style={{ maxWidth: "100%", height: "auto" }}
        />
        <div>
          <Box>
            <p>Do You Want To Know More</p>
            <p>About Your Destiny?</p>

            <Link to="/Category">
              <Button
                variant="outlined"
                sx={{
                  color: "white",
                  borderColor: "white",
                }}
              >
                GET STARTED
              </Button>
            </Link>
          </Box>
        </div>
      </Box>
    </Box>
  );
}
