import React from 'react'
import AdressCard from '../Adress/AdressCard'
import OrderTracker from './OrderTracker'
import { Box, Grid } from '@mui/material'
import { deepPurple } from '@mui/material/colors'
import StarBorderIcon from '@mui/icons-material/StarBorder';

function OrederDetails() {
  return (
    <div className='p-5 lg:px-20'>
       <div className="px-32">
            <h1 className='font-bold text-xl py-7 '>Delivery Adress</h1>
            <AdressCard/>
       </div>
       <div className='py-14 '>
            <OrderTracker activeStep={3} />
       </div>

       <Grid className='space-y-5 ' container>
       {[1,1,1,1,1].map((item,index) => <Grid item container className='shadow-xl rounded-md p-3 border' sx={{alignItems:"center", justifyContent:"space-between"}} key={index}>

<Grid item xs={6}>
    <div className='flex items-center space-x-5'>
        <img className='w-[7rem] h-[7rem] object-cover object-top rounded-md' src='https://media.licdn.com/dms/image/D5622AQG6oPGmNLwHSg/feedshare-shrink_800/0/1714367284368?e=2147483647&v=beta&t=rAVZeYVEn5yyzATyHLPv99QaW-KJ4u9Azk26ulzgy3E' alt=''/>

        <div className='space-y-2 '>
            <p className='font-semibold '>Juniper Fashion- An Ethnic Wear Brand</p>
            <p className='space-x-5 opacity-50 text-sm font-semibold '><span>Color: blue</span> <span>Size: L</span></p>
            <p>Seller: Juniper Fashion</p>
            <p>₹ 10550</p>
        </div>
    </div>
</Grid>

<Grid item>
    <Box sx={{color:deepPurple[500]}}>
        <StarBorderIcon sx={{fontSize:"2rem"}} className='px-2'/> 
        <span className='mr-10 font-semibold'>Rate and Review Product</span>
    </Box>
</Grid>
</Grid> )}
           
       </Grid>
    </div>
  )
}

export default OrederDetails