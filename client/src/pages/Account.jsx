import * as React from "react";
import Box from "@mui/material/Box";
import Navbar from "../components/Navbar";
import { Button, Typography } from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import EditIcon from '@mui/icons-material/Edit';
import LogoutIcon from '@mui/icons-material/Logout';
import HistoryIcon from '@mui/icons-material/History';
import { Link } from "react-router-dom";
 
export const Account = () => {

     const [user, setUser] = useState()

useEffect(() => {
     try {
          axios.get(`http://localhost:8001/user`).then((res) => {
          if (res.data.success) {
               console.log(res.data.data);
               setUser(res.data.data);
          } else {
               console.log(res.data.message);
          }
          })
     } catch (e) {
          console.log(e);
     }
     }, [])

  return (
    <Box
      sx={{
        width: "100vw",
        height: "auto",
        background: "-webkit-linear-gradient(bottom, #0c023e, black)",
      }}
    >
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
        <p>Profile</p>
      </Box>

      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "300px",
        }}
      >
        <Box
          sx={{
            width: "500px",
            height: "300px",
            borderRadius: "10px",
            backgroundColor: "#DFBD69",
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <AccountCircleIcon
            sx={{ height: "100px", width: "100px", marginTop: "30px" }}
          />
          <Typography style={{ marginTop: "10px" }}>@username</Typography>
          <Typography style={{ marginTop: "10px" }}>
            Email : Banana@gmail.com
          </Typography>
          <div style={{flexDirection: "row"}}>
          <Button style={{ marginTop: "15px" , marginRight: "15px", width: "130px"}} variant="outlined" startIcon={<EditIcon />}>
            Edit
          </Button>
          <Button style={{ marginTop: "15px" , marginRight: "15px", width: "130px"}} variant="contained" color="error" startIcon={<LogoutIcon />}>
            Log Out
          </Button>
          <Link to="/History">
          <Button style={{ marginTop: "15px", width: "130px"}} variant="outlined" startIcon={<HistoryIcon />}>
            History
          </Button>
          </Link>
          </div>
        </Box>
      </Box>
    </Box>
  );
};
