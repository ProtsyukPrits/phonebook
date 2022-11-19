import image from '..//images/phonebook.png'

const styles = {
  global: {
    body: {
      m: 0,
      fontFamily: 'Kalam',
      bgImage: `linear-gradient(
      to bottom,
      rgba(133, 133, 123, 0.704),
      rgba(105, 111, 113, 0.5)
    ),url(${image})`,
      bgSize: '150px',
      bgColor: 'bisque',
    },

    h1: {
      m: 0,
      fontWeight: 'bold',
      textAlign: 'center',
    },

    h2: {
      mb: '10px',
      fontWeight: 'bold',
    },

    p: {
      m: 0,
    },

    img: {
      display: 'block',
      height: 'auto',
    },

    ul: {
      padding: 0,
      listStyle: 'none',
      m: 0,
    },
  },
};

export default styles;

