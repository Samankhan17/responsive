import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel';
import FormControl from '@mui/material/FormControl';
import Link from '@mui/material/Link';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import MuiCard from '@mui/material/Card';
import { styled } from '@mui/material/styles';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
// import {googleIcon,FacebookIcon} from' @mui/material/Icon';
// import AppTheme from './theme/AppTheme';
// import ColorModeSelect from './theme/ColorModeSelect';
// import { GoogleIcon, FacebookIcon, SitemarkIcon } from './components/CustomIcons';
import CircularProgress from '@mui/material/CircularProgress';
import { useState } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';
import Icon from '@mui/material/Icon';

const Card = styled(MuiCard)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignSelf: 'center',
  width: '100%',
  padding: theme.spacing(2),
  gap: theme.spacing(4),
  margin: 'auto',
  boxShadow:
    'hsla(220, 30%, 5%, 0.05) 0px 5px 15px 0px, hsla(220, 25%, 10%, 0.05) 0px 15px 35px -5px',
  [theme.breakpoints.up('sm')]: {
    width: '450px',
  },
  ...theme.applyStyles('dark', {
    boxShadow:
      'hsla(220, 30%, 5%, 0.5) 0px 5px 15px 0px, hsla(220, 25%, 10%, 0.08) 0px 15px 35px -5px',
  }),
}));

const SignUpContainer = styled(Stack)(({ theme }) => ({
  height: 'calc((1 - var(--template-frame-height, 0)) * 100dvh)',
  minHeight: '100%',
  padding: theme.spacing(2),
  [theme.breakpoints.up('sm')]: {
    padding: theme.spacing(4),
  },
  '&::before': {
    content: '""',
    display: 'block',
    position: 'absolute',
    zIndex: -1,
    inset: 0,
    backgroundImage:
      'radial-gradient(ellipse at 50% 50%, hsl(210, 100%, 97%), hsl(0, 0%, 100%))',
    backgroundRepeat: 'no-repeat',
    ...theme.applyStyles('dark', {
      backgroundImage:
        'radial-gradient(at 50% 50%, hsla(210, 100%, 16%, 0.5), hsl(220, 30%, 5%))',
    }),
  },
}));

export default function Login() {
  const [emailError, setEmailError] = React.useState(false);
  const [emailErrorMessage, setEmailErrorMessage] = React.useState('');
  const [passwordError, setPasswordError] = React.useState(false);
  const [passwordErrorMessage, setPasswordErrorMessage] = React.useState('');



  const [spassword,setSpassword]=React.useState();
  const[email,setEmail]=React.useState();
  const[password,setPassword]=React.useState();
const[error,setError]=React.useState();

  
  const[caperror,setCaperror]=React.useState();
  const navigate = useNavigate();

    


  const validateInputs =(e) => {

    let isValid = true;
    if (!email.value || !/\S+@\S+\.\S+/.test(email.value)) {
      setEmailError(true);
      isValid = false;
    } else {
      setEmailError(false);
      setEmailErrorMessage('');
    }

    if (!password.value || password.value.length < 6) {
      setPasswordError(true);
      setPasswordErrorMessage('Password must be at least 6 characters long.');
      isValid = false;
    } else {
      setPasswordError(false);
      setPasswordErrorMessage('');  
    }

      return isValid;
  };


const submit = (e) => {
    e.preventDefault();
    if (!email || !password) {
      setError('Please fill in All fields.');
      return;
    }
    if (email === '123' && password === '123'){
           
      navigate('/dashboard')
        setError('');
    } else {
      setError('Invalid email or password.');
       }

      
  };

 useEffect(() => {
    
  }, []);


 
const[capsuccess,setCapsuccess]=React.useState('false');

const onSuccess=(value)=>{
  console.log(value);
    setCapsuccess(true);
  
  
}

const styles={
     toggleButton: {
    position: 'absolute',
    right: '10px',
    top: '65%',
     background: 'none',
    border: 'none',
    cursor: 'pointer',
    fontSize: '0.85rem',
    color: '#007bff'
  },
  error: {
    color: 'red',
    fontSize: '0.875rem',
    marginBottom: '1rem'
  }
}

  return (
    <div className='App'>
    <SignUpContainer>
        <Card variant="outlined">
          <Typography
            component="h1"
            variant="h4"
            sx={{ width: '100%', fontSize: 'clamp(2rem, 10vw, 2.15rem)' }}
            color='Aqua'
          >
            Login
          </Typography>
          <Box
            component="form"
            sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}
          >
           
            <FormControl>
              <FormLabel htmlFor="email">Email</FormLabel>
              <TextField
                required
                fullWidth
                id="email"
                placeholder="your@email.com"
                name="email"
                autoComplete="email"
                variant="outlined"
                error={emailError}
                helperText={emailErrorMessage}
                color={passwordError ? 'error' : 'primary'}
                value={email}
                  onChange={(e) => setEmail(e.target.value)}
              />
            </FormControl>
            <FormControl>
              <FormLabel htmlFor="password">Password</FormLabel>
              <TextField
                required
                fullWidth
                name="password"
                placeholder="••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                id="password"
                autoComplete="new-password"
                variant="outlined"
                error={passwordError}
                helperText={passwordErrorMessage}
                color={passwordError ? 'error' : 'primary'}
                 type={spassword ? 'text' : 'password'}
              />
              
                <span>
                {error && <p style={styles.error}>{error}</p>}
                 </span>
              <button
                 type="button"
                
             style={styles.toggleButton}
             onClick={() => setSpassword(!spassword)}
          >
            {spassword ? 'Hide' : 'Show'}
          </button>
            </FormControl>
            <FormControlLabel
              control={<Checkbox value="allowExtraEmails" color="primary" />}
              label="I want to receive updates via email."
            />
            <div>
          
          <ReCAPTCHA sitekey='6LfggI0rAAAAAHuEtW7gB7M4dMFwDgkU_hvkqoov' onSuccess={onSuccess}/>
        
        </div>
            <Button
              type="submit"
              fullWidth
              variant="contained"
                  onClick={submit}
            >
              Sign up
            </Button>
          </Box>
          <Divider>
            <Typography sx={{ color: 'text.secondary' }}>or</Typography>
          </Divider>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            
            <Typography sx={{ textAlign: 'center' }}>
              Forot Password?{' '}
              <Link
                href="/material-ui/getting-started/templates/sign-in/"
                variant="body2"
                sx={{ alignSelf: 'center' }}
              >
                Sign in
              </Link>
            </Typography>
          </Box>
        </Card>
    </SignUpContainer>
    </div>
  );
}
