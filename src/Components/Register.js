import { useState } from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import cover from '../Assets/cover.svg';
import ParticlesContainer from './ParticlesContainer'
import { useNavigate } from "react-router-dom";


export default function SignUp() {

  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  const nav = useNavigate()
  
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [pass, setPass] = useState();
  const [cont, setCont] = useState();

  const handle = () => {
    localStorage.setItem('Name', name)
    localStorage.setItem('Email', email)
    localStorage.setItem('Password', pass)
    localStorage.setItem('Contact', cont)
  }
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    // eslint-disable-next-line no-console

    var raw = JSON.stringify({
      "name": data.get('name'),
      "password": data.get('password'),
      "email": data.get('email'),
      "contact": data.get('contact')
    })

    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };

    fetch("https://fast-mesa-43934.herokuapp.com/api/user/register", requestOptions)
    .then(response => response.text())
    .then(result => {
      console.log(result)
      localStorage.setItem('token',result)
      nav('/more-details')
    })
    .catch(error => console.log('error', error));
}

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
        <div
          style={{
            width: '80%',
            height: '80%',
            backgroundImage: `url(${cover})`,
            backgroundPositionX: '-350px',
            backgroundPositionY: '-55px',
          }}
        >
          <Container
            component="main"
            maxWidth="xs"
            sx={{
              backgroundColor: 'white',
              boxShadow: '1px 1px 4px',
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
              <Avatar sx={{ bgcolor: '#FCC13F' }}>
                <LockOutlinedIcon />
              </Avatar>
              <Typography component="h1" variant="h5" fontFamily="ubuntu">
                Sign Up
              </Typography>
              <Box
                component="form"
                onSubmit={handleSubmit}
                noValidate
                sx={{ mt: 1, mx: 5 }}
              >
                <TextField
                  margin="normal"
                  id="name"
                  label="username"
                  name="name"
                  sx={{
                    width: '350px',
                  }}
                  autoComplete="name"
                  autoFocus
                  onChange={(e) => setName(e.target.value)}
                />
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
                  onChange={(e) => setEmail(e.target.value)}
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
                  onChange={(e) => setPass(e.target.value)}
                />
                <TextField
                  margin="normal"
                  id="contact"
                  label="Contact"
                  name="contact"
                  sx={{
                    width: '350px',
                  }}
                  autoComplete="contact"
                  autoFocus
                  onChange={(e) => setCont(e.target.value)}
                />
                <Button
                  type="submit"
                  variant="contained"
                  sx={{
                    mt: 3,
                    mb: 2,
                    width: '350px',
                    height: '45px',
                    fontSize: '14px',
                    textTransform: 'none',
                    backgroundColor: '#FCC13F',
                    fontFamily: 'ubuntu',
                    ":hover":{
                      backgroundColor:'#FB008B'
                    }
                  }}
                  onClick={handle}
                >
                  Sign Up
                </Button>
              </Box>
            </Box>
          </Container>
        </div>
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