import React from 'react'
import { Details } from '../components/Details'
import { Box, Divider, Typography } from '@mui/material'
import HelpIcon from '@mui/icons-material/Help';
import { Overview } from '../components/Overview';
import { DetailsForm } from '../components/DetailsForm';
import { Additional } from '../components/Additional';
import { Footer } from '../components/Footer';
import { Questions } from '../components/Questions';
import {   PromiseMain } from '../components/Promise';
import { Payment } from '../components/Payment';
import { Total } from '../components/Total';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

const paymentSchema = yup.object().shape({
  email: yup.string().email().required('Email is required'),
   full_name:yup.string().email().required('Name is required'),
   phone:yup.string().email().required('Phone is required'),
   gender:yup.string().email().required('Gender is required'),
   card_name:yup.string().email().required('Name on card is required'),
   card_number:yup.string().email().required('Card number is required'),
   expiry_date:yup.string().email().required('Expiry date is required'),
   cvv:yup.string().email().required('CVV is required'),
   gender:yup.string().email().required('gender is required'),
});
export const PaymentGateway = () => {
  const {register,handleSubmit,formState : {errors}} = useForm({ resolver: yupResolver(paymentSchema) });
  const formSubmit=()=>{

  }
  return (
    <>
      <Box className='max-w-[1400px] m-auto max-md:px-2  px-4'>
          <Box className='flex justify-between py-4'>
            <p className='!font-semibold !text-2xl'>tickete</p>
            <p  className='text-gray-800'> <HelpIcon  className='text-gray-800'/> <span> Help</span></p>
          </Box>
        <Box className='  max-md:flex-col-reverse flex justify-between'>
          <form onSubmit={handleSubmit(formSubmit,(e)=>{
            console.log(e)
          })}>
          <Box className='max-md:m-auto max-md:text-center max-md:justify-center'>
            <DetailsForm register={register} errors={errors}/>
            <Additional register={register}  errors={errors}/>
              <Payment register={register}  errors={errors}/>
              <Total />
          </Box>
          </form>
         
         
      
          <Box  className='max-md:m-auto border-gray-200 border-l-2 border-solid px-2'>
            
            <Details/>
            <Overview/>
          
          </Box>
        </Box>
        <Divider className='py-2'/>
        <Questions/>
       <Box className='py-4'>
       <PromiseMain/>
       </Box>
      </Box>
      
       <Footer/>
    </>
   

  )
}
