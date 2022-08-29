import React from 'react';
import { useDispatch } from 'react-redux';
import { removeContact } from 'redux/contactsSlice';
import { useFilter } from 'hooks/useFilter';

import {
  ContactItem,
  BtnOnDelet,
  ContactInfo,
  ListOfContacts,
} from './ContactsList.styled';

import { BsTelephoneFill } from 'react-icons/bs';

export const ContactsList = () => {
  const dispatch = useDispatch();
  const visibleContacts = useFilter();

  return (
    <ListOfContacts>
      {visibleContacts.map(({ name, number, id }) => (
        <ContactItem key={id}>
          <ContactInfo>
            <BsTelephoneFill size="15px" color="#00000091" />
            <span>{name} :</span>
            <span>{number}</span>
          </ContactInfo>
          <BtnOnDelet onClick={() => dispatch(removeContact(id))}>
            Delete
          </BtnOnDelet>
        </ContactItem>
      ))}
    </ListOfContacts>
  );
};
