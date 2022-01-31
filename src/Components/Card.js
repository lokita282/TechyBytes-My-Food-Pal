import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import cover from '../Assets/image1.jpg';
import image2 from '../Assets/image2.jpg';
import image3 from '../Assets/image3.jpg';

export default function MultiActionAreaCard() {
  return (
    <div style={{display:'flex', flexDirection:'row', padding:'20px 10px 10px 10px', justifyContent:'space-evenly'}}>
      <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={cover}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Food
          </Typography>
          <Typography variant="body2" color="text.secondary">
              A group of 8 crazy bloggers who see the world through hungry
              eyes!"-that's how they describe themselves. Undoubtedly, they have
              got the best dishes covered on their blog without compromising on
              food photography skills.
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
      </CardActions>
    </Card>
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={image2}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Dieting
          </Typography>
          <Typography variant="body2" color="text.secondary">
          The more daring would experiment in the kitchen, remembering the
              successes, and mercifully forgetting any culinary
              disasters.Turning your passion takes a lot of effort and
              confidence.
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
      </CardActions>
    </Card>
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={image3}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Health
          </Typography>
          <Typography variant="body2" color="text.secondary">
          How did we ever manage to cook before the arrival of the internet?
              I suppose we had to rely on cookbooks, cooking tv shows, and
              knowledge handed down from our grandmothers.
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
      </CardActions>
    </Card>
    </div>
  );
}