import { useDispatch, useSelector } from 'react-redux';
import { addContact, getContacts } from 'redux/contactsSlice';

import shortid from 'shortid';

export function useSubmit(e) {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);

  const onSubmit = e => {
    e.preventDefault();
    const name = e.target.name.value;
    const number = e.target.number.value;
    const isInclude = contacts.some(
      contact => contact.name.toLowerCase() === name.toLowerCase().trim()
    );
    if (isInclude) {
      alert(`${name} is already in contacts`);
      return;
    } else {
      const data = {
        id: shortid(),
        name: name,
        number: number,
      };
      dispatch(addContact(data));
    }

    e.target.reset();
  };

  return onSubmit;
}
