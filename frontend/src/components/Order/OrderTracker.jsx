import { Step, StepLabel, Stepper } from '@mui/material'
import React from 'react'


const steps = [
    "Placed",
    "Order Confirmed",
    "Order Shipped",
    "Out For Delivery",
    "Delivered"
]

function OrderTracker({activeStep}) {
  return (
    <div className='w-full'>
        <Stepper activeStep={activeStep} alternativeLabel>
            {steps.map((label, index) => <Step key={index}>
                <StepLabel sx={{color:"#9155FD",fontSize:"44px"}}>{label}</StepLabel>
            </Step>)}
        </Stepper>
    </div>
  )
}

export default OrderTracker