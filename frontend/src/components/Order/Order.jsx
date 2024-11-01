import { Grid } from '@mui/material'
import React from 'react'
import OrderCard from './OrderCard'


const orderStatus = [
    {lable:"On The Way", value:"on_the_way"},
    {lable:"Delivered", value:"delivered"},
    {lable:"Cancelled", value:"cancelled"},
    {lable:"Returned", value:"returned"},
]

function Order() {
  return (
    <div className='px-5 lg:px-10'>
        <Grid container sx={{justifyContent:"space-between"}}>
            <Grid item xs={2.5}>
                <div className='h-auto shadow-lg  p-5 sticky top-5 m-5 border'>
                    <h1 className='font-bold text-lg ml-5'>Filter</h1>
                    <div className='space-y-4 m-5'>
                    <h1 className='font-semibold '>ORDER STATUS</h1>
                   {orderStatus.map((option,index) =>  <div className='flex items-center ' key={index}>
                    <input defaultValue={option.value} type='checkbox' className='h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500' />
                    <lable className="ml-3 text-sm text-gray-600" htmlFor={option.value}>{option.lable}</lable>

                    </div>)}

                    </div>
                </div>
            </Grid>
            <Grid item xs={9.5}>
               {[1,1,1,1,1].map((item, index) =>  <OrderCard key={index} />)}
            </Grid>
        </Grid>
    </div>
  )
}

export default Order