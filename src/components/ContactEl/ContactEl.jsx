import { Button } from '@chakra-ui/react';
import Avatars from 'components/Avatars';
import { PropTypes } from 'prop-types';
import { ListEl, UserInfo,UserName } from './ContactEl.styled';

const ContactEl = ({ contact, onDelete }) => {
  return (
    <ListEl>
      <UserInfo>
        <Avatars />
        <UserName>
          {contact.name} : {contact.number}
        </UserName>
      </UserInfo>
      <Button
        size="sm"
        border="1px solid"
        borderRadius='100%'
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
