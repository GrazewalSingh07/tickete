import { Box, Grid } from "@mui/material";
import React from "react";
import CustomTextField from "./CustomtextField";

export const DetailsForm = ({register, errors}) => {
  return (
    <Box>
      <Box className='py-4  text-left'>
      <p className="font-semibold text-gray-700 text-xl">Enter your details</p>
      <p>
        We'll be sending your tickets to the details below. Booking for a
        friend? Add their details
      </p>
      </Box>
      <Grid spacing={4} container >
        <Grid lg={6} xs={12} item>
          <CustomTextField
          {...register('full_name')}
            label="<Full Name>"
            type="text"
            placeholder="Full name"
            className="max-w-[400px]"
            error={Boolean(errors.full_name)}
            helperText={errors.full_name && errors.full_name.message}
          />
        </Grid>
        <Grid lg={6} xs={12} item>
          <CustomTextField
          {...register('phone')}
            label="<Phone number>"
            type="text"
            placeholder="<Phone number>"
            className="max-w-[400px]"
            error={Boolean(errors.phone)}
            helperText={errors.phone && errors.phone.message}
          />
        </Grid>
        <Grid lg={6} xs={12} item>
          <CustomTextField
          {...register('email')}
            label="<Email>"
            type="text"
            placeholder="Email"
            className="max-w-[400px]"
            error={Boolean(errors.email)}
            helperText={errors.email && errors.email.message}
          />
        </Grid>
        <Grid lg={6} xs={12} item>
          <CustomTextField
           {...register('full_name')}
            label="<Full Name>"
            type="text"
            placeholder="Full name"
            className="max-w-[400px]"
            error={Boolean(errors.full_name)}
            helperText={errors.full_name && errors.full_name.message}
          />
        </Grid>
      </Grid>
    </Box>
  );
};
