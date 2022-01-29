import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import DashboardIcon from "@mui/icons-material/Dashboard";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import { Input } from "@mui/material";
import { useState } from "react";

export default function Navbar() {

    const [image, setImage] = useState()

  function uploader(e) {
      setImage(e.target.files[0]);
      console.log(new Image(e.target.files[0]))
  }

  async function upload() {
    var myHeaders = new Headers();
    myHeaders.append(
      "Authorization",
      "Bearer 6d3c801c8a19f8c829abe83f49c2267e2f4c5dbf"
    );

    var formdata = new FormData();
    formdata.append("image", image, "[PROXY]");

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: formdata,
      redirect: "follow",
    };

    // await axios.post('https://api.logmeal.es/v2/image/recognition/complete/v0.9?language=eng', requestOptions)
    // .then((res)=>res.json())
    // .then((result)=>console.log(result))
    // .catch((error)=>console.log(error)) 

    await fetch(
      "https://api.logmeal.es/v2/image/recognition/complete/v0.9?language=eng",
      requestOptions
    )
      .then((response) => response.text())
      .then((result) => console.log(result))
      .catch((error) => console.log("error", error));
  }

  return (
    <div>
      <div>
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
      <div style={{ marginTop: "450px" }}>
        <Input 
        type="file" 
        id="image" 
        onChange={uploader} 
        />
        <Button
          variant="contained"
          onClick={upload}
          sx={{ textTransform: "none", backgroundColor: "#FB008B"}}
        >
          Upload
        </Button>
      </div>
    </div>
  );
}
