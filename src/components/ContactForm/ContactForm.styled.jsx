import styled from '@emotion/styled';

export const FormStyle = styled.form`
  display: flex;
  flex-direction: column;

  padding: 20px;
`;

export const FormBtn = styled.button`
  display: block;
  width: 200px;
  height: 40px;

  border-radius: 5px;
  border: none;
  outline: none;
  box-shadow: 3px 2px 1px rgba(117, 118, 118, 0.662);
  background-color: #559adadd;

  font-size: 16px;
  font-weight: 500;

  color: #fdfcfc;
`;

export const InputContact = styled.input`
  margin-bottom: 25px;
  padding: 5px 10px;
  width: 250px;
  height: 25px;
  outline: none;
  border: none;
  border-radius: 5px;
  box-shadow: 2px 3px 1px rgba(0, 0, 0, 0.1), 2px 3px 2px rgba(0, 0, 0, 0.1),
    2px 3px 2px rgba(0, 0, 0, 0.1);
`;

export const FormText = styled.p`
  margin-bottom: 10px;
  font-size: 16px;
  font-weight: 600;

  text-transform: uppercase;
`;
