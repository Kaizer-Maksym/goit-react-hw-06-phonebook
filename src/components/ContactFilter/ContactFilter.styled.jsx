import styled from '@emotion/styled';

export const FilterText = styled.label`
  position: absolute;

  line-height: 40px;
  transition: 0.5s;
  left: 10px;
  font-size: 16px;
  font-weight: 600;
  color: #535050f5;
`;

export const FilterInput = styled.input`
  width: 430px;
  height: 30px;
  padding: 5px 10px;

  border: none;
  outline: none;
  border-radius: 5px;
  margin-bottom: 50px;

  box-shadow: 3px 3px 2px rgba(118, 121, 121, 0.662);

  font-size: 16px;
  font-weight: 600;
  color: #7d7979f5;
`;

export const FilterContainer = styled.div`
  position: relative;
`;
