import { ContactsList } from '../ContactList/ContactList';
import { ContactFilter } from '../ContactFilter/ContactFilter';
import { ContactsForm } from '../ContactForm/ContactForm';

import { AppContainer, ToAddContact, List, Heading } from './App.stayled';

export const App = () => {
  return (
    <AppContainer>
      <ToAddContact>
        <Heading>Phonebook</Heading>
        <ContactsForm />
      </ToAddContact>

      <List>
        <Heading>Contacts</Heading>
        <ContactFilter />
        <ContactsList />
      </List>
    </AppContainer>
  );
};
