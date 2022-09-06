import React from 'react'
import { Link } from 'react-router-dom'
import { Typography, Button, Container,Box } from '@mui/material';
import { Delete, Edit, PersonAddAlt } from '@mui/icons-material'
import { DataGrid } from '@mui/x-data-grid';

export default function Vendors() {
  const columns = [
    { field: 'id', headerName: 'ID', width: 90 },
    {
      field: 'name',
      headerName: 'Vendor Name',
      width: 200,
      editable: true,
    },
    {
      field: 'pocName',
      headerName: 'POC Name',
      width: 200,
      editable: true,
    },
    {
      field: 'pocContact',
      headerName: 'POC Contact',
      // type: 'number',
      width: 200,
      editable: true,
    },
    {
      field: 'pocEmail',
      headerName: 'POC Email',
      // type: 'number',
      width: 200,
      editable: true,
    },
    {
      field: 'action',
      headerName: 'Actions',
      description: 'This column has a value getter and is not sortable.',
      sortable: false,
      width: 100,
      renderCell: (params) => {
        return (
            <div style={{ display:'flex', justifyContent:'space-around',width:'100%' }}>
                <Edit style={{cursor:'pointer', color:'green'}} index={params.row.id} />
                <Delete style={{cursor:'pointer',color:'red'}} index={params.row.id}/>
             </div>
        );
     }
    }
  ];
  
  const rows = [
    { id: 1, name: 'Snow', pocName: "shahzaib", pocContact:"920301234567", pocEmail: 'Jon@gmail.com'  },
    { id: 2, name: 'Lannister', pocName: "shahzaib", pocContact:"920301234567", pocEmail: 'Cersei@gmail.com' },
    { id: 3, name: 'Lannister', pocName: "shahzaib", pocContact:"920301234567", pocEmail: 'Jaime@gmail.com' },
    { id: 4, name: 'Stark', pocName: "shahzaib", pocContact:"920301234567", pocEmail: 'Arya@gmail.com' },
    { id: 5, name: 'Targaryen', pocName: "shahzaib", pocContact:"920301234567", pocEmail: 'Daenerys@gmail.com'},
    { id: 6, name: 'Melisandre', pocName: "shahzaib", pocContact:"920301234567", pocEmail: "meli@gmail.com" },
    { id: 7, name: 'Clifford', pocName: "shahzaib", pocContact:"920301234567", pocEmail: 'Ferrara@gmail.com' },
    { id: 8, name: 'Frances', pocName: "shahzaib", pocContact:"920301234567", pocEmail: 'Rossini@gmail.com' },
    { id: 9, name: 'Roxie', pocName: "shahzaib", pocContact:"920301234567", pocEmail: 'Harvey@gmail.com' },
  ];
  return (
    <Container maxWidth="xl">
      <Typography component="div" sx={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
        <Typography componeny="div" variant="h6">Vendor List</Typography>
        <Typography componeny="div" variant="button">
          <Link to="addVendor" style={{ textDecoration: 'none' }} >
            <Button variant='contained'><PersonAddAlt style={{ marginRight: '5px' }} /> Add Vendor </Button>
          </Link>
        </Typography>
      </Typography>

      <Box sx={{ height: 400, width: '100%', mt:'20px' }}>
      
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={100}
        rowsPerPageOptions={[100]}
        checkboxSelection
        disableSelectionOnClick
        experimentalFeatures={{ newEditingApi: true }}
      />
    </Box>

    </Container>
  )
}
