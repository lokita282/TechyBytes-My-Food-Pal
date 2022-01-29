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


export default function SignUp() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    // eslint-disable-next-line no-console
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };

  return (
    <div style={{display:'flex', justifyContent:'center', height:'inherit', alignItems:'center'}}>
      <div style={{width:'80%', height:'80%', backgroundImage:`url(${cover})`, backgroundPositionX:'-100px', backgroundPositionY:'-55px'}}>
        <Container component="main" maxWidth="xs" sx={{backgroundColor:'white', boxShadow: '1px 1px 4px', paddingTop: '50px', paddingBottom:'75px'}}>
          <CssBaseline />
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Avatar sx={{ bgcolor: '#5800FF' }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5" fontFamily='ubuntu'>
              Sign Up
            </Typography>
            <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1, mx: 5 }}>
              <TextField
                margin="normal"
                id="email"
                label="Email Address"
                name="email"
                sx={{
                  width: '350px'
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
                  width: '350px'
                }}
                autoComplete="current-password"
              />
              <TextField
                margin="normal"
                id="name"
                label="Username"
                name="name"
                sx={{
                  width: '350px'
                }}
                autoComplete="name"
                autoFocus
              />
              <TextField
                margin="normal"
                id="contact"
                label="Contact"
                name="contact"
                sx={{
                  width: '350px'
                }}
                autoComplete="contact"
                autoFocus
              />
              <Button
                type="submit"
                variant="contained"
                sx={{ mt: 3, mb: 2, width: '350px', height: '45px', backgroundColor: '#5800FF', fontSize: '14px', textTransform: 'none', fontFamily:'ubuntu' }}
              >
                Sign Up
              </Button>
            </Box>
          </Box>
        </Container>
      </div>
    </div>
  );
}