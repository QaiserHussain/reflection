import React from 'react'
import { Typography, TextField, Button, Box, MenuItem, FormControlLabel, Checkbox, FormGroup, Grid, Radio } from '@mui/material';
import { PersonAddAlt } from '@mui/icons-material'
import { useFormik } from 'formik';
export default function JobcardForm() {

    const formik = useFormik({
        initialValues: {
            firstName: "",
            lastName: "",
            email: "",
            password: "",
            mobileNo: "",
            address: "",
            salary: "",
            designation: "",
            department: "",
            systemRole: "",
            valieInPKR: "",
            selectService: "",
            commissiontype: "",
        }
    })
    const menu = [
        { id: '1', name: 'one' },
        { id: '2', name: 'two' },
        { id: '3', name: 'three' },
        { id: '4', name: 'four' },
        { id: '5', name: 'five' },
        { id: '6', name: 'six' },
    ]
    const [state, setState] = React.useState({
        gilad: true,
        jason: false,
        antoine: false,
    });


    return (
        <Box component={"div"} sx={{ padding: '0px 10px', width: '100%', display: 'flex', flexDirection: 'column' }}>

            <Typography component={"div"} sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <Typography component="h6" variant="h6"> Add Job Card </Typography>
                <Button variant="contained" style={{ fontSize: '12px' }}><PersonAddAlt style={{ marginRight: '5px', fontSize: '20px' }} /> Add Jobcard</Button>
            </Typography>

            {/* <Typography component={'div'} sx={{display:'flex', justifyContent:'space-between', flexWrap:'wrap'}}> */}
            <Typography component={"div"} sx={{ border: "1px solid lightgrey", p: '20px', m: '20px', position: 'relative', display: 'flex', flex: '1' }}>
                <Box component={'span'} sx={{ position: 'absolute', top: '-17px', left: '20px', backgroundColor: 'white', padding: '5px' }}>Customer Detail</Box>
                <form style={{ width: '100%' }}>
                    <Typography component="div" sx={{ display: 'flex', flex: '1', justifyContent: 'space-between', mb: '10px' }}>
                        <TextField
                            name="firstName"
                            label="First Name"
                            fullWidth
                            // placeholder='First Name'
                            onChange={formik.handleChange}
                            value={formik.values.firstName}
                            sx={{ mr: '20px' }}
                        />

                        <TextField
                            name="lastName"
                            label="Last Name"
                            // placeholder='Last Name'
                            fullWidth
                            onChange={formik.handleChange}
                            value={formik.values.lastName}

                        />
                    </Typography>

                    <TextField
                        name="email"
                        label="Email"
                        fullWidth
                        // placeholder='Email'
                        onChange={formik.handleChange}
                        value={formik.values.email}
                        sx={{ mb: '10px' }}
                    />
                </form>
            </Typography>


            <Typography sx={{ border: "1px solid lightgrey", p: '20px', m: '20px', position: 'relative', display: 'flex', flex: '1', height: 'auto' }}>
                <Box component={'span'} sx={{ position: 'absolute', top: '-17px', left: '20px', backgroundColor: 'white', padding: '5px' }}>Vahicle Detail</Box>
                <form style={{ width: '100%' }}>
                    <Typography component="div" sx={{ display: 'flex', flex: '1', justifyContent: 'space-between', mb: '10px' }}>
                        <TextField
                            select
                            name="make"
                            label="Make"
                            // placeholder='Select Service / Product'
                            fullWidth
                            onChange={formik.handleChange}
                            value={formik.values.selectService}
                            sx={{ mr: '10px' }}
                        >
                            {menu.map(item => (
                                <MenuItem key={item.id} value={item.name}>{item.name}</MenuItem>
                            ))}
                        </TextField>

                        <TextField
                            name="model"
                            label="Model"
                            fullWidth
                            // placeholder='Email'
                            onChange={formik.handleChange}
                            value={formik.values.email}
                        />

                    </Typography>

                    <Typography component="div" sx={{ display: 'flex', flex: '1', justifyContent: 'space-between', mb: '10px' }}>
                        <TextField
                            select
                            name="registrationNo"
                            label="Registration No"
                            // placeholder='Select Service / Product'
                            fullWidth
                            onChange={formik.handleChange}
                            value={formik.values.selectService}
                            sx={{ mr: '10px' }}
                        />

                        <TextField
                            name="odometer"
                            label="ODO Meter"
                            fullWidth
                            // placeholder='Email'
                            onChange={formik.handleChange}
                            value={formik.values.email}
                        />

                    </Typography>

                    <Typography component="div" sx={{ display: 'flex', flex: '1', justifyContent: 'space-between', mb: '10px' }}>
                        <TextField
                            select
                            name="bookingDate"
                            label="Booking Date"
                            // placeholder='Select Service / Product'
                            fullWidth
                            onChange={formik.handleChange}
                            value={formik.values.selectService}
                            sx={{ mr: '10px' }}
                        >
                            {menu.map(item => (
                                <MenuItem key={item.id} value={item.name}>{item.name}</MenuItem>
                            ))}
                        </TextField>

                        <TextField
                            select
                            name="deliveryDate"
                            label="Delivery Date"
                            // placeholder='Select Service / Product'
                            fullWidth
                            onChange={formik.handleChange}
                            value={formik.values.selectService}

                        >
                            {menu.map(item => (
                                <MenuItem key={item.id} value={item.name}>{item.name}</MenuItem>
                            ))}
                        </TextField>

                    </Typography>

                    <Box sx={{my:'15px'}}>
                        <Typography component={"div"}>
                            Fuel
                        </Typography>

                        <FormGroup row>
                            <FormControlLabel value="E" name="r" control={<Radio name="r"/>} label="E" />
                            <FormControlLabel value="H" name="r" control={<Radio name="r"/>} label="H" />
                            <FormControlLabel value="F" name="r" control={<Radio name="r"/>} label="F" />
                        </FormGroup>
                    </Box>
                    <Box sx={{my:'15px'}}>
                        <Typography component={"div"}>
                            CheckList
                        </Typography>

                        <FormGroup column>
                            <Grid container>
                                <Grid item lg={2} md={2} sm={3} xs={3} sx={{ display: 'flex', flexDirection: 'column' }}>
                                    <FormControlLabel control={<Checkbox name="Nos" id="1" />} label="Nos" />
                                    <FormControlLabel control={<Checkbox name="Length" id="2" />} label="Length" />
                                    <FormControlLabel control={<Checkbox name="Breadth" id="3" />} label="Breadth" />
                                    <FormControlLabel control={<Checkbox name="Height" id="4" />} label="Height" />
                                </Grid>
                                <Grid item lg={2} md={2} sm={3} xs={3} sx={{ display: 'flex', flexDirection: 'column' }}>
                                    <FormControlLabel control={<Checkbox name="Nos" id="1" />} label="Nos" />
                                    <FormControlLabel control={<Checkbox name="Length" id="2" />} label="Length" />
                                    <FormControlLabel control={<Checkbox name="Breadth" id="3" />} label="Breadth" />
                                    <FormControlLabel control={<Checkbox name="Height" id="4" />} label="Height" />
                                </Grid>
                                <Grid item lg={2} md={2} sm={3} xs={3} sx={{ display: 'flex', flexDirection: 'column' }}>
                                    <FormControlLabel control={<Checkbox name="Nos" id="1" />} label="Nos" />
                                    <FormControlLabel control={<Checkbox name="Length" id="2" />} label="Length" />
                                    <FormControlLabel control={<Checkbox name="Breadth" id="3" />} label="Breadth" />
                                    <FormControlLabel control={<Checkbox name="Height" id="4" />} label="Height" />
                                </Grid>
                                <Grid item lg={2} md={2} sm={3} xs={3} sx={{ display: 'flex', flexDirection: 'column' }}>
                                    <FormControlLabel control={<Checkbox name="Nos" id="1" />} label="Nos" />
                                    <FormControlLabel control={<Checkbox name="Length" id="2" />} label="Length" />
                                    <FormControlLabel control={<Checkbox name="Breadth" id="3" />} label="Breadth" />
                                    <FormControlLabel control={<Checkbox name="Height" id="4" />} label="Height" />
                                </Grid>
                                <Grid item lg={2} md={2} sm={3} xs={3} sx={{ display: 'flex', flexDirection: 'column' }}>
                                    <FormControlLabel control={<Checkbox name="Nos" id="1" />} label="Nos" />
                                    <FormControlLabel control={<Checkbox name="Length" id="2" />} label="Length" />
                                    <FormControlLabel control={<Checkbox name="Breadth" id="3" />} label="Breadth" />
                                    <FormControlLabel control={<Checkbox name="Height" id="4" />} label="Height" />
                                </Grid>
                                <Grid item lg={2} md={2} sm={3} xs={3} sx={{ display: 'flex', flexDirection: 'column' }}>
                                    <FormControlLabel control={<Checkbox name="Nos" id="1" />} label="Nos" />
                                    <FormControlLabel control={<Checkbox name="Length" id="2" />} label="Length" />
                                    <FormControlLabel control={<Checkbox name="Breadth" id="3" />} label="Breadth" />
                                    <FormControlLabel control={<Checkbox name="Height" id="4" />} label="Height" />
                                </Grid>
                            </Grid>
                        </FormGroup>
                    </Box>
                   
                   <Box>
                   <Typography component={"div"}>
                            Inspection Report
                        </Typography>

                        <FormGroup row>
                            <FormControlLabel value="dented" control={<Checkbox />} label="Dented" />
                            <FormControlLabel value="broken" control={<Checkbox />} label="Broken" />
                            <FormControlLabel value="missing" control={<Checkbox />} label="Missing" />
                            <FormControlLabel value="paint chip" control={<Checkbox />} label="Paint Chip" />
                        </FormGroup>
                   </Box>


                </form>
            </Typography>
            <Typography component={"div"} sx={{ border: "1px solid lightgrey", p: '20px', m: '20px', position: 'relative', display: 'flex', flex: '1' }}>
                <Box component={'span'} sx={{ position: 'absolute', top: '-17px', left: '20px', backgroundColor: 'white', padding: '5px' }}>Customer Detail</Box>
                <form style={{ width: '100%' }}>
                    <Typography component="div" sx={{ display: 'flex', flex: '1', justifyContent: 'space-between', mb: '10px' }}>
                        <TextField
                            name="firstName"
                            label="First Name"
                            fullWidth
                            // placeholder='First Name'
                            onChange={formik.handleChange}
                            value={formik.values.firstName}
                            sx={{ mr: '20px' }}
                        />

                        <TextField
                            name="lastName"
                            label="Last Name"
                            // placeholder='Last Name'
                            fullWidth
                            onChange={formik.handleChange}
                            value={formik.values.lastName}

                        />
                    </Typography>

                    <TextField
                        name="email"
                        label="Email"
                        fullWidth
                        // placeholder='Email'
                        onChange={formik.handleChange}
                        value={formik.values.email}
                        sx={{ mb: '10px' }}
                    />
                </form>
            </Typography>

            {/* </Typography> */}
        </Box>
    )
}
