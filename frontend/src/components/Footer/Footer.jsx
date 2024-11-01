import { Grid, Typography,Button} from '@mui/material'
import React from 'react';
// import Button from '@mui/material';
// import { Typography } from '@mui/material/styles/createTypography';
// import Typography from '@mui/material';
const Footer = () => {
  return <>
  <div>
    <Grid className='bg-slate-900 text-white text-center mt-10 py-3' container>
      <Grid item xs={12} sm={6} md={3} >
        <Typography className='pb-5 text-gray-400' variant='h5'>Company</Typography>
        <div>
        <Button variant='h6' gutterButton>About</Button>
        </div>
        <div>
        <Button variant='h6' gutterButton>Blog</Button>
        </div>
        <div>
        <Button variant='h6' gutterButton>Press</Button>
        </div>
        <div>
        <Button variant='h6' gutterButton>Job</Button>
        </div>
        <div>
        <Button variant='h6' gutterButton>Partners</Button>
        </div>
      </Grid> 
       <Grid item xs={12} sm={6} md={3}>
        <Typography className='pb-5 text-gray-400' variant='h5'>Solution</Typography>
        <div>
        <Button variant='h6' gutterButton>Marketing</Button>
        </div>
        <div>
        <Button variant='h6' gutterButton>Analatics</Button>
        </div>
        <div>
        <Button variant='h6' gutterButton>Commerce</Button>
        </div>
        <div>
        <Button variant='h6' gutterButton>Insights</Button>
        </div>
        <div>
        <Button variant='h6' gutterButton>Support</Button>
        </div>
      </Grid> 
      <Grid item xs={12} sm={6} md={3}>
        <Typography className='pb-5 text-gray-400' variant='h5'>Documentation</Typography>
        <div>
        <Button variant='h6' gutterButton>Guide</Button>
        </div>
        <div>
        <Button variant='h6' gutterButton>Api Status</Button>
        </div>
      </Grid> 
      <Grid item xs={12} sm={6} md={3}>
        <Typography className='pb-5 text-gray-400' variant='h5'>Legal</Typography>
        <div>
        <Button variant='h6' gutterButton>Claim</Button>
        </div>
        <div>
        <Button variant='h6' gutterButton>Privacy</Button>
        </div>
        <div>
        <Button variant='h6' gutterButton>Terms</Button>
        </div>
      </Grid> 
      <Grid  item xs={12}>
        <Typography className='py-4'>&copy; 2023 My Company. All rights reserved. </Typography>
      </Grid>
    </Grid>
    </div>
  </>
}

export default Footer