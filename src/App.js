import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar';
import Landing from './pages/Landing';
import Login from './components/forms/Login';
import DashBoard from './components/DashBoard';
import Employees from './components/Employees';
import Salaries from './components/Salaries';
import Vendors from './components/Vendors';
import PurchaseOrders from './components/PurchaseOrders'
import Invoice from './components/Invoice'
import Jobcard from './components/Jobcard'
import Products from './components/Products'
import Packages from './components/Packages'
import EmployeeForm from './components/forms/EmployeeForm';
import VendorForm from './components/forms/VendorForm';
import ProductForm from './components/forms/ProductForm';
import PackageForm from './components/forms/PackageForm';
import JobcardForm from './components/forms/JobcardForm';
function App() {

  return (
    <div className="App">
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='dashboard' element={<Landing />}>
            <Route path='dashboard' element={<DashBoard />} />
            <Route path='employees' element={<Employees />} >
              <Route path='addEmployee' element={<EmployeeForm />} />
            </Route>
            <Route path='salaries' element={<Salaries />} />
            <Route path='vendors' element={<Vendors />} >
              <Route path='addVendor' element={<VendorForm />} />
            </Route>
            <Route path='purchaseorders' element={<PurchaseOrders />} />
            <Route path='invoice' element={<Invoice />} />
            <Route path='jobcard' element={<Jobcard />} >
              <Route path='addJobcard' element={<JobcardForm />} />
            </Route>
            <Route path='products' element={<Products />} >
              <Route path='addProduct' element={<ProductForm />} />
            </Route>
            <Route path='packages' element={<Packages />} >
              <Route path='addPackage' element={<PackageForm />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>


    </div>
  );
}

export default App;
