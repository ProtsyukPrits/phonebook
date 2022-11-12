import { FormList, Label, Input, Button} from './ContactForm.styled';
import { Formik, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';
import Notiflix from 'notiflix';
//
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/contacts/operations';
import { selectContacts } from 'redux/contacts/selectors';

const initialValues = {
  name: '',
  number: '',
};

const nameRegex = /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/;
const numberRegex =
  /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/;

const schema = yup.object().shape({
  name: yup
    .string()
    .matches(
      nameRegex,
      "Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
    )
    .required(),
  number: yup
    .string()
    .matches(
      numberRegex,
      'Phone number must be digits and can contain spaces, dashes, parentheses and can start with +'
    )
    .required(),
});

const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  const handleSubmit = (values, { resetForm }) => {
    const { name } = values;

    if (contacts.some(contact => contact.name === name)) {
      return Notiflix.Notify.info(`${name} is already in contacts!`);
    }

    resetForm();
    dispatch(addContact(values));
  };

  return (
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={schema}
      >
        <FormList autoComplete="off">
          <Label htmlFor="name">
            Name:
            <Field type="text" name="name" as={Input} />
            <ErrorMessage name="name" component="div" />
          </Label>

          <Label htmlFor="number">
            Number:
            <Field type="tel" name="number" as={Input} />
            <ErrorMessage name="number" component="div" />
          </Label>

          <Button type="submit">Add contacts</Button>
        </FormList>
      </Formik>
  );
};

export default ContactForm;
