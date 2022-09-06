import React from 'react';
import { Grid, Typography, TextField, Button, Box, MenuItem, FormControlLabel, Checkbox } from '@mui/material';
import {PersonAddAlt} from '@mui/icons-material'
import { useFormik } from 'formik';

export default function EmployeeForm() {
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
  return (
    <Box component={"div"} sx={{ padding: '0px 10px', width: '100%', display: 'flex', flexDirection: 'column' }}>
      <Typography component={"div"} sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Typography component="h6" variant="h6"> Add Employee </Typography>
        <Button variant="contained" style={{ fontSize: '12px' }}><PersonAddAlt style={{ marginRight: '5px', fontSize: '20px' }} /> Add Vendor</Button>
    
      </Typography>

      <Typography component={'div'} sx={{display:'flex', justifyContent:'space-between', flexWrap:'wrap'}}>
        <Typography component={"div"} sx={{ border: "1px solid lightgrey", p: '20px', m: '20px', position: 'relative',display:'flex',flex:'1',justifyContent:'center' }}>
          <Box component={'span'} sx={{ position: 'absolute', top: '-17px', left: '20px', backgroundColor: 'white', padding: '5px' }}>Employee Detail</Box>
          <form>
            <Typography component="div" sx={{ display: 'flex', justifyContent: 'space-between', mb: '10px' }}>
              <TextField
                name="firstName"
                label="First Name"
                fullWidth
                // placeholder='First Name'
                onChange={formik.handleChange}
                value={formik.values.firstName}
                sx={{ mr: '10px' }}
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

            <Typography component="div" sx={{ display: 'flex', justifyContent: 'space-between', mb: '10px' }}>
              <TextField
                name="password"
                label="Password"
                // placeholder='Password'
                fullWidth
                onChange={formik.handleChange}
                value={formik.values.password}
                sx={{ mr: '10px' }}
              />

              <TextField
                name="mobileNo"
                label="Mobile No"
                // placeholder='Mobile No'
                fullWidth
                onChange={formik.handleChange}
                value={formik.values.mobileNo} />
            </Typography>

            <TextField
              name="address"
              label="Address"
              fullWidth
              // placeholder='Address'
              onChange={formik.handleChange}
              value={formik.values.address}
              sx={{ mb: '10px' }} />

            <Typography component="div" sx={{ display: 'flex', justifyContent: 'space-between', mb: '10px' }}>
              <TextField
                name="salary"
                label="Salary"
                // placeholder='Salary'
                fullWidth
                onChange={formik.handleChange}
                value={formik.values.salary}
                sx={{ mr: '10px' }}
              />

              <TextField
                select
                name="department"
                label="Department"
                // placeholder='Department'
                fullWidth
                onChange={formik.handleChange}
                value={formik.values.department} >
                {menu.map(item => (
                  <MenuItem key={item.id} value={item.name}>{item.name}</MenuItem>
                ))}
              </TextField>
            </Typography>

            <Typography component="div" sx={{ display: 'flex', justifyContent: 'space-between', mb: '10px' }}>
              <TextField
                name="designation"
                label="Designation"
                // placeholder='Designation'
                onChange={formik.handleChange}
                fullWidth
                value={formik.values.designation}
                sx={{ mr: '10px' }} />

              <TextField
                select
                name="systemRole"
                label="System Role"
                // placeholder='System Role'
                fullWidth
                onChange={formik.handleChange}
                value={formik.values.systemRole} >
                {menu.map(item => (
                  <MenuItem key={item.id} value={item.name}>{item.name}</MenuItem>
                ))}
              </TextField>
            </Typography>
            <FormControlLabel control={<Checkbox />} label="No Login required fro this employee " />
          </form>

        </Typography>

        <Typography sx={{ border: "1px solid lightgrey", p: '20px', m:'20px', position: 'relative', display:'flex', flex:'1', height:'300px' }}>
          <Box component={'span'} sx={{ position: 'absolute', top: '-17px', left: '20px', backgroundColor: 'white', padding: '5px' }}>Commission Detail</Box>
          <form>
            <TextField
              select
              name="selectService"
              label="Select Service / Product"
              // placeholder='Select Service / Product'
              fullWidth
              onChange={formik.handleChange}
              value={formik.values.selectService}
              sx={{ mb: '10px' }}
            >
              {menu.map(item => (
                <MenuItem key={item.id} value={item.name}>{item.name}</MenuItem>
              ))}
            </TextField>

            <TextField
              select
              name="commissionType"
              label="Commission Type"
              // placeholder='Commission Type'
              fullWidth
              onChange={formik.handleChange}
              value={formik.values.commissionType}
              sx={{ mb: '10px' }}>
              {menu.map(item => (
                <MenuItem key={item.id} value={item.name}>{item.name}</MenuItem>
              ))}

            </TextField>


            <TextField
              name="valueInPKR"
              label="Value in % or PKR"
              fullWidth
              // placeholder='Value in % or PKR'
              onChange={formik.handleChange}
              value={formik.values.valieInPKR}
              sx={{ mb: '10px' }}
            />
            <FormControlLabel control={<Checkbox />} label="No Login required fro this employee " />
          </form>
        </Typography>
      </Typography>
    </Box>
  )
}
