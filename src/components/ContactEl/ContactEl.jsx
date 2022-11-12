import { PropTypes} from 'prop-types'
import { Button, ListEl } from './ContactEl.styled';

const ContactEl = ({ contact, onDelete }) => {
  return (
    <ListEl>
      {contact.name} : {contact.number}
      <Button
        type="button"
        onClick={() => {
          onDelete(contact.id);
        }}
      >
        Delete
      </Button>
    </ListEl>
  );
};


ContactEl.propTypes = {
  contact: PropTypes.objectOf(PropTypes.string).isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default ContactEl;