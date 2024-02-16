import React from 'react'
import Layout from '../Components/Layouts/Layout'
import { Box, Typography } from '@mui/material'

const About = () => {
  return (
    <Layout>
    <Box display={'flex'}  justifyContent={'center'} alignItems={'center'} marginTop={'2rem'} flexDirection={'column'} >
<Typography variant='h2' fontSize={{xs: "2rem", md:"3rem"}} component={'h2'} fontWeight={600}>Welcome To My Resturant</Typography>
<Typography variant='p' component={'p'} lineHeight={1.5} fontSize={{md:'1.2rem', xs: "1rem"}} padding={'1rem 2rem'} textAlign={'center'}>  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat quod, suscipit, aperiam totam autem culpa cum eveniet dolorum quasi est perspiciatis laborum. Nam recusandae nihil quia odio voluptatibus facere omnis facilis rerum? Ab eum beatae nobis reiciendis, qui temporibus aliquid, nesciunt velit sed quam recusandae necessitatibus, tempora maxime. Repellendus incidunt, maxime labore dolorum eos aperiam unde? At veritatis nesciunt eos quas cupiditate blanditiis est quam maiores, amet, soluta exercitationem voluptatum, veniam assumenda? Ratione perferendis officiis deserunt nostrum aspernatur sed asperiores! Earum sunt placeat ducimus sint, deleniti amet esse saepe voluptatem commodi laudantium quibusdam repellat nobis libero at consectetur adipisci ipsa.
Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, deserunt libero reprehenderit cum sint fugit cumque temporibus modi facere eveniet amet obcaecati ducimus harum velit maxime vel qui voluptatibus quam odio corrupti saepe, voluptas dolorum quidem tempore? Esse sapiente molestias minus enim quisquam dolorum eum culpa ullam impedit velit quo, corporis ducimus numquam dignissimos inventore maiores. Nam deleniti itaque nostrum neque dolorum dolores, aliquam, voluptatum sapiente doloribus laborum perspiciatis ipsam, quo ut nisi distinctio sunt nihil est blanditiis perferendis eveniet nesciunt! Nostrum, voluptatum eveniet repellat vel officia deleniti tempore voluptatibus perferendis esse eaque temporibus porro? Aspernatur beatae deleniti illo autem!</Typography>


    </Box>
    </Layout>
  )
}

export default About
