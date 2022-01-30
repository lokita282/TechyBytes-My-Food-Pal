import { BarChart, Bar, LabelList, Label, XAxis } from "recharts";

export default function ExtraStats() {

  const data = [
    {
      name: 'Page A',
      uv: 4000,
      pv: 2400,
      amt: "Jan",
    },
    {
      name: 'Page B',
      uv: 3000,
      pv: 1398,
      amt: "Feb",
    },
    {
      name: 'Page C',
      uv: 2000,
      pv: 9800,
      amt: "Mar",
    },
    {
      name: 'Page D',
      uv: 2780,
      pv: 3908,
      amt: "Apr",
    },
    {
      name: 'Page E',
      uv: 1890,
      pv: 4800,
      amt: "May",
    },
    {
      name: 'Page F',
      uv: 2390,
      pv: 3800,
      amt: "June",
    },
    {
      name: 'Page G',
      uv: 3490,
      pv: 4300,
      amt: "July",
    },
    {
      name: 'Page H',
      uv: 3490,
      pv: 4300,
      amt: "August",
    },
    {
      name: 'Page I',
      uv: 3490,
      pv: 4300,
      amt: "Sept",
    },
    {
      name: 'Page I',
      uv: 3490,
      pv: 4300,
      amt: "Oct",
    },
    {
      name: 'Page I',
      uv: 3490,
      pv: 4300,
      amt: "Nov",
    },
    {
      name: 'Page I',
      uv: 3490,
      pv: 4300,
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
          height={300}
          data={data}
          style={{ padding: "30px" }}
        >
          <br/> <br/>
          <XAxis dataKey="amt">
            <Label value="Monthly Stats" offset={0} position="insideBottom" />
          </XAxis>
          <Bar dataKey="uv" fill="#FCC13F">
            <LabelList dataKey="name" position="top" />
          </Bar>
      </BarChart>
        </center>
    </div>
  );
}
