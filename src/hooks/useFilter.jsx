import { useSelector } from 'react-redux';
import { getContacts, getFiltr } from 'redux/contactsSlice';

export function useFilter() {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFiltr);

  const getVisibleContact = () => {
    const normalize = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalize)
    );
  };

  const visibleContacts = getVisibleContact();

  return visibleContacts;
}
