import { Autocomplete, Box, Grid, TextField } from "@mui/material";
import React from "react";
import CustomTextField from "./CustomtextField";

export const Additional = ({register, errors}) => {
  return (
    <Box>
     <Box className='py-4  text-left'>
     <p className="font-semibold text-gray-700 text-xl">Additional information</p>
      <p>
       We need a few more details to complete your reservation
      </p>
     </Box>
      <Grid spacing={4} container >
        <Grid lg={6} xs={12} item>
          <CustomTextField
          {...register('full_name')} 
          error={Boolean(errors.full_name)}
          helperText={errors.full_name && errors.full_name.message}
            label="<Full Name>"
            type="text"
            placeholder="Full name"
            className="max-w-[400px]"
          />
        </Grid>
        <Grid lg={6} xs={12} item>
            <Autocomplete
                disablePortal
                options={dropdown}
               
                renderInput={(params) => <CustomTextField  error={Boolean(errors.gender)}
                helperText={errors.gender && errors.gender.message}   {...register('gender')}  sx={{ maxWidth: 410, minWidth:260 }} {...params} label="<Gender>" />}
             />
        </Grid>
         
      </Grid>
    </Box>
  );
};

const dropdown = [
    { label: 'Male', value: 'male' },
    { label: 'Female', value: 'female'},
    { label: 'Others', value: 'others' } 
  ];
