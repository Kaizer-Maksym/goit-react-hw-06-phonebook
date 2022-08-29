import { useSubmit } from 'hooks/useSubmit';

import {
  FormBtn,
  FormText,
  FormStyle,
  InputContact,
} from './ContactForm.styled';

export const ContactsForm = () => {
  const onSubmit = useSubmit();

  return (
    <FormStyle autoCapitalize="off" onSubmit={onSubmit}>
      <FormText>Name</FormText>
      <label>
        <InputContact
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </label>

      <FormText>Number</FormText>
      <label>
        <InputContact
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </label>

      <FormBtn type="submit">Add contact</FormBtn>
    </FormStyle>
  );
};
