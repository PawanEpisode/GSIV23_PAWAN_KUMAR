import React from 'react';
import { Stack, Typography} from '@mui/material';
import ReactLogo from '../../assets/movie.png';

import './Footer.css';

const Footer = () => {
  return (
    <div className='movie-footer'>
    <Stack className='footer-container'>
      <img src={ReactLogo} alt='exercise-logo' />
      <Typography className='footer-text' variant='h5'>
        Made With ❤️ By <span>Pawan Kumar</span>
      </Typography>
    </Stack>
    </div>
  )
}

export default Footer;