import React from 'react'
import { Link } from 'react-router-dom'
import { InputAdornment, Container, Box, Typography, TextField, IconButton } from '@mui/material'
import { LockOutlined, Email, Lock, LoginTwoTone } from '@mui/icons-material'
import {grey} from '@mui/material/colors'
import { borderBottom } from '@mui/system'

export default function Login() {
    const handleSubmit = () => { }
    return (
        <Container maxWidth="lg" sx={{ height: '100vh', width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Box component="div" sx={{ textAlign: 'center', width: '400px', border: '1px solid lightgrey', borderRadius: '10px', padding: '20px' }}>
                <LockOutlined sx={{ color:grey[700], fontSize:'40px'}}/>
                <Typography sx={{ my: '10px', color:grey[700] }} component={"h4"} variant="h4">LOGIN</Typography>

                <Box component="form" sx={{ display: 'flex', flexDirection: 'column' }}>
                    <TextField
                        placeholder='Email'
                        label='Email'
                        required
                        InputProps={{
                            startAdornment: <InputAdornment position="start"><Email /></InputAdornment>,
                        }}
                        sx={{ my: '10px' }}
                    />

                    <TextField
                        placeholder='Password'
                        label='Password'
                        required
                        InputProps={{
                            startAdornment: <InputAdornment position="start"><Lock /></InputAdornment>,
                        }}
                        sx={{ my: '10px' }}
                    />
                    <Typography component='div' sx={{ px:'3px',my:'10px',display:'flex', justifyContent:'space-between', alignItems:'center'}}>
                        <Typography component='span' sx={{borderBottom:'1px solid grey', color:grey[700],"&:hover": {cursor:'pointer'} }}>Password Reset</Typography>
                            <Link to="dashboard" sx={{textDecoration:'none'}}>
                                <LoginTwoTone sx={{border:'1px solid lightgrey', borderRadius:'50%',padding:'5px', color:grey[700]}}/>
                            </Link>
                    </Typography>
                </Box>

            </Box>
            {/* <Link to='dashboard'>Dasboard</Link> */}
        </Container>
    )
}
