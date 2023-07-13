import React from 'react'
import { PromiseComponent } from './PromiseComponent'
import { Box, Grid } from '@mui/material'
import VerifiedIcon from '@mui/icons-material/Verified';
import QuestionAnswerIcon from '@mui/icons-material/QuestionAnswer';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import ShieldIcon from '@mui/icons-material/Shield';
import {MdOutlineSecurity} from 'react-icons/md'
export const PromiseMain = () => {
    const data=[
        {title:'Official tickets',detail:'Authorised resellar to top attraction',icon:<VerifiedIcon size={'large'} className='text-green-700 !text-[32px]'/>},
        {title:'24/7 dedicated support ',detail:`We're here to Help, talk to an expert`, icon:<QuestionAnswerIcon className='text-orange-800 !text-[32px]'/>},
        {title:'Flexible',detail:'Book stress-free with easy cancellation', icon:<CalendarTodayIcon className='text-gray-500 !text-[32px]'/>},
        {title:'100% secure payments',detail:'Internationally recognized encrypted payment process', icon:<MdOutlineSecurity className='text-blue-800 !text-[32px]'/>}


    ]
  return (
     <Box className='px-2 max-md:m-auto'>
     <p className='py-4 font-semibold text-xl  '>The Tickete promise</p>
     <Grid  container spacing={4}>
         {data.map((el,index)=>{
            return <Grid item >
                <PromiseComponent key={index} title={el.title} detail={el.detail} icon={el.icon}/>
            </Grid>

         })}
     </Grid>
     </Box>
  )
}
