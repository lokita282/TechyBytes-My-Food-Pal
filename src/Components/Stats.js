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
