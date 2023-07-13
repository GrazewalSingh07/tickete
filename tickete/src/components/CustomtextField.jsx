import { Visibility, VisibilityOff } from '@mui/icons-material';

import {
  IconButton,
  InputAdornment,
  InputLabel,
  TextField,
} from '@mui/material';
import { styled } from '@mui/material/styles';

import React, { forwardRef, useState } from 'react';
const StyledTextField = styled(TextField)({
  input: {
    height: '1.0375em',
    padding: '14.5px 14px',
    '&:-webkit-autofill  ': {
      WebkitBoxShadow: '0 0 0 0 100px ' + '0' + ' inset',
      backgroundColor: '#FFF !important;',
      backgroundClip: 'content-box !important',
    },
  },
  '& .MuiInputBase-root': {
    backgroundColor: '#fff !important',
    borderRadius: '8px',
  },
  '& label.Mui-focused': {
    // color: 'green',
  },
  '& .MuiInput-underline:after': {
    // borderBottomColor: 'green',
  },
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderRadius: '8px',
      // backgroundColor: '#FFF !important;',
    },
    '&:hover fieldset': {
      // borderColor: 'yellow',
    },
    '&.Mui-focused fieldset': {
      // borderColor: 'green',
    },
  },
  '& .MuiFormLabel-root': {
    top: '-4px',
  },
});

const CustomTextField = forwardRef((props, ref) => {
  const {
    maxLength,
    label,
    required,
    error,
    helperText,
    variant,
    placeholder,
    disabled,
    fullWidth,
    type,
    startAdornment,
    labelOverFlow,
    endAdornment,
    ...rest
  } = props;

  //  states
  const [showPassword, setShowPassword] = useState(false);
  // Handlers
  const handleToggleShowPassword = () => {
    setShowPassword((prevState) => !prevState);
  };
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <div>
      
      <StyledTextField
        label={label}
        placeholder={placeholder}
        error={error}
        helperText={helperText || null}
        inputRef={ref}
        variant={variant}
        disabled={disabled}
        fullWidth={fullWidth}
        autoComplete={''}
        size="medium"
        className='p-0'
        maxLength={maxLength}
        /* eslint-disable no-nested-ternary */
        type={type === 'password' ? (showPassword ? 'text' : 'password') : type}
        
        InputProps={{
          startAdornment: startAdornment || null,
          endAdornment: (
            <>
              {type === 'password' ? (
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleToggleShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    size="large"
                  >
                    {showPassword ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
                </InputAdornment>
              ) : (
                endAdornment || null
              )}
            </>
          ),
        }}
        {...rest}
      />
    </div>
  );
});

CustomTextField.displayName = 'CustomTextField';

CustomTextField.defaultProps = {
  label: '',
  required: false,
  error: false,
  helperText: '',
  variant: 'outlined',
  disabled: false,
  fullWidth: true,

  type: 'text',
};

export default CustomTextField;
