import ContactList from "components/ContactList"
import Filter from "components/Filter"
import { Container, Counter, ContactNumber } from './Contacts.styled';
import { selectContacts, selectError, selectIsLoading } from "redux/contacts/selectors"
import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"
import { fetchContacts } from "redux/contacts/operations"

const Contacts = () => {
  const dispatch = useDispatch()

  const contacts = useSelector(selectContacts);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts())
  }, [dispatch])


  return (
    <Container>
      <div>
        <Counter>
          You have <ContactNumber>{contacts.length}</ContactNumber> contacts
        </Counter>
        <Filter />
      </div>
      {isLoading && !error && <b>Request in progress...</b>}
      {contacts.length > 0 && <ContactList />}
    </Container>
  );
}


export default Contacts