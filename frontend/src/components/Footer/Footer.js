import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";

function Copyright() {
  return (
    <Typography variant="body2" color="#cdebff">
      {"Copyright © "}
      <Link color="inherit" href="#">
        Karmachari
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
      <br/> 
      IHRD IT Department
      

   
      
      
    </Typography>
  );
}

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        py: 3,
        px: 2,
        textAlign: "center",
        mt: "auto",
        backgroundColor: "#00487c",
      }}
    >
      <Container maxWidth="sm">
        <Typography
          variant="body1"
          sx={{
            color: "#cdebff"
            ,
          }}
        >
          Made with ❤️ MEC Thrikkakara
        </Typography>
        <Copyright />
      </Container>
    </Box>
  );
}
