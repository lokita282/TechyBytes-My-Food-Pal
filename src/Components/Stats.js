import { Grid, styled, Paper, Card } from "@mui/material";
import { PieChart, Pie, Cell} from "recharts";
import {useState,useEffect} from "react"

export default function Stats() {
  const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));

  const [dat,setData] = useState({data:{totalCalories:0,totalCarbs:0,totalFibres:0}})
  useEffect(()=>{
    var myHeaders = new Headers();
    myHeaders.append("Authorization", `Bearer ${localStorage.getItem('token')}`);
  
    var requestOptions = {
      method: 'GET',
      headers: myHeaders,
      redirect: 'follow'
    };
  
    fetch("https://fast-mesa-43934.herokuapp.com/api/food/get/2022-01-30/", requestOptions)
      .then(response => response.json())
      .then(result => {
        setData(result)
        console.log(result)
      })
      .catch(error => console.log('error', error));
  },[])

  const data = [
    { name: "Calories", value: dat.data.totalCalories?dat.data.totalCalories:0 },
    { name: "Group B", value: 200-dat.data.totalCalories?200-dat.data.totalCalories:0 },
  ];

  const data2 = [
    { name: "Carbs", value: dat.data.totalCarbs?dat.data.totalCarbs:0 },
    { name: "Group B", value: 200-dat.data.totalCarbs?200-dat.data.totalCarbs:0 },
  ];

  const data3 = [
    { name: "Fibres", value: dat.data.totalFibres?dat.data.totalFibres:0 },
    { name: "Group B", value: 200-dat.data.totalFibres?200-dat.data.totalFibres:0 },
  ];

  const COLORS = ["#FCC13F", "#FFFFFF"];

  return (
    <div>
      <h2
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          marginTop: "2%",
          marginBottom: "2%",
          color: "#FB008B",
        }}
        classNameName="domainHeading"
      >
        Daily Stats
      </h2>
      <Grid container>
        <Grid item xs={2} md={4}>
          <Item>
            <PieChart width={400} height={175}>
              <Pie
                data={data}
                cx={200}
                startAngle={180}
                endAngle={0}
                innerRadius={60}
                outerRadius={80}
                fill="#FCC13F"
                dataKey="value"
                label
              >
                {data.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Pie>
            </PieChart>
            <p> Calories </p>
          </Item>
        </Grid>
        <Grid item xs={2} md={4}>
          <Item>
            <Card >
            <PieChart width={400} height={175}>
              <Pie
                data={data2}
                cx={200}
                startAngle={180}
                endAngle={0}
                innerRadius={60}
                outerRadius={80}
                fill="#FCC13F"
                dataKey="value"
                label
              >
                {data2.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Pie>
            </PieChart>
            </Card>
            <p> Carbs </p>
          </Item>
        </Grid>
        <Grid item xs={6} md={4}>
        <Item>
            <PieChart width={400} height={175}>
              <Pie
                data={data3}
                cx={200}
                startAngle={180}
                endAngle={0}
                innerRadius={60}
                outerRadius={80}
                fill="#FCC13F"
                dataKey="value"
                label
              >
                {data3.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Pie>
            </PieChart>
            <p> Fibres </p>
          </Item>
        </Grid>
      </Grid>
    </div>
  );
}
