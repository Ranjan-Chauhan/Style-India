import { Grid } from '@mui/material'
import React from 'react'
import AdjustIcon from '@mui/icons-material/Adjust';
import { useNavigate } from 'react-router-dom';

function OrderCard() {
    const navigate = useNavigate();
  return (
    <div onClick={()=>navigate(`/account/order/${5}`)} className='m-5 p-2 shadow-lg hover:shadow-2xl border'>
        <Grid container spacing={2} sx={{justifyContent:"space-between"}}>
            <Grid item xs={6}>
                <div className='flex cursor-pointer'>
                    <img className='w-[7rem] h-[7rem] object-cover object-top rounded-md' src='https://cdn.shopify.com/s/files/1/0549/1104/1688/files/Untitled_design_6.jpg?v=1704555673' alt=''/>
                    
                    <div className='ml-5 space-y-2'>
                        <p>Ethnic Dress - Absolutely Desi</p>
                        <p className='opacity-60 font-semibold text-xs'>Size: L</p>
                        <p className='opacity-60 font-semibold text-xs'>Color:Yellow</p>
                    </div>
                </div>
            </Grid>
            
            <Grid item xs={2}>
                <p className=''>₹ 10999</p>
            </Grid>
            
            <Grid item xs={4}> 
                
                    {true && <div className=''>
                        <p>
                        <AdjustIcon sx={{width:"15px",height:"15px"}} className='text-green-600 mr-2 text-sm' />
                        <span>Delivered on May 20</span>
                        </p>
                        <p className='text-xs '>Your Item has been Delivered</p>
                    </div>}
                    {false && <p>
                        <span>Expected Delivery on May 20</span>
                    </p>}
                
            </Grid>

        </Grid>
    </div>
  )
}

export default OrderCard