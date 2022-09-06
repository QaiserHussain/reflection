import React from 'react'
import { Link } from 'react-router-dom'
import { Typography, Button, Container, Box } from '@mui/material';
import { Delete, Edit, NoteAdd, Print,CloudUpload } from '@mui/icons-material'
import { DataGrid } from '@mui/x-data-grid';

export default function Products() {
  const columns = [
    { field: 'id', headerName: 'ID', width: 90 },
    {
      field: 'name',
      headerName: 'Name',
      width: 200,
      editable: true,
    },
    {
      field: 'stock',
      headerName: 'Stock',
      width: 100,
      editable: true,
    },
    {
      field: 'sku',
      headerName: 'SKU',
      // type: 'number',
      width: 150,
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
      field: 'action',
      headerName: 'Actions',
      description: 'This column has a value getter and is not sortable.',
      sortable: false,
      width: 150,
      renderCell: (params) => {
        return (
          <div style={{ display: 'flex', justifyContent: 'space-around', width: '100%' }}>
            <CloudUpload style={{ cursor: 'pointer', color: 'green' }} index={params.row.id} />
            <Edit style={{ cursor: 'pointer', color: 'green' }} index={params.row.id} />
            <Print style={{ cursor: 'pointer', color: 'blue' }} index={params.row.id} />
            <Delete style={{ cursor: 'pointer', color: 'red' }} index={params.row.id} />
          </div>
        );
      }
    }
  ];

  const rows = [
    { id: 1, name: 'Snow', stock: "9", datetime: "09/02/22", createdBy:"Admin", sku: '2120' },
    { id: 2, name: 'Lannister', stock: "9", datetime: "09/02/22", createdBy:"Admin", sku: '212'},
    { id: 3, name: 'Lannister', stock: "9", datetime: "09/02/22", createdBy:"Admin", sku: '212' },
    { id: 4, name: 'Stark', stock: "9", datetime: "09/02/22", createdBy:"Admin", sku: '212m' },
    { id: 5, name: 'Targaryen', stock: "9", datetime: "09/02/22", createdBy:"Admin", sku: '212' },
    { id: 6, name: 'Melisandre', stock: "9", datetime: "09/02/22", createdBy:"Admin", sku: "212" },
    { id: 7, name: 'Clifford', stock: "9", datetime: "09/02/22", createdBy:"Admin", sku: '212' },
    { id: 8, name: 'Frances', stock: "9", datetime: "09/02/22", createdBy:"Admin", sku: '212' },
    { id: 9, name: 'Roxie', stock: "9", datetime: "09/02/22", createdBy:"Admin", sku: '2120' },
  ];
  return (
    <Container maxWidth="xl">
      <Typography component="div" sx={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
        <Typography componeny="div" variant="h6">Products</Typography>
        <Typography componeny="div" variant="button">
          <Link to="addProduct" style={{ textDecoration: 'none' }} >
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
