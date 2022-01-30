import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Navbar from "../Components/Navbar";
import Stats from "../Components/Stats";
import Calendar from "../Components/Calendar";
import ExtraStats from "../Components/ExtraStats";

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function BasicGrid() {


  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container>
        <Grid item xs={2}>
          <Item sx={{ height: "max" }}>
            <Navbar />
          </Item>
        </Grid>
        <Grid
          item
          xs={10}
          sx={{
            display: "flex",
            flexDirection: "column",
            spacing: "2",
          }}
        >
          <div style={{marginTop:'20px', marginLeft:'20px', display:'flex', flexDirection:'row',alignItems:'center', justifyContent:'space-around'}}>
            <center> <Calendar /> </center>
          </div>
          <div>
            <Stats/>
          </div>
          <div>
            <ExtraStats />
          </div>
        </Grid>
      </Grid>
    </Box>
  );
}
