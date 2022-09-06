import React from 'react'
import { AppBar, Toolbar, Container, Typography, IconButton } from '@mui/material'
import { AccountCircle } from '@mui/icons-material'
import {grey} from '@mui/material/colors'

export default function Navbar() {
    return (
        <AppBar position='fixed'>
            <Container maxWidth="xl">
                <Toolbar sx={{justifyContent:'space-between', alignItems: 'center'}}>
                        <Typography variant='div' sx={{ position: 'relative' }}>
                            <Typography variant='h4' sx={{ letterSpacing: 3, fontSize:'30px' }}>Reflection</Typography>
                            <Typography variant='caption' sx={{ fontSize:'10px' , position: 'absolute', bottom: -10, right: 2 }}> HIGH END DETAILING </Typography>
                        </Typography>
                        <Typography variant="div">
                            <IconButton
                                size="large"
                            >
                                <AccountCircle sx={{color:'white'}}/>
                            </IconButton>
                        </Typography>
                </Toolbar>
            </Container>
        </AppBar>
    )
}
