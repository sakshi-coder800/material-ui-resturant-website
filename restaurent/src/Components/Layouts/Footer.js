import React from 'react'
import { Box, Typography } from '@mui/material';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';
const Footer = () => {
  return (
    <Box sx={{ background: "#000", textAlign: "center", color: "goldenrod", padding: ".5rem 0" }}>
      <Box sx={{
                    "& svg": { fontSize: "29px", background: "goldenrod", color: "#000", padding: "5px", margin: "5px 5px 0px 5px", borderRadius: "50%", transition: "all .5s ease-in-out", cursor: "pointer",}, " & svg:hover ": { backgroundColor: "rgb(238, 238, 238)", transform: "translateY(1px)", transition: "all .5s ease-in-out",}
                }}>
        <InstagramIcon />
        <FacebookIcon />
        <LinkedInIcon />
        <YouTubeIcon />
      </Box>
      <Typography fontSize={{md:"1.25rem",xs: "1rem"}} padding={".5rem 0"}>All Rights Reserved © Sakshi Maheshwari</Typography>
    </Box>
  )
}

export default Footer
