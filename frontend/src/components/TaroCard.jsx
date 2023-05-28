import { Box, Typography } from "@mui/material";

const TaroCard = ({salub,title,des,image}) => {
  return (
    <Box sx={{ display: "flex", justifyContent: {md:"space-evenly"},margin:"100px 0px" ,flexDirection:{xs:"column" ,md:(salub)?"row-reverse":"row"},alignItems:"center"}}>
      <Box sx={{display:"flex",flexDirection:"column",justifyContent:"center"}}>
        <Typography
          style={{
            color: "#E5B80B",
            fontSize: "48px",
            fontFamily: "Times New Roman, Times, serif",
            display: "flex",
            justifyContent: "center",
          }}
        >
          {title}
        </Typography>
        <Typography
          style={{
            color: "white",
            fontSize: "20px",
            fontFamily: "Times New Roman, Times, serif",
            display: "flex",
            justifyContent: "center",
          }}
        >
         {des}
        </Typography>
      </Box>
      <Box>
        <img
          src={image}
          style={{ height: "310px", width: "350px" }}
        />
      </Box>
    </Box>
  );
};
export default TaroCard;
