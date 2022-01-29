import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import DashboardIcon from "@mui/icons-material/Dashboard";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div style={{height:'97.9vh'}}>
        <ListItem button style={{ paddingTop: "10px" }}>
          <ListItemIcon>
            <DashboardIcon />
          </ListItemIcon>
          <Link to="/dashboard" style={{ textDecoration: "none" }}>
            {" "}
            <ListItemText primary="DashBoard" />{" "}
          </Link>
        </ListItem>
        <ListItem button style={{ paddingTop: "10px" }}>
          <ListItemIcon>
            <ShoppingCartIcon />
          </ListItemIcon>
          <Link to="/stats" style={{ textDecoration: "none" }}>
            {" "}
            <ListItemText primary="Statistics" />{" "}
          </Link>
        </ListItem>
        <ListItem button style={{ paddingTop: "10px" }}>
          <ListItemIcon>
            <ShoppingCartIcon />
          </ListItemIcon>
          <Link to="/profile" style={{ textDecoration: "none" }}>
            {" "}
            <ListItemText primary="Profile" />{" "}
          </Link>
        </ListItem>
    </div>
  );
}
