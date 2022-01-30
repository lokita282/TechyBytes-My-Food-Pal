import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import cover from '../Assets/cover.svg';
import Grid from '@mui/material/Grid';
import Lottie from 'react-lottie';
import ParticlesContainer from './ParticlesContainer'
import lottie from '../Assets/lottie.json';
import {useNavigate} from 'react-router-dom';


export default function SignIn() {

  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: lottie,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  }

  const nav = useNavigate()

  const handleSubmit = (event) => {

    event.preventDefault();
    const data = new FormData(event.currentTarget);
    // eslint-disable-next-line no-console

    var raw = JSON.stringify({
      email: data.get('email'),
      password: data.get('password'),
    });
    
    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };

    fetch("https://fast-mesa-43934.herokuapp.com/api/user/login", requestOptions)
    .then(response => response.text())
    .then(result => {
      console.log(result)
      localStorage.setItem('token',result)
      nav('/dashboard')
    })
    .catch(error => console.log('error', error));
  };

  return (
    <>
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        height: 'inherit',
        alignItems: 'center',
      }}
    >
      <Grid container component="main" sx={{ height: '100vh' }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={5}
          sx={{ paddingLeft: '170px', paddingTop: '35px' }}
        >
          <Lottie
            options={defaultOptions}
            height={400}
            width={600}
            style={{
              marginTop: '100px',
            }}
          />
        </Grid>
        <Grid>
          <div
            style={{
              width: '80%',
              height: '85%',
              backgroundImage: `url(${cover})`,
              backgroundPositionX: '-600px',
              backgroundPositionY: '-120px',
              marginLeft: '100px',
            }}
          >
            <Container
              component="main"
              maxWidth="xs"
              sx={{
                backgroundColor: 'white',
                boxShadow: '1px 1px 4px',
                marginTop: '110px',
                paddingTop: '50px',
                paddingBottom: '75px',
              }}
            >
              <CssBaseline />
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                }}
              >
                {/* <div> */}
                <Avatar sx={{ bgcolor: '#FCC13F' }}>
                  <LockOutlinedIcon />
                </Avatar>
                {/* </div>  
              <div > */}
                <Typography component="h1" variant="h5" fontFamily="ubuntu">
                  Sign in
                </Typography>
                <Box
                  component="form"
                  onSubmit={handleSubmit}
                  noValidate
                  sx={{ mt: 1, mx: 5 }}
                >
                  <TextField
                    margin="normal"
                    id="email"
                    label="Email Address"
                    name="email"
                    sx={{
                      width: '350px',
                    }}
                    autoComplete="email"
                    autoFocus
                  />
                  <TextField
                    margin="normal"
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    sx={{
                      width: '350px',
                    }}
                    autoComplete="current-password"
                  />
                  <Button
                    type="submit"
                    variant="contained"
                    sx={{
                      mt: 3,
                      mb: 2,
                      width: '350px',
                      height: '45px',
                      backgroundColor: '#FCC13F',
                      fontSize: '14px',
                      textTransform: 'none',
                      fontFamily: 'ubuntu',
                    }}
                  >
                    Sign In
                  </Button>
                </Box>
                {/* </div> */}
              </Box>
            </Container>
          </div>
        </Grid>
      </Grid>
    </div>
     <div
        style={{
          opacity: '0.25',
          width: '100%',
          height: '100%',
        }}
      >
        <ParticlesContainer />
      </div>
      </>
  )
}