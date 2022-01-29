import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import DashboardIcon from "@mui/icons-material/Dashboard";
import BarChartIcon from '@mui/icons-material/BarChart';
import PersonIcon from '@mui/icons-material/Person';
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div style={{height:'97.9vh'}}>
        <ListItem button style={{ paddingTop: "10px", marginTop:'20px' }}>
          <ListItemIcon>
            <DashboardIcon style={{color:'#FB008B'}}/>
          </ListItemIcon>
          <Link to="/dashboard" style={{ textDecoration: "none" }}>
            {" "}
            <ListItemText primary="DashBoard" />{" "}
          </Link>
        </ListItem>
        <ListItem button style={{ paddingTop: "10px", marginTop:'20px' }}>
          <ListItemIcon>
            <BarChartIcon style={{color:'#FB008B'}}/>
          </ListItemIcon>
          <Link to="/stats" style={{ textDecoration: "none" }}>
            {" "}
            <ListItemText primary="Statistics" />{" "}
          </Link>
        </ListItem>
        <ListItem button style={{ paddingTop: "10px", marginTop:'20px' }}>
          <ListItemIcon>
            <PersonIcon style={{color:'#FB008B'}} />
          </ListItemIcon>
          <Link to="/blogs" style={{ textDecoration: "none" }}>
            {" "}
            <ListItemText primary="Blogs" />{" "}
          </Link>
        </ListItem>
    </div>
  );
}
