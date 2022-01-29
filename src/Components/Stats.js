import { Grid, styled, Paper } from "@mui/material";
import { PieChart, Pie, Cell } from "recharts";

export default function Stats() {
  const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));

  const data = [
    { name: "Group A", value: 400 },
    { name: "Group B", value: 100 },
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
            <PieChart width={400} height={200}>
              <Pie
                data={data}
                cx={200}
                startAngle={180}
                endAngle={0}
                innerRadius={60}
                outerRadius={80}
                fill="#FCC13F"
                dataKey="value"
              >
                {data.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Pie>
            </PieChart>
          </Item>
        </Grid>
        <Grid item xs={2} md={4}>
          <Item>
            <PieChart width={400} height={200}>
              <Pie
                data={data}
                cx={200}
                startAngle={180}
                endAngle={0}
                innerRadius={60}
                outerRadius={80}
                fill="#FCC13F"
                dataKey="value"
              ></Pie>
            </PieChart>
          </Item>
        </Grid>
        <Grid item xs={6} md={4}>
        <Item>
            <PieChart width={400} height={200}>
              <Pie
                data={data}
                cx={200}
                startAngle={180}
                endAngle={0}
                innerRadius={60}
                outerRadius={80}
                fill="#FCC13F"
                dataKey="value"
              ></Pie>
            </PieChart>
          </Item>
        </Grid>
      </Grid>
    </div>
  );
}
