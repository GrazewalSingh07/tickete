import { Box, Divider } from '@mui/material'
import React from 'react'
import CopyrightIcon from '@mui/icons-material/Copyright';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';

export const Footer = () => {

  return (
   <Box className='py-2 px-4 bg-black min-w-[320px]'   >

        <p className=' p-4 !font-semibold text-white !text-2xl'>tickete</p>
    <Divider className='text-white'/>

    <p className='text-white'> 
        <span className='px-2 underline'>
            <CopyrightIcon fontSize='small' />
            Tickete Inc
        </span>
         <FiberManualRecordIcon className='!text-[10px]'/>
        <span className='px-2 underline'>
            Privacy
        </span>
        <FiberManualRecordIcon className='!text-[10px]'/>
        <span className='px-2 underline'>
           Terms
        </span>
        <FiberManualRecordIcon className='!text-[10px]'/>
        <span className='px-2 underline'>
           Cancellation policy
        </span>
    </p>
    <div className='flex w-full justify-end '>
        <InstagramIcon className='text-white text-right mx-2'/>
        <FacebookIcon  className='text-white mx-2'/>
        <TwitterIcon  className='text-white max-2'/>
    </div>
   </Box>
  )
}
