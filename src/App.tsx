import { BrowserRouter, Route, Routes } from 'react-router-dom'
import "./App.css";
import EmployeeService from "./service/EmployeeService";
import HomePage from "./Components/Pages/HomePage";
import Navbar from './Components/Organisms/Navbar';
import LoginPage from './Components/Pages/LoginPage';
import EmployeeDetailPage from './Components/Pages/EmployeeDetailPage';
import EditEmployeePage from './Components/Pages/EditEmployeePage';

function App() {
  return (
    <div>
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path="/" Component={HomePage} />
          <Route path="/login" Component={LoginPage} />
          <Route path="/edit-employee/:employeeId" Component={EditEmployeePage} />
          <Route path="/employee/:employeeId" Component={EmployeeDetailPage} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
