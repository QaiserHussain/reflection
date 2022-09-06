import React from 'react'
import { Typography, TextField, Button, Box } from '@mui/material';
import { useFormik } from 'formik';
import { PersonAddAlt } from '@mui/icons-material'

export default function VendorForm() {
    const formik = useFormik({
        initialValues: {
            vendorName:"",
            pocName:"",
            address:"",
            pocEmail:"",
            pocContact:"",
        }
    })

    return (
        <Box component={"div"} sx={{ backgroundColor: 'lighgrey', width: '100%', padding: '0 50px' }} >
            <Typography component={"div"} sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <Typography component="h5" variant="h5"> Add Vendor </Typography>
                <Button variant="contained" style={{ fontSize: '12px' }}><PersonAddAlt style={{ marginRight: '5px', fontSize: '20px' }} /> Add Vendor</Button>
            </Typography>

            <Typography component={"div"} sx={{ border: "1px solid lightgrey", position: 'relative', padding: '20px', my: '20px' }}>
                <Box component={'span'} sx={{ position: 'absolute', top: '-17px', left: '20px', backgroundColor: 'white', padding: '5px' }}>Vendor Detail</Box>
                <form>
                    <Typography component="div" sx={{ display: 'flex', justifyContent: 'space-between', mb: '10px' }}>
                        <TextField
                            name="vendorName"
                            label="Vendor Name"
                            fullWidth
                            // placeholder='First Name'
                            onChange={formik.handleChange}
                            value={formik.values.vendorName}
                            sx={{ mr: '10px' }}
                        />

                        <TextField
                            name="pocName"
                            label="POC Name"
                            // placeholder='Last Name'
                            fullWidth
                            onChange={formik.handleChange}
                            value={formik.values.pocName}

                        />
                    </Typography>

                    <TextField
                        name="address"
                        label="Address"
                        fullWidth
                        // placeholder='Email'
                        onChange={formik.handleChange}
                        value={formik.values.address}
                        sx={{ mb: '10px' }}
                    />

                    <Typography component="div" sx={{ display: 'flex', justifyContent: 'space-between', mb: '10px' }}>
                        <TextField
                            name="pocEmail"
                            label="POC E-mail"
                            // placeholder='Password'
                            fullWidth
                            onChange={formik.handleChange}
                            value={formik.values.pocEmail}
                            sx={{ mr: '10px' }}
                        />

                        <TextField
                            name="pocContact"
                            label="POC Contact"
                            // placeholder='Mobile No'
                            fullWidth
                            onChange={formik.handleChange}
                            value={formik.values.pocContact} />
                    </Typography>

                    <Typography component={"div"} sx={{ display: 'flex', justifyContent: 'end' }}>
                        <Button variant="contained" style={{ fontSize: '12px' }}><PersonAddAlt style={{ marginRight: '5px', fontSize: '20px' }} /> Add Vendor</Button>
                    </Typography>
                </form>
            </Typography>

        </Box>

    )
}