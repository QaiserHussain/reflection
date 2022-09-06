import React from 'react'
import { Link } from 'react-router-dom'
import { Typography, Button, Container, Box } from '@mui/material';
import { Delete, Edit, NoteAdd, Print } from '@mui/icons-material'
import { DataGrid } from '@mui/x-data-grid';

export default function Packages() {
  const columns = [
    { field: 'id', headerName: 'ID', width: 60 },
    {
      field: 'name',
      headerName: 'Package Name',
      width: 200,
      editable: true,
    },
    {
      field: 'price',
      headerName: 'Price',
      width: 70,
      editable: true,
    },
    {
      field: 'salePrice',
      headerName: 'Sale Price',
      // type: 'number',
      width: 100,
      editable: true,
    },
    {
      field: 'datetime',
      headerName: 'Date Time',
      // type: 'number',
      width: 150,
      editable: true,
    },
    {
      field: 'createdBy',
      headerName: 'Created By',
      // type: 'number',
      width: 150,
      editable: true,
    },
    {
      field: 'status',
      headerName: 'Status',
      // type: 'number',
      width: 100,
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
          <div style={{ display: 'flex', justifyContent: 'space-around', width: '100%' }}>
            <Edit style={{ cursor: 'pointer', color: 'green' }} index={params.row.id} />
            <Print style={{ cursor: 'pointer', color: 'blue' }} index={params.row.id} />
            <Delete style={{ cursor: 'pointer', color: 'red' }} index={params.row.id} />
          </div>
        );
      }
    }
  ];

  const rows = [
    { id: 1, name: 'Snow', price: "9", salePrice:"200", datetime: "09/02/22", createdBy:"Admin", status:"active" },
    { id: 2, name: 'Lannister', price: "9", salePrice:"200", datetime: "09/02/22", createdBy:"Admin", status:"active" },
    { id: 3, name: 'Lannister', price: "9", salePrice:"200", datetime: "09/02/22", createdBy:"Admin", status:"active",  },
    { id: 4, name: 'Stark', price: "9", salePrice:"200", datetime: "09/02/22", createdBy:"Admin", status:"active" },
    { id: 5, name: 'Targaryen', price: "9", salePrice:"200", datetime: "09/02/22", createdBy:"Admin", status:"active"},
    { id: 6, name: 'Melisandre', price: "9", salePrice:"200", datetime: "09/02/22", createdBy:"Admin", status:"active"},
    { id: 7, name: 'Clifford', price: "9", salePrice:"200", datetime: "09/02/22", createdBy:"Admin", status:"active" },
    { id: 8, name: 'Frances', price: "9", salePrice:"200", datetime: "09/02/22", createdBy:"Admin", status:"active" },
    { id: 9, name: 'Roxie', price: "9", salePrice:"200", datetime: "09/02/22", createdBy:"Admin", status:"active" },
  ];
  return (
    <Container maxWidth="xl">
    <Typography component="div" sx={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
      <Typography componeny="div" variant="h6">Packages</Typography>
      <Typography componeny="div" variant="button">
        <Link to="addPackage" style={{ textDecoration: 'none' }} >
          <Button variant='contained'><NoteAdd style={{ marginRight: '5px' }} /> Add Package </Button>
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
