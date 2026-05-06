  import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import EmployeeComponent from './components/EmployeeComponent';
import HeaderComponent from './components/HeaderComponent';
import DepartmentComponent from './components/DepartmentComponent'
import ListEmployeeComponent from './components/ListEmployeeComponent';
import ListDepartmentComponent from './components/ListDepartmentComponent';
import FooterComponent from './components/FooterComponent'
import {BrowserRouter,Routes, Route} from 'react-router-dom';

function App() {

  return (
  <>
    <BrowserRouter>
      <HeaderComponent/>
        <Routes>
          {/* //http://localhost:3000 */}
          <Route path='/' element={<ListEmployeeComponent/>}></Route>
          {/* //http://localhost:3000/employees */}
          <Route path='/employees' element={<ListEmployeeComponent/>}></Route>
          {/* //http://localhost:3000/add-employee */}
          <Route path='/add-employee' element={<EmployeeComponent/>}></Route>
          {/* //http://localhost:3000/edit-employee/1 */}
          <Route path='/edit-employee/:id' element={<EmployeeComponent/>}></Route>
          {/* //http://localhost:3000/departments */}
          <Route path='/departments' element={<ListDepartmentComponent/>}></Route>
          {/* //http://localhost:3000/add-department */}
          <Route path='/add-department' element={<DepartmentComponent/>}></Route>
          {/* //http://localhost:3000/edit-department/1 */}
          <Route path='/edit-department/:id' element={<DepartmentComponent/>}></Route>

        </Routes>
      <FooterComponent/>
    </BrowserRouter>
  </>
  );
}

export default App
