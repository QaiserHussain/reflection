import React from 'react'
import { Container, Typography, Box } from '@mui/material'
import { DataGrid } from '@mui/x-data-grid'
import { Print } from '@mui/icons-material'

export default function Salaries() {
  const columns = [
    { field: 'id', headerName: 'ID', width: 90 },
    {
      field: 'employeeName',
      headerName: 'Employee Name',
      width: 250,
      editable: true,
    },
    {
      field: 'paid',
      headerName: 'Paid',
      width: 250,
      editable: true,
    },
    {
      field: 'balance',
      headerName: 'Balance',
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
          <div style={{ cursor: "pointer", color: 'blue' }}>
            <Print index={params.row.id} />
          </div>
        );
      }
    },
  ];

  const rows = [
    { id: 1, employeeName: 'Snow', paid: '0', balance: "30000" },
    { id: 2, employeeName: 'Lannister', paid: '0', balance: "45000" },
    { id: 3, employeeName: 'Lannister', paid: '500', balance: "50000" },
    { id: 4, employeeName: 'Stark', paid: '0', balance: "25000" },
    { id: 5, employeeName: 'Targaryen', paid: '70000', balance: "10000" },
    { id: 6, employeeName: 'Melisandre', paid: "95000", balance: "500" },
    { id: 7, employeeName: 'Clifford', paid: '8700', balance: "300" },
    { id: 8, employeeName: 'Frances', paid: '0', balance: "80000" },
    { id: 9, employeeName: 'Roxie', paid: '0', balance: "85000" },
  ];
  return (
    <Container maxWidth="xl">
      
      <Typography component={"h6"} variant="h6">Salary</Typography>

      <Box sx={{ height: 400, width: '100%', mt: '10px' }}>
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
