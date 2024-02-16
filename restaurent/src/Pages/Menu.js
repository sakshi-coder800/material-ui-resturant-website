import React from 'react'
import Layout from '../Components/Layouts/Layout'
import {MenuList} from '../data/data'
import { Box, Button, Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material'
const Menu = () => {
  return (
    <Layout>

<Box sx={{display:"flex", flexWrap :"wrap", justifyContent:"center", alignItems:"center",
 gap : {xs:"1rem", md :"1.5rem"},
  margin:"2rem 0"}}>


  {MenuList.map((menu_item)=>(
 <Card sx={{ maxWidth: 345 ,'&:hover' : {boxShadow :"5px 5px 10px grey"} }} >
 {/* '&:hover': {
      boxShadow: '5px 5px 10px grey', // Adding hover effect
    }, */}
      <CardMedia
        sx={{ height: 200 }}
        image={menu_item.image}
        title={menu_item.name}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {menu_item.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
     {menu_item.description}
        </Typography>
      </CardContent>
      <CardActions>
        {/* <Button size="small" variant="contained">  {menu_item.price}</Button> */}


      </CardActions>
    </Card>
))}
 
</Box>
  



    </Layout>
  )
}

export default Menu
