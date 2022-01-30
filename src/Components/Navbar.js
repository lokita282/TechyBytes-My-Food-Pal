import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import DashboardIcon from "@mui/icons-material/Dashboard";
import BarChartIcon from '@mui/icons-material/BarChart';
import PersonIcon from '@mui/icons-material/Person';
import Button from '@mui/material/Button';
import { Link } from "react-router-dom";
import logo from '../Assets/menu.png'

export default function Navbar() {
  return (
    <div style={{height:'125vh'}}>
      <div style={{display:'flex', flexDirection:'row'}}>
      <img src={logo} alt="logo" width={65} style={{padding:'6px'}}/>
      <div style={{fontSize:'18px', color:'#FB008B', padding:'10px'}}><b> MY FOOD <br/> PAL </b> </div>
      </div>
        <ListItem button style={{ paddingTop: "10px", marginTop:'100px' }}>
          <ListItemIcon>
            <DashboardIcon style={{color:'#FB008B'}}/>
          </ListItemIcon>
          <Link to="/dashboard" style={{ textDecoration: "none" }}>
            {" "}
            <ListItemText primary="Dashboard" />{" "}
          </Link>
        </ListItem>
        <ListItem button style={{ paddingTop: "10px", marginTop:'40px' }}>
          <ListItemIcon>
            <BarChartIcon style={{color:'#FB008B'}}/>
          </ListItemIcon>
          <Link to="/stats" style={{ textDecoration: "none" }}>
            {" "}
            <ListItemText primary="Statistics" />{" "}
          </Link>
        </ListItem>
        <ListItem button style={{ paddingTop: "10px", marginTop:'40px' }}>
          <ListItemIcon>
            <PersonIcon style={{color:'#FB008B'}} />
          </ListItemIcon>
          <Link to="/blogs" style={{ textDecoration: "none" }}>
            {" "}
            <ListItemText primary="Blogs" />{" "}
          </Link>
        </ListItem>
        <div style={{marginTop:'300px', fontSize:'16px'}}>
          <Link to="/" style={{color:'#FB008B', textDecoration:'none'}}> <Button variant="contained" style={{backgroundColor:'#FB008B', textTransform:'none', width:'120px', height:'40px'}}> Logout </Button> </Link>
        </div>
    </div>
  );
}
