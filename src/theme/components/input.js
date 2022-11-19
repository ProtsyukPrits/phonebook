const size = {
  sm: {
    height: 'auto',
    fontSize: 'sm',
    px: '4px',
    py: '2px',
  },
  md: {
    height: 'auto',
    fontSize: 'md',
    px: '8px',
    py: '4px',
  },
};

const baseStyle = {
  field: {
    fontWeight: 'regular',
    borderRadius: 'base',
  },
};

const sizes = {
  md: {
    field: size.md,
  },
  sm: {
    field: size.sm,
  },
};

const variantFlushed = function () {
  return {
    field: {
      borderRadius: '2px',
      bg: '#e8f0fe',
    },
  };
};

const variants = {
  flushed: variantFlushed,
};

const defaultProps = {
  size: 'sm',
  variant: 'flushed',
  focusBorderColor: 'gray.500',
};

export const inputStyles = {
  baseStyle,
  sizes,
  variants,
  defaultProps,
};

export default inputStyles;
// ddd