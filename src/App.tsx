import { BrowserRouter, Route, Routes } from 'react-router-dom'
import "./App.css";
import HomePage from "./Components/Pages/HomePage";
import Navbar from './Components/Organisms/Navbar';
import LoginPage from './Components/Pages/LoginPage';
import EmployeeDetailPage from './Components/Pages/EmployeeDetailPage';
import EditEmployeePage from './Components/Pages/EditEmployeePage';
import CreateEmployeePage from './Components/Pages/CreateEmployeePage';

function App() {
  return (
    <div>
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path="/" Component={HomePage} />
          <Route path="/login" Component={LoginPage} />
          <Route path="/create-employee" Component={CreateEmployeePage} />
          <Route path="/edit-employee/:employeeId" Component={EditEmployeePage} />
          <Route path="/employee/:employeeId" Component={EmployeeDetailPage} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
