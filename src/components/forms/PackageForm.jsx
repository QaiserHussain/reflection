import React from 'react'
import { Typography, TextField, Button, Box } from '@mui/material';
import { useFormik } from 'formik';
import { Save, SaveAsOutlined } from '@mui/icons-material'
export default function PackageForm() {
    const formik = useFormik({
        initialValues: {
            vendorName: "",
            pocName: "",
            address: "",
            pocEmail: "",
            pocContact: "",
        }
    })
  return (
    <Box component={"div"} sx={{ backgroundColor: 'lighgrey', width: '100%', padding: '0 50px' }} >
            <Typography component={"div"} sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <Typography component="h5" variant="h5"> Add Package </Typography>
                <Button variant="contained" style={{ fontSize: '12px' }}><Save style={{ marginRight: '5px', fontSize: '20px' }} /> Save Package</Button>
            </Typography>

            <Typography component={"div"} sx={{ border: "1px solid lightgrey", position: 'relative', padding: '20px', my: '20px' }}>
                <Box component={'span'} sx={{ position: 'absolute', top: '-17px', left: '20px', backgroundColor: 'white', padding: '5px' }}>Package Detail</Box>
                <form>
                        <TextField
                            name="packageName"
                            label="Package Name"
                            fullWidth
                            // placeholder='First Name'
                            onChange={formik.handleChange}
                            value={formik.values.productName}
                            sx={{ mb: '10px' }}
                        />


                    <TextField
                        name="packageDescription"
                        label="Package Description"
                        fullWidth
                        // placeholder='Email'
                        onChange={formik.handleChange}
                        value={formik.values.productDescription}
                        sx={{ mb: '10px' }}
                    />

                    <Typography component="div" sx={{ display: 'flex', justifyContent: 'space-between', mb: '10px' }}>
                        <TextField
                            name="price"
                            label="Price"
                            // placeholder='Password'
                            fullWidth
                            onChange={formik.handleChange}
                            value={formik.values.price}
                            sx={{ mr: '10px' }}
                        />

                        <TextField
                            name="salePrice"
                            label="Sale Price"
                            // placeholder='Mobile No'
                            fullWidth
                            onChange={formik.handleChange}
                            value={formik.values.salePrice} />
                    </Typography>


                    <Typography component={"div"} sx={{ display: 'flex', justifyContent: 'end' }}>
                        <Button variant="contained" style={{ fontSize: '12px' }}><Save style={{ marginRight: '5px', fontSize: '20px' }} /> Save Product</Button>
                    </Typography>
                </form>
            </Typography>

        </Box>
  )
}
