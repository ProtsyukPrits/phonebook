import { LabelFilter, InputFilter } from "./Filter.styled";
// 
import { useDispatch } from 'react-redux';
import { filtringContactsUser } from 'redux/contacts/filterSlice';

const Filter = () => {

  const dispatch = useDispatch();
  
  const handleFilter = e => {
    dispatch(filtringContactsUser(e.target.value.toLowerCase().trim()));
  }
  return (
    <LabelFilter>
       Find contacts by name
      <InputFilter type="text" name="name" onChange={handleFilter}/>
    </LabelFilter>
  );
};

export default Filter;