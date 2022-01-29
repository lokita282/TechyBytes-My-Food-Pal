import Card from "../Components/Card";
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Navbar from '../Components/Navbar';
import Map from '../Components/Maps'

export default function Blogs() {
    const Item = styled(Paper)(({ theme }) => ({
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
      }));
  return (
    <div>
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
              flexDirection: "row",
              display: "flex",
              flexDirection: "column",
              spacing: "2",
            }}
          >
            <Item>
                <Card />
            </Item>
            <Item>
                <Map/>
            </Item>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}
