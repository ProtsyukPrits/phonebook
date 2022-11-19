import { extendTheme } from '@chakra-ui/react'

// Global
import  styles  from './styles'
// Foundational style overrides

// Component style overrides
import Button from './components/button'
import Input from './components/input';

const overrides = {
  styles,

  components: {
    Button,
    Input,
  }
}

export default extendTheme(overrides);