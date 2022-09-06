import React from 'react'
import { Link } from 'react-router-dom'
import { Typography, Button, Container, Box } from '@mui/material';
import { Delete, Edit, NoteAdd, Print, Visibility } from '@mui/icons-material'
import { DataGrid } from '@mui/x-data-grid';

export default function Jobcard() {
  const columns = [
    { field: 'id', headerName: 'ID', width: 90 },
    {
      field: 'customer',
      headerName: 'Customer',
      width: 250,
      editable: true,
    },
    {
      field: 'vehicle',
      headerName: 'Vehicle',
      width: 250,
      editable: true,
    },
    {
      field: 'status',
      headerName: 'Status',
      // type: 'number',
      width: 200,
      editable: true,
    },
    {
      field: 'action',
      headerName: 'Actions',
      description: 'This column has a value getter and is not sortable.',
      sortable: false,
      width: 200,
      renderCell: (params) => {
        return (
          <div style={{ display: 'flex', justifyContent: 'space-around', width: '100%' }}>
            <Visibility style={{ cursor: 'pointer', color: 'gray' }} index={params.row.id} />
            <Edit style={{ cursor: 'pointer', color: 'green' }} index={params.row.id} />
            <Print style={{ cursor: 'pointer', color: 'blue' }} index={params.row.id} />
            <Delete style={{ cursor: 'pointer', color: 'red' }} index={params.row.id} />
          </div>
        );
      }
    }
  ];

  const rows = [
    { id: 1, customer: 'Snow', vehicle: "shahzaib", status: "Active" },
    { id: 2, customer: 'Lannister', vehicle: "shahzaib", status: "Active" },
    { id: 3, customer: 'Lannister', vehicle: "shahzaib", status: "Active" },
    { id: 4, customer: 'Stark', vehicle: "shahzaib", status: "Active" },
    { id: 5, customer: 'Targaryen', vehicle: "shahzaib", status: "Active" },
    { id: 6, customer: 'Melisandre', vehicle: "shahzaib", status: "Active" },
    { id: 7, customer: 'Clifford', vehicle: "shahzaib", status: "Active" },
    { id: 8, customer: 'Frances', vehicle: "shahzaib", status: "Active" },
    { id: 9, customer: 'Roxie', vehicle: "shahzaib", status: "Active" },
  ];

  return (
    <Container maxWidth="xl">
      <Typography component="div" sx={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
        <Typography componeny="div" variant="h6">Job Cards</Typography>
        <Typography componeny="div" variant="button">
          <Link to="addJobcard" style={{ textDecoration: 'none' }} >
            <Button variant='contained'><NoteAdd style={{ marginRight: '5px' }} /> Create </Button>
          </Link>
        </Typography>
      </Typography>

      <Box sx={{ height: 400, width: '100%', mt: '20px' }}>

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
