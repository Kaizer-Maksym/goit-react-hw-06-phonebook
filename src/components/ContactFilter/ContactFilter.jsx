import { useDispatch } from 'react-redux';
import {
  FilterText,
  FilterInput,
  FilterContainer,
} from './ContactFilter.styled';
import { filterOut } from 'redux/contactsSlice';

export const ContactFilter = () => {
  const dispatch = useDispatch();

  return (
    <FilterContainer>
      <FilterText htmlFor="filter"></FilterText>
      <FilterInput
        placeholder="  Find contacts by name"
        id="filter"
        type="text"
        onChange={e => dispatch(filterOut(e.target.value))}
      />
    </FilterContainer>
  );
};
