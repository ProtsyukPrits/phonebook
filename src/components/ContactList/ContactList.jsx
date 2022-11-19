import { PropTypes } from 'prop-types';
import ContactEl from 'components/ContactEl';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'redux/contacts/operations';
import { selectContacts, selectFilter } from 'redux/contacts/selectors';
import { Items } from './ContactList.styled';

const ContactList = () => {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);

  const dispatch = useDispatch();

  const filtringContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter)
  );

  return (
    <Items>
      {filtringContacts.map(contact => (
        <ContactEl
          contact={contact}
          key={contact.id}
          onDelete={() => dispatch(deleteContact(contact.id))}
        />
      ))}
    </Items>
  );
};

ContactList.propTypes = {
  filtringContacts: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)),
};

export default ContactList;
