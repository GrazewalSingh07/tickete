import { Box, Button } from '@mui/material'
import React from 'react'
import {BsRecordCircleFill} from 'react-icons/bs'
import {MdOutlineSecurity} from 'react-icons/md'
export const Total = () => {
  return (
    <Box  className=''>
        <Box className='py-4  text-left'>
        <p className='font-semibold text-xl '>{`Total:<price>`}</p>
        <p className='text-xs underline'>{'You will pay in INR'} </p>
        </Box>
        <Box className='bg-gray-100 max-w-[920px] p-2 rounded-md'>
            <p className='flex'><span><BsRecordCircleFill/></span> <span className='px-2 text-gray-800'>{'Receive travel tips, suggestions and offers in <city> by email'}</span></p>

        </Box>
        <p className='text-xs text-gray-800 py-2'>With payment, you agree to the general <span className='text-blue-500'>terms and conditions of Tickete</span> & the <span className='text-blue-500'>activity provider</span></p>
        <Box className='py-2'>
        <Button type='submit' variant='contained' sx={{background:'black'}} endIcon={<MdOutlineSecurity/>}>Confirm and pay </Button>
        </Box>
    </Box>
  )
}
