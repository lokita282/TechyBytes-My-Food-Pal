import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from "recharts";

export default function ExtraStats() {

  const data = [
    {
      name: '1',
      uv: 300,
      pv: 0,
      amt: "Jan",
    },
    {
      name: '2',
      uv: 300,
      pv: 0,
      amt: "Feb",
    },
    {
      name: '3',
      uv: 200,
      pv: 0,
      amt: "Mar",
    },
    {
      name: '4',
      uv: 278,
      pv: 200,
      amt: "Apr",
    },
    {
      name: '5',
      uv: 189,
      pv: 100,
      amt: "May",
    },
    {
      name: '6',
      uv: 239,
      pv: 200,
      amt: "June",
    },
    {
      name: '7',
      uv: 349,
      pv: 200,
      amt: "July",
    },
    {
      name: '8',
      uv: 349,
      pv: 0,
      amt: "August",
    },
    {
      name: '9',
      uv: 349,
      pv: 430,
      amt: "Sept",
    },
    {
      name: '10',
      uv: 349,
      pv: 430,
      amt: "Oct",
    },
    {
      name: '11',
      uv: 349,
      pv: 430,
      amt: "Nov",
    },
    {
      name: '12',
      uv: 349,
      pv: 430,
      amt: "Dec",
    },
  ]
  return (
    <div>
      <h2
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          marginTop: "2%",
          color: "#FB008B",
        }}
        classNameName="domainHeading"
      >
        Monthly Stats
      </h2>
        <center>
        <BarChart
      width={800}
      height={500}
      data={data}
      margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar name="healthy" dataKey="pv" fill="#FB008B" />
      <Bar name="junk" dataKey="uv" fill="#FCC13F" />
    </BarChart>
        </center>
    </div>
  );
}
