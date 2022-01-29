import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import DashboardIcon from "@mui/icons-material/Dashboard";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import { Input } from "@mui/material";
import { useState } from "react";
// import { useState } from "react";

export default function Navbar() {
  const [image, setImage] = useState("");

  function uploader(e) {
    console.log(e.target.files);
    setImage(e.target.files[0]);
    console.log(e.target.files[0]);
  }

  function upload() {
    var myHeaders = new Headers();
    myHeaders.append(
      "Authorization",
      "Bearer ce1f3f686415ae5abf79d13518ca5d1e8879a97c"
    );

    var myHeaders1 = new Headers();
    myHeaders1.append("Cookie", "route=222fc2df52ebc04b5a35043498fc068c");

    var formdata = new FormData();
    formdata.append("image", image);

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: formdata,
      redirect: "follow",
    };

    var requestOptions1 = {
      method: "GET",
      headers: myHeaders1,
      redirect: "follow",
    };

    fetch(
      "https://api.logmeal.es/v2/image/recognition/complete/v0.9?language=eng",
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => {
        console.log(result.recognition_results[0].name);
        fetch(
          `https://api.edamam.com/api/food-database/v2/parser?app_id=89b3616d&app_key=896c019f9a73920cb25b993240ca7d16&ingr=${result.recognition_results[0].name}`,
          requestOptions1
        )
          .then((r) => r.json())
          .then((res) => {
            console.log(res.hints[0].food.nutrients)

          })
          .catch((error) => console.log("error", error));
      })
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
        <Input type="file" onChange={uploader} />
        <br /> <br /> <br />
        <Button
          variant="contained"
          onClick={upload}
          sx={{ textTransform: "none", backgroundColor: "#FB008B" }}
        >
          Upload
        </Button>
      </div>
    </div>
  );
}
