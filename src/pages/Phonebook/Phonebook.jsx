import ContactForm from "components/ContactForm";
import { PhoneContainer } from "./Phonebook.styled";


const Phonebook = () => {
  return (
    <PhoneContainer>
      <ContactForm />
    </PhoneContainer>
  );
}


export default Phonebook;