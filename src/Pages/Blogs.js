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
            <Item>
              <Navbar />
            </Item>
          </Grid>
          <Grid
            item
            xs={10}
            sx={{
              display: "flex",
              flexDirection: "row",
              spacing: "2",
            }}
          >
            <Grid container spacing={2}>
              <Grid item xs={3} md={12}>
                <Card/>
              </Grid>
              <Grid item xs={3} md={12}>
              <Item>
                <Map/>
            </Item>
              </Grid>
            </Grid>
          </Grid>
          <Grid item md={12} xs={12}>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}
