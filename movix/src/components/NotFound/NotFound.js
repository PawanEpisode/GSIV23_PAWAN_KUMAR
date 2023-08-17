import { Stack, Typography } from '@mui/material'
import React from 'react';
import notfound from '../../assets/notfound.jpg';

import './NotFound.css';

const NotFound = () => {
  return (
    <Stack className='notfound'>
        <Stack className='notfound-left'>
            <Typography variant='h3'>Movies Not Found</Typography>
            <Typography variant='h5'>
                You can either change the searched movies or go to Home Page. 
            </Typography>
        </Stack>
        <Stack className='notfound-right'>
            <img  src={notfound} alt='notfound'/>
        </Stack>
    </Stack>
  )
}

export default NotFound