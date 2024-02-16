import React, { useState } from 'react'
import { AppBar, Box, Drawer, IconButton, Toolbar, Typography } from '@mui/material'
import { NavLink} from 'react-router-dom';
import FastfoodIcon from '@mui/icons-material/Fastfood';
import RestaurantMenuIcon from '@mui/icons-material/RestaurantMenu';
const Header = () => {
  // use state 
  const [mobileOpen,setMobileOpen]=useState(false);
  // handle menu icon 
const handleDrawerToggle=()=>{
  setMobileOpen(!mobileOpen);
}

  //menu drawer // create drawer function and directly return it 
  const drawer=(
    <Box onclick={handleDrawerToggle} sx={{textAlign:"center"}}>
          <Typography color={'goldenrod'} variant='h6' component={'div'} sx={{flexGrow:"1"}}> <FastfoodIcon/> My Restaurent </Typography>
 
 <ul  className='mobile-menu'>

            <li><NavLink to="/" activeClassName="active">Home</NavLink></li>
            <li><NavLink to="/about">About</NavLink></li>
            <li><NavLink to="/menu">Menu</NavLink></li>
            <li><NavLink to="/contact">Contact</NavLink></li>
</ul>    </Box>

  )
  return (
    <Box>
      <AppBar  component={"nav"} sx={{bgcolor:"black"}}>
        <Toolbar >
         {/* desktop device  */}
          <Typography color={'goldenrod'} variant='h6' component={'div'} sx={{flexGrow:"1"}}> <FastfoodIcon/> My Restaurent </Typography>
        <Box sx={{display : {xs:"none", sm:"block"}}}>
           <ul className='Navigation-menu'>
            <li><NavLink to="/" activeClassName="active">Home</NavLink></li>
            <li><NavLink to="/about">About</NavLink></li>
            <li><NavLink to="/menu">Menu</NavLink></li>
            <li><NavLink to="/contact">Contact</NavLink></li>
           </ul>
        </Box>

        {/* mobile menu button  */}
         <IconButton color='inherit'  onClick={handleDrawerToggle} aria-label='open drawer'edge='end' sx={{ml:2,display :{sx:"block",md: "none"}}}>
            <RestaurantMenuIcon/>
          </IconButton>

 {/* color='inherit' aria-label='open drawer' edge='start'
                            sx={{ mr: 2, display: { sm: 'none' } }} */}
                           

       
        </Toolbar>
      </AppBar>



      {/* add drawer  */}
      <Box component="nav">
      <Drawer variant="temporary"open={mobileOpen} onClose={handleDrawerToggle} sx={{display: { xs: "block", sm: "none" },  
         "& .MuiDrawer-paper": {boxSizing: "border-box",width: "240px"}, }}>{drawer}</Drawer>

      </Box>
    </Box>
  )
}

export default Header
