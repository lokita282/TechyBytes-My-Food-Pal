import Login from './Components/Login';
import './App.css';
import SignUp from './Components/Register';
import { BrowserRouter as Router } from "react-router-dom";
import { Route, Routes } from "react-router";
import Dashboard from './Pages/Dashboard';
import Statistics from './Pages/Statistics';

function App() {
  return (
    <div className='App'>
    <Router>
          <div className="App">
            <Routes>
                <Route path='/' element={<Login/>}/>
                <Route path='/register' element={<SignUp/>}/>
                <Route path='/dashboard' element={<Dashboard/>}/> 
                <Route path="/stats" element={<Statistics/>}/>
            </Routes>
          </div>
        </Router>
    </div>
  );
}

export default App;
