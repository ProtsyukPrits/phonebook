import { defineStyleConfig } from '@chakra-ui/react';

const Button = defineStyleConfig({
  baseStyle: {
    fontWeight: 'regular',
    textTransform: 'uppercase',
    borderRadius: 'base',
  },
  sizes: {
    sm: {
      width: 'fit-content',
      height: 'auto',
      textTransform: 'lowercase',
      fontSize: 'sm',
      px: '4px', 
      py: '2px', 
    },
    md: {
      width: 'fit-content',
      height: 'auto',
      fontSize: 'md',
      px: '8px', 
      py: '4px',
    },
  },

  variants: {
    outline: {
      border: '2px solid',
      borderColor: 'gray.500',
      color: 'gray.500',
    },
    solid: {
      bg: 'gray.500',
      color: 'white',
    },
  },
  defaultProps: {
    size: 'md',
    variant: 'outline',
  },
});



export default Button