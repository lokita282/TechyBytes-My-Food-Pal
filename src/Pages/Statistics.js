import Button from "@mui/material/Button";
import { Input } from "@mui/material";
import { useState } from "react";
import Grid from "@mui/material/Grid";
import Navbar from "../Components/Navbar";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import {Typography, Card} from "@mui/material"
import { BarChart, Bar, LabelList, Label, XAxis } from "recharts";

export default function Statistics() {
  const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));

  const [image, setImage] = useState("");
  const [food, setFood] = useState();
  const [nut, setNut] = useState({});
  const [data, setData] = useState([{}]);

  function uploader(e) {
    console.log(e.target.files);
    setImage(e.target.files[0]);
    console.log(e.target.files[0]);
  }

  function upload() {
    var myHeaders = new Headers();
    myHeaders.append(
      "Authorization",
      "Bearer 91dde578a0453568b989fcec64668c450743faef"
    );

    var myHeaders1 = new Headers();
    myHeaders1.append("Cookie", "route=222fc2df52ebc04b5a35043498fc068c");

    var myHeaders2 = new Headers();
    myHeaders2.append(
      "Authorization",
      `Bearer ${localStorage.getItem('token')}`
    );
    myHeaders2.append("Content-Type", "application/json");

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
        setFood(result.recognition_results[0].name);
        fetch(
          `https://api.edamam.com/api/food-database/v2/parser?app_id=89b3616d&app_key=6d52253d899440f5256b26d8b7a46e8a&ingr=${result.recognition_results[0].name}`,
          requestOptions1
        )
          .then((r) => r.json())
          .then((res) => {
            setNut(res.hints[0].food.nutrients);
            setData([{
                name: "Calories:",
                uv: res.hints[0].food.nutrients.ENERC_KCAL / 1000,
                pv: res.hints[0].food.nutrients.ENERC_KCAL / 1000,
                amt: res.hints[0].food.nutrients.ENERC_KCAL / 1000,
              },
              {
                name: "Proteins",
                uv: res.hints[0].food.nutrients.PROCNT,
                pv: res.hints[0].food.nutrients.PROCNT,
                amt: res.hints[0].food.nutrients.PROCNT,
              },
              {
                name: "Fats",
                uv: res.hints[0].food.nutrients.FAT,
                pv: res.hints[0].food.nutrients.FAT,
                amt: res.hints[0].food.nutrients.FAT,
              },
              {
                name: "Carbohydrates",
                uv: res.hints[0].food.nutrients.CHOCDF,
                pv: res.hints[0].food.nutrients.CHOCDF,
                amt: res.hints[0].food.nutrients.CHOCDF,
              },
              {
                name: "Fibres",
                uv: res.hints[0].food.nutrients.FIBTG,
                pv: res.hints[0].food.nutrients.FIBTG,
                amt: res.hints[0].food.nutrients.FIBTG,
              },
            ]);

            var raw = JSON.stringify({
              "name": result.recognition_results[0].name,
              "category": "Healthy",
              "date": "2022-01-29",
              "calories": parseInt(res.hints[0].food.nutrients.ENERC_KCAL),
              "protein": parseInt(res.hints[0].food.nutrients.PROCNT),
              "fat": parseInt(res.hints[0].food.nutrients.FAT),
              "carbs": parseInt(res.hints[0].food.nutrients.CHOCDF),
              "fibres": parseInt(res.hints[0].food.nutrients.FIBTG),
            });

            var requestOptions2 = {
              method: "POST",
              headers: myHeaders2,
              body: raw,
              redirect: "follow",
            };

            fetch(
              "https://fast-mesa-43934.herokuapp.com/api/food/createLog",
              requestOptions2
            )
              .then((ans) => ans.text())
              .then((d) => {
                  console.log(d)
              })
              .catch((error) => console.log("error", error));
          })
          .catch((error) => console.log("error", error));
      })
      .catch((error) => console.log("error", error));
  }
  return (
    <Grid container>
      <Grid item xs={2}>
        <Item sx={{ height: 'max' }}>
          <Navbar />
        </Item>
      </Grid>

      <Grid
        item
        xs={10}
        sx={{
          display: 'flex',
          flexDirection: 'column',
          padding: '30px',
          paddingTop: '200px',
        }}
      >
        <center>
          <Card sx={{ width: 500, elevation: '5' }}>
            <Input type="file" onChange={uploader} />
            <br /> <br /> <br />
            <Button
              variant="contained"
              onClick={upload}
              sx={{
                textTransform: 'none',
                backgroundColor: '#FB008B',
                width: '500px',
                
              }}
            >
              <Typography variant='body1'> Upload </Typography>
            </Button>
          </Card>
          <div
            style={{
              display: 'block',
              marginTop: '30px',
              marginBottom: '30px',
            }}
          >
            <Card sx={{ width: 500, elevation: '5' }}>
              <Typography variant="body1">
                Calories: {nut.ENERC_KCAL ? nut.ENERC_KCAL : 0} kcal
              </Typography>
              <Typography variant="body1">
                Proteins:
                {nut.PROCNT ? nut.PROCNT : 0} grams
              </Typography>
              <Typography variant="body1">
                Fats:
                {nut.FAT ? nut.FAT : 0} grams
              </Typography>
              <Typography variant="body1">
                Carbohydrates:
                {nut.CHOCDF ? nut.CHOCDF : 0} grams
              </Typography>
              <Typography variant="body1">
                Fibres:
                {nut.FIBTG ? nut.FIBTG : 0} grams
              </Typography>
            </Card>
            <BarChart
              width={800}
              height={400}
              data={data}
              style={{ padding: '30px' }}
            >
              <XAxis dataKey="amt">
                <Label value="Nutrients" offset={0} position="insideBottom" />
              </XAxis>
              <Bar dataKey="uv" fill="#FCC13F">
                <LabelList dataKey="name" position="top" />
              </Bar>
            </BarChart>
          </div>
        </center>
      </Grid>
    </Grid>
  )
}