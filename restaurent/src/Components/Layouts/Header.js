import React from 'react'
import { AppBar, Box, Toolbar, Typography } from '@mui/material'
import { NavLink} from 'react-router-dom';
import FastfoodIcon from '@mui/icons-material/Fastfood';
const Header = () => {
  return (
    <Box>
      <AppBar  component={"nav"} sx={{bgcolor:"black"}}>
        <Toolbar >
          <Typography color={'goldenrod'} variant='h6' component={'div'} sx={{flexGrow:"1"}}> <FastfoodIcon/> My Restaurent </Typography>
        <Box sx={{display : {xs:"none", sm:"block"}}}>
           <ul className='Navigation-menu'>
            <li><NavLink to="/" activeClassName="active">Home</NavLink></li>
            <li><NavLink to="/about">About</NavLink></li>
            <li><NavLink to="/menu">Menu</NavLink></li>
            <li><NavLink to="/contact">Contact</NavLink></li>
           </ul>
        </Box>
        </Toolbar>
      </AppBar>
    </Box>
  )
}

export default Header
