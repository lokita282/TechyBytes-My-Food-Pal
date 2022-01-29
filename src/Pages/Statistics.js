import Button from "@mui/material/Button";
import { Input } from "@mui/material";
import { useState } from "react";
import {
  BarChart,
  Bar,
  LabelList
} from "recharts";

export default function Statistics() {
  const [image, setImage] = useState("");
  const [nut, setNut] = useState({});
  const [data, setData] = useState([{}])

  function uploader(e) {
    console.log(e.target.files);
    setImage(e.target.files[0]);
    console.log(e.target.files[0]);
  }

  function upload() {
    var myHeaders = new Headers();
    myHeaders.append(
      "Authorization",
      "Bearer 4cf9f58f29d588255411f6e12291738a0c4b77c3"
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
            console.log(typeof(res.hints[0].food.nutrients.ENERC_KCAL));
            setNut(res.hints[0].food.nutrients);
            setData([
                {
                  name: 'Calories:',
                  uv: 3000,
                  pv: 2400,
                  amt: res.hints[0].food.nutrients.ENERC_KCAL/1000,
                },
                {
                  name: 'Proteins',
                  uv: 3000,
                  pv: 1398,
                  amt: res.hints[0].food.nutrients.PROCNT,
                },
                {
                  name: 'Fats',
                  uv: 2000,
                  pv: 9800,
                  amt: res.hints[0].food.nutrients.FAT,
                },
                {
                  name: 'Carbohydrates',
                  uv: 2780,
                  pv: 3908,
                  amt: res.hints[0].food.nutrients.CHOCDF,
                },
                {
                  name: 'Fibres',
                  uv: 1890,
                  pv: 4800,
                  amt: res.hints[0].food.nutrients.FIBTG,
                }
              ])
          })
          .catch((error) => console.log("error", error));
      })
      .catch((error) => console.log("error", error));
  }
    return (
        <center>
          <Input type="file" onChange={uploader} />
          <br /> <br /> <br />
          <Button
            variant="contained"
            onClick={upload}
            sx={{ textTransform: "none", backgroundColor: "#FB008B" }}
          >
            Upload
          </Button>
          <div>
          Calories:
            {nut.ENERC_KCAL/1000} kcal
          </div>
          <div>
            Proteins:
            {nut.PROCNT} grams
          </div>
          <div>
            Fats:
            {nut.FAT} grams
          </div>
          <div>
            Carbohydrates:
            {nut.CHOCDF} grams
          </div>
          <div>
            Fibres:
            {nut.FIBTG} grams
          </div>
          <div style={{marginTop:'50px'}}>
            <BarChart width={800} height={400} data={data} style={{padding:'30px'}}>
                <Bar dataKey="uv" fill="#FCC13F">
                <LabelList dataKey="name" position="top" />
                </Bar>
            </BarChart>
            Food stats
          </div>
        </center>
      );
    }
