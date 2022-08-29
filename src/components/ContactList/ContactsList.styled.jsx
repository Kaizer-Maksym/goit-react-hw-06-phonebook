import styled from '@emotion/styled';

export const ListOfContacts = styled.ul`
  position: relative;
  padding: 0;
  margin: 0;
  width: 100%;
`;

export const ContactItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;

  display: flex;
  align-items: center;

  font-size: 16px;
  font-weight: 600;

  text-transform: uppercase;

  :not(:last-child) {
    margin-bottom: 10px;
  }
`;

export const BtnOnDelet = styled.button`
  display: block;
  width: 100px;
  height: 30px;

  border-radius: 5px;
  border: none;
  outline: none;
  box-shadow: 3px 3px 2px rgba(34, 35, 35, 0.662);
  background-color: rgba(13, 92, 92, 0.662);

  font-size: 16px;
  font-weight: 500;

  color: #fdfcfc;
`;

export const ContactInfo = styled.p`
  display: flex;
  align-items: center;
  justify-content: center;
  column-gap: 20px;

  font-size: 15px;
  font-weight: 700;

  text-transform: uppercase;
  text-align: right;

  color: rgba(10, 10, 10, 0.689);
`;
