import React from 'react'
import { Link } from 'react-router-dom'
import { Typography, Button, Container,Box } from '@mui/material';
import { Delete, Edit, PersonAddAlt } from '@mui/icons-material'
import { DataGrid } from '@mui/x-data-grid';

export default function Employees() {
  const columns = [
    { field: 'id', headerName: 'ID', width: 90 },
    {
      field: 'name',
      headerName: 'Name',
      width: 250,
      editable: true,
    },
    {
      field: 'email',
      headerName: 'Email',
      width: 250,
      editable: true,
    },
    {
      field: 'department',
      headerName: 'Department',
      // type: 'number',
      width: 240,
      editable: true,
    },
    {
      field: 'action',
      headerName: 'Actions',
      description: 'This column has a value getter and is not sortable.',
      sortable: false,
      width: 150,
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
    { id: 1, name: 'Snow', email: 'Jon@gmail.com', department: "Computer Science" },
    { id: 2, name: 'Lannister', email: 'Cersei@gmail.com', department: "Computer Science" },
    { id: 3, name: 'Lannister', email: 'Jaime@gmail.com', department: "Computer Science" },
    { id: 4, name: 'Stark', email: 'Arya@gmail.com', department: "Computer Science" },
    { id: 5, name: 'Targaryen', email: 'Daenerys@gmail.com', department: "Computer Science"},
    { id: 6, name: 'Melisandre', email: "meli@gmail.com", department: "Computer Science" },
    { id: 7, name: 'Clifford', email: 'Ferrara@gmail.com', department: "Computer Science" },
    { id: 8, name: 'Frances', email: 'Rossini@gmail.com', department: "Computer Science" },
    { id: 9, name: 'Roxie', email: 'Harvey@gmail.com', department: "Computer Science" },
  ];
  return (
    <Container maxWidth="xl">
      <Typography component="div" sx={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
        <Typography componeny="div" variant="h6">Employees List</Typography>
        <Typography componeny="div" variant="button">
          <Link to="addEmployee" style={{ textDecoration: 'none' }} >
            <Button variant='contained'><PersonAddAlt style={{ marginRight: '5px' }} /> Add Employee </Button>
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
