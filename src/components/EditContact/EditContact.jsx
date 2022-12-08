import { Overlay, Backdrop, Form } from './EditContact.styled';
import { useEffect } from 'react';
import { Input, Button } from '@chakra-ui/react';
import { useDispatch } from 'react-redux';
import { addContact } from 'redux/contacts/operations';

const EditContact = ({ onClick, contact }) => {
  // const [name, setName] = useState('');
  // const [number, setNumber] = useState('');

  useEffect(() => {
    const handleKeyDown = e => {
      if (e.code === 'Escape') {
        onClick();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClick]);

  const handleBackdrop = e => {
    e.preventDefault();

    if (e.target === 'modal') {
      onClick();
    }
  };
  // console.log('name', name);
  // console.log('number', number);
  

  const dispatch = useDispatch();
  
  const handleSubmit = e => {

    e.preventDefault();
    dispatch(addContact({
      name: e.currentTarget.elements.name.value,
      number: e.currentTarget.elements.number.value
    }))
  }

  return (
    <>
      <Overlay>
        <Backdrop>
          <Form onClick={() => handleBackdrop} onSubmit={handleSubmit}>
            <Input
              type="text"
              name="name"
              defaultValue={contact.name}
              // onChange={e => setName(e.target.value)}
            />
            <Input
              type="tel"
              name="number"
              defaultValue={contact.number}
              // onChange={e => setNumber(e.target.value)}
            />
            <Button type="submit">Submit</Button>
            <Button id="modal" type="submit">
              Close
            </Button>
          </Form>
        </Backdrop>
      </Overlay>
    </>
  );
};

export default EditContact;
