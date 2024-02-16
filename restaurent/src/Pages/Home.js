import React from 'react'
import Layout from '../Components/Layouts/Layout'
import { Box, Button, Typography } from '@mui/material'
import BackgroundImg from'../images/banner.jpeg'
const Home = () => {
  return (
    <Layout>
    <Box  sx={{backgroundImage : `url(${BackgroundImg})`,backgroundSize:"center",height:"80vh", width:"100%"}}>
  <Box 
   sx={{
    padding: {
      xs: '25vh 0 0 0', // Padding values for extra small screens (viewport width < 600px)
      md: '34vh 0 0 5vh !important'   // Padding values for medium screens (viewport width >= 960px)
    }
  }}
  >
    {/* 25vh 0 0 0 */}
    <Typography component={"h1"} sx={{fontSize : {xs:'4rem' , md:'6rem'}, textAlign : {xs:"center",md:"start"} ,fontWeight:600,padding:"0 0 1rem 0 "}} variant='h1'> Food Website </Typography>
    <Typography component={"p"} sx={{fontSize : {xs:'2rem' , md:'3rem'}, textAlign : {xs:"center",md:"start"} ,fontWeight:500,padding:"0 0 1rem 0 "}} variant='p'> Best Food In India </Typography>
  <Button  variant="contained" sx={{
    fontSize: {xs :"1.2rem",md:"1.2rem"}, background: "#000 ",'&:hover': {
      background: '#222', // Change background color on hover
    },
  }} > Order Now</Button>
      {/* background-color: #000; */}
    {/* font-size: 1.2rem; */}
  </Box>
    </Box>
    </Layout>
  )
}

export default Home
