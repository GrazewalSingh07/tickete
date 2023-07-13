import { Box, Divider, Grid } from '@mui/material'
import React from 'react'
import PaymentIcon from '@mui/icons-material/Payment';
import CustomTextField from './CustomtextField';
import {FaCcVisa} from 'react-icons/fa'
import { Card } from './Card';
export const Payment = ({register, errors}) => {
    const [selectedValue, setSelectedValue] = React.useState('a');

    const handleChange = (event) => {
      setSelectedValue(event.target.value);
    };
    const controlProps = (item) => ({
      checked: selectedValue === item,
      onChange: handleChange,
      value: item,
      name: 'color-radio-button-demo',
      inputProps: { 'aria-label': item },
    });
  return (
   <Box className='py-4 '>
       <Box className=' text-left'>
        <p className='font-semibold text-xl'>Select your mode of payment</p> 
        <p className='text-sm text-gray-500 py-2'>Payments with Tickete are secure and encrypted</p>
       </Box>
       <p className='py-2  text-left'>
            <PaymentIcon/>
            <span className='px-2'>Credit & debit card</span>
        </p>
       <Grid container spacing={2} >
       
        <Grid item lg={6} xs={12}>
            <CustomTextField
            {...register('name_card')}
                label="<Name on card>"
                type="text"
                error={Boolean(errors.card_name)}
                helperText={errors.card_name && errors.card_name.message}
                className="max-w-[400px]"
            />
        </Grid>
        <Grid lg={6} xs={12} item>
            <CustomTextField
            {...register('card_numer')}
                label="Card Number"
                type="text"
                error={Boolean(errors.card_number)}
                helperText={errors.card_number && errors.card_number.message}
                className="max-w-[400px]"
                endAdornment={<FaCcVisa/>}
            />
        </Grid>
        <Grid lg={6} xs={12} item>
            <CustomTextField
                label="<Expiry Date>"
                type="text"
                error={Boolean(errors.expiry_date)}
                helperText={errors.expiry_date && errors.expiry_date.message}
                {...register('expiry_date')}
                className="max-w-[400px]"
            />
        </Grid>
        <Grid lg={6} xs={12} item>
            <CustomTextField
                label="<CVV/CVC>"
                type="text"
                {...register('cvv')}
                error={Boolean(errors.cvv)}
                helperText={errors.cvv && errors.cvv.message}
                className="max-w-[400px]"
            />
        </Grid>
        
       </Grid>
       
       <Card controlProps={controlProps} name='Klarna'/>


   </Box>
  )
}
