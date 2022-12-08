import { Button } from '@chakra-ui/react';
import Avatars from 'components/Avatars';
import EditContact from 'components/EditContact';
import { PropTypes } from 'prop-types';
import { useState } from 'react';
import { ListEl, UserInfo, UserName } from './ContactEl.styled';

const ContactEl = ({ contact, onDelete }) => {
  const [ isOpenModal, setIsOpenModal ] = useState(false);

  const handleEditContact = e => {
   setIsOpenModal(true) 
  };

   const handleEditContactClose = e => {
     setIsOpenModal(false);
   };

  return (
    <ListEl onClick={handleEditContact}>
      <UserInfo>
        <Avatars />
        <UserName>
          {contact.name} : {contact.number}
        </UserName>
      </UserInfo>
      <Button
        size="sm"
        border="1px solid"
        borderRadius="100%"
        type="button"
        onClick={() => {
          onDelete(contact.id);
        }}
      >
        Delete
      </Button>
      {isOpenModal && (
        <EditContact onClick={handleEditContactClose} contact={contact} />
      )}
    </ListEl>
  );
};

ContactEl.propTypes = {
  contact: PropTypes.objectOf(PropTypes.string).isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default ContactEl;
