import { Grid, styled, Paper } from "@mui/material";

export default function Stats() {
  const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));

  return (
    <div>
      <h2 style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', marginTop: '5%', marginBottom: '2%', color: '#FB008B'}} classNameName='domainHeading'>Daily Stats</h2>
      <Grid container>
        <Grid item xs={2} md={4}>
          <Item>
          </Item>
        </Grid>
        <Grid item xs={2} md={4}>
          <Item>
          </Item>
        </Grid>
        <Grid item xs={2} md={4}>
          <Item>
          </Item>
        </Grid>
      </Grid>
    </div>
  );
}
