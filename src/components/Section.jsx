import React from 'react'
import {Routes, Route} from 'react-router-dom'
import {Typography} from '@mui/material'
import DashBoard from './DashBoard'
import Employees from './Employees'
import Salaries from './Salaries'
import Vendors from './Vendors'
import PurchaseOrders from './PurchaseOrders'
import Invoice from './Invoice'
import Jobcard from './Jobcard'
import Products from './Products'
import Packages from './Packages'
import EmployeeForm from './forms/EmployeeForm'
import VendorForm from './forms/VendorForm'
import ProductForm from './forms/ProductForm'
import PackageForm from './forms/PackageForm'
import JobcardForm from './forms/JobcardForm'

export default function section() {
  return (
    <Typography variant="div" sx={{padding:'30px',display:'flex', flex:'1',overflow:'auto'}}>
    <Routes>
      <Route path='/' element={<DashBoard />} />
      <Route path='employees' element={<Employees />}/>
      <Route path='/employees/addEmployee' element={<EmployeeForm />} />
      <Route path='salaries' element={<Salaries />} />
      <Route path='vendors' element={<Vendors />} />
      <Route path='/vendors/addVendor' element={<VendorForm />} />
      <Route path='purchaseorders' element={<PurchaseOrders />} />
      <Route path='invoice' element={<Invoice />} />
      <Route path='jobcard' element={<Jobcard />} />
      <Route path='/jobcard/addJobcard' element={<JobcardForm />} />
      <Route path='products' element={<Products />} />
      <Route path='/products/addProduct' element={<ProductForm />} />
      <Route path='packages' element={<Packages />} />
      <Route path='/packages/addPackage' element={<PackageForm />} />

    </Routes>
    </Typography>
  )
}
