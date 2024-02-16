import React from 'react'
import Layout from '../Components/Layouts/Layout'
import { Box, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material'
import SupportAgentIcon from '@mui/icons-material/SupportAgent'
import MailIcon from '@mui/icons-material/Mail'
import CallIcon from '@mui/icons-material/Call'

const Contact = () => {
    return (
        <Layout>
            <Box
                sx={{
                   padding : { md: "2rem 1rem",xs:".5rem .2rem"},
                    // my: 10,
                    // ml: 10,
                    "@media(max-width:600px)": {
                        margin: "2rem 1rem",
                        "& h4": {
                            fontWeight: "bold",
                            fontSize: '20px',
                        },
                        "& p": {
                            fontSize: '16px',
                        }
                    },
                    "& h4": {
                        fontWeight: "bold",
                        mb: 2
                    },
                }}
            >
                <Typography variant='h4' > Contact My Resturant  </Typography>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut qui consequatur esse vero magni totam saepe maxime nostrum sint porro? Ducimus sint commodi ab! Maiores quidem veritatis eum eaque! Nihil animi sint assumenda in commodi dolorem non enim error esse beatae sed, officia consequatur optio, odio nesciunt officiis neque laboriosam provident, distinctio repellendus unde harum eaque facilis. Dolores corrupti impedit porro tempora similique iste nostrum consectetur dolorum explicabo error! Nam error architecto doloremque distinctio tempore! Hic neque sint accusamus sit voluptatem reprehenderit doloremque nobis, molestias non, ab quasi harum architecto voluptatibus, blanditiis cupiditate. Corrupti, vitae dolorum. Esse beatae laudantium odit?</p>

            </Box>
            <Box m={"50px 100px"} width={{ sm: '500px', xs: "400px" }} sx={{
                "@media(max-width:600px)": {
                      width: "80%",
    margin: "0 auto 1rem auto"
                }
            }}>
                <TableContainer
                    component={Paper}>
                    <Table aria-aria-label='contact table'>
                        <TableHead>
                            <TableRow>
                                <TableCell sx={{ bgcolor: '#000', color: '#fff' }}>Contact Details </TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            <TableRow>
                                <TableCell><SupportAgentIcon sx={{ color: 'red', pt: 2 }} /> 1800-000-000 </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell><MailIcon sx={{ color: 'blue', pt: 2 }} /> xyz@gmail.com </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell><CallIcon sx={{ color: 'green', pt: 2 }} /> +91 98745 06321 </TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </TableContainer>
            </Box>
        </Layout >
    )
}

export default Contact
