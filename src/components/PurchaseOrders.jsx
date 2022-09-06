import React from 'react'
import { Link } from 'react-router-dom'
import { Typography, Button, Container,Box } from '@mui/material';
import { Delete, Edit, PersonAddAlt, NoteAdd, Print } from '@mui/icons-material'
import { DataGrid } from '@mui/x-data-grid';

export default function PurchaseOrders() {
  const columns = [
    { field: 'id', headerName: 'ID', width: 90 },
    {
      field: 'vendorName',
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
      field: 'date',
      headerName: 'Date',
      // type: 'number',
      width: 150,
      editable: true,
    },
    {
      field: 'amount',
      headerName: 'Amount',
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
            <div style={{ display:'flex', justifyContent:'space-around',width:'100%' }}>
                <Edit style={{cursor:'pointer', color:'green'}} index={params.row.id} />
                <Print style={{cursor:'pointer',color:'blue'}} index={params.row.id}/>
                <Delete style={{cursor:'pointer',color:'red'}} index={params.row.id}/>
             </div>
        );
     }
    }
  ];
  
  const rows = [
    { id: 1, vendorName: 'Snow', pocName: "shahzaib", date:"09/02/22", amount: 'PKR: 695800'  },
    { id: 2, vendorName: 'Lannister', pocName: "shahzaib", date:"09/02/22", amount: 'PKR: 25000' },
    { id: 3, vendorName: 'Lannister', pocName: "shahzaib", date:"09/02/22", amount: 'PKR: 25000' },
    { id: 4, vendorName: 'Stark', pocName: "shahzaib", date:"09/02/22", amount: 'PKR: 25000m' },
    { id: 5, vendorName: 'Targaryen', pocName: "shahzaib", date:"09/02/22", amount: 'PKR: 25000'},
    { id: 6, vendorName: 'Melisandre', pocName: "shahzaib", date:"09/02/22", amount: "PKR: 25000" },
    { id: 7, vendorName: 'Clifford', pocName: "shahzaib", date:"09/02/22", amount: 'PKR: 2500' },
    { id: 8, vendorName: 'Frances', pocName: "shahzaib", date:"09/02/22", amount: 'PKR: 25052' },
    { id: 9, vendorName: 'Roxie', pocName: "shahzaib", date:"09/02/22", amount: 'PKR: 235000' },
  ];
  return (
    <Container maxWidth="xl">
      <Typography component="div" sx={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
        <Typography componeny="div" variant="h6">Purchase Orders</Typography>
        <Typography componeny="div" variant="button">
          <Link to="addVendor" style={{ textDecoration: 'none' }} >
            <Button variant='contained'><NoteAdd style={{ marginRight: '5px' }} /> Create </Button>
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
