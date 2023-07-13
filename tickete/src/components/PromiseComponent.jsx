import { Box } from '@mui/material'
import React from 'react'

export const PromiseComponent = ({title,detail,icon}) => {
  return (
   <Box className='border-gray-100 border-solid border-2 p-4 max-w-[200px] h-[200px] rounded-lg'   >
       <p className='py-4'> {icon}</p>
        <p>{title}</p>
        <p>{detail}</p>
   </Box>
  )
}
