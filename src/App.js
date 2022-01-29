import Login from './Components/Login';
import './App.css';
import SignUp from './Components/Register';
import MoreDetails from './Components/MoreDetails';
import { BrowserRouter as Router } from "react-router-dom";
import { Route, Routes } from "react-router";
import Dashboard from './Pages/Dashboard';

function App() {
  return (
    <div className="App">
      <Router>
        <div className="App">
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/register" element={<SignUp />} />
            <Route path="/more-details" element={<MoreDetails />} />
            <Route path="/dashboard" element={<Dashboard />} />
          </Routes>
        </div>
      </Router>
    </div>
  )
}

export default App;
