import * as React from 'react'
import Avatar from '@mui/material/Avatar'
import Button from '@mui/material/Button'
import CssBaseline from '@mui/material/CssBaseline'
import TextField from '@mui/material/TextField'
import Box from '@mui/material/Box'
import RateReviewOutlinedIcon from '@mui/icons-material/RateReviewOutlined'
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'
import cover from '../Assets/cover.svg'
import ParticlesContainer from './ParticlesContainer'
import Radio from '@mui/material/Radio'
import RadioGroup from '@mui/material/RadioGroup'
import FormControlLabel from '@mui/material/FormControlLabel'
import FormLabel from '@mui/material/FormLabel'
import { Navigate, useNavigate } from 'react-router'

export default function MoreDetails() {

  const nav = useNavigate()
  
  const handleSubmit = (event) => {
    event.preventDefault()
    const data = new FormData(event.currentTarget)
    nav('/dashboard')
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
            backgroundPositionX: '-325px',
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
                <RateReviewOutlinedIcon />
              </Avatar>
              <Typography
                component="h1"
                variant="h5"
                fontFamily="ubuntu"
                align="center"
              >
                Hi {localStorage.getItem('Name')}, help us get to know you a
                little better...
              </Typography>
              <Box
                component="form"
                onSubmit={handleSubmit}
                noValidate
                sx={{ mt: 1, mx: 5 }}
              >
                <FormLabel id="demo-radio-buttons-group-label">
                  Gender
                </FormLabel>
                <RadioGroup
                  row
                  aria-labelledby="demo-radio-buttons-group-label"
                  defaultValue="female"
                  name="radio-buttons-group"
                >
                  <FormControlLabel
                    value="female"
                    control={<Radio />}
                    label="Female"
                  />
                  <FormControlLabel
                    value="male"
                    control={<Radio />}
                    label="Male"
                  />
                  <FormControlLabel
                    value="other"
                    control={<Radio />}
                    label="Other"
                  />
                </RadioGroup>
                <TextField
                  margin="normal"
                  id="height"
                  label="Height"
                  name="height"
                  sx={{
                    width: '350px',
                  }}
                  autoComplete="email"
                  autoFocus
                />
                <TextField
                  margin="normal"
                  name="age"
                  label="Age"
                  type="age"
                  id="age"
                  sx={{
                    width: '350px',
                  }}
                />
                <TextField
                  margin="normal"
                  id="weight"
                  label="Weight"
                  name="weight"
                  sx={{
                    width: '350px',
                  }}
                  autoComplete="contact"
                  autoFocus
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
                  Next
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
