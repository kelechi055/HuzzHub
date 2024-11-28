'use client'; 

import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import NextLink from 'next/link';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { signInWithPopup } from 'firebase/auth';
import { auth, googleAuthProvider } from '../lib/firebase'; 
import GoogleIcon from '@mui/icons-material/Google';
import { useRouter } from 'next/router'; // Import useRouter

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        HuzzHub
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const defaultTheme = createTheme();

export default function SignIn() {
  const router = useRouter(); // Initialize useRouter

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };

  const handleSignIn = (provider) => {
    let authProvider;

    // Switch statement for provider
    switch (provider) {
      case 'google':
        authProvider = googleAuthProvider;
        break;
      // Add additional cases for other providers if needed
      default:
        console.error('Provider not supported');
        return;
    }

    signInWithPopup(auth, authProvider)
      .then((result) => {
        console.log('Signed in as:', result.user);
        // Redirect user to a new page or perform actions after successful sign-in
      })
      .catch((error) => {
        console.error('Sign-in error:', error.message);
      });
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
            
            <Typography variant="body2" align="center" sx={{ mt: 2, mb: 2 }}>
              OR
            </Typography>
            
            <Button
              fullWidth
              variant="outlined"
              sx={{ mb: 2, display: 'flex', alignItems: 'center' }}
              onClick={() => handleSignIn('google')}
            >
              <GoogleIcon sx={{ mr: 1 }} />
              Sign in with Google
            </Button>
            <Grid container>
              <Grid item xs>
                <NextLink href="/forgot-password" passHref>
                  <Link variant="body2">Forgot password?</Link>
                </NextLink>
              </Grid>
              <Grid item>
                <NextLink href="/sign-up" passHref>
                  <Link variant="body2">
                    {"Don't have an account? Sign Up"}
                  </Link>
                </NextLink>
              </Grid>
            </Grid>
          </Box>
          
          <Copyright sx={{ mt: 8, mb: 4 }} />
        </Box>
      </Container>
    </ThemeProvider>
  );
}
