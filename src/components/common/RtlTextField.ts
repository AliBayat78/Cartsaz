import { TextField } from '@mui/material'
import { styled } from '@mui/system'

export const RTLTextField = styled(TextField)({
  '& label': {
    transformOrigin: 'right !important',
    right: '1.75rem !important',
    color: '#807D7B',
    fontWeight: 400,
    overflow: 'unset',
  },
  '& label.Mui-focused': {
    transformOrigin: 'right !important',
    textAlign: 'right',
    direction: 'rtl',
  },
  '& .MuiInput-underline:after': {
    transformOrigin: 'right !important',
    textAlign: 'right',
    direction: 'rtl',
  },
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      transformOrigin: 'right !important',
      textAlign: 'right',
      direction: 'rtl',
    },
    '&:hover fieldset': {
      transformOrigin: 'right !important',
      textAlign: 'right',
      direction: 'rtl',
    },
    '&.Mui-focused fieldset': {
      transformOrigin: 'right !important',
      textAlign: 'right',
      direction: 'rtl',
    },
  },
})
