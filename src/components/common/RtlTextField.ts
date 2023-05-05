import { TextField } from '@mui/material'
import { styled } from '@mui/system'

export const RTLTextField = styled(TextField)({
  '& .MuiFormHelperText-root': {
    transformOrigin: 'right',
    textAlign: 'right',
    direction: 'rtl',
  },
  '& label': {
    transformOrigin: 'right',
    right: '1.75rem',
    color: '#807D7B',
    fontWeight: 400,
    overflow: 'unset',
  },
  '& label.Mui-focused': {
    transformOrigin: 'right',
    textAlign: 'right',
    direction: 'rtl',
  },
  '& .MuiInput-underline:after': {
    transformOrigin: 'right',
    textAlign: 'right',
    direction: 'rtl',
  },
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      transformOrigin: 'right',
      textAlign: 'right',
      direction: 'rtl',
    },
    '&:hover fieldset': {
      transformOrigin: 'right',
      textAlign: 'right',
      direction: 'rtl',
    },
    '&.Mui-focused fieldset': {
      transformOrigin: 'right',
      textAlign: 'right',
      direction: 'rtl',
    },
  },
})
