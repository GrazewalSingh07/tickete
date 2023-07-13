import { Box, Button } from '@mui/material'
import React from 'react'
import QuestionAnswerIcon from '@mui/icons-material/QuestionAnswer';
export const Needhelp = () => {
  return (
    <Box className='bg-orange-100 p-4 max-w-[360px] h-[160px] rounded-md '>
       <Box className='flex justify-around'>
            <Box>
                <p className='text-red-950 font-semibold'>Need help?</p>  
                <p className='text-red-950'>We're here to help, 24*7</p>
                
            </Box>
             <QuestionAnswerIcon className='text-red-950'/>
       </Box>
      <Box className='p-4'>
      <Button className='!text-red-950 !font-bold !border-red-950'  variant='outlined'>Chat with us</Button>
      </Box>
    </Box>
  )
}
