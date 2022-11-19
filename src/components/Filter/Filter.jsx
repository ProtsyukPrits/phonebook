import { LabelFilter} from "./Filter.styled";
// 
import { useDispatch } from 'react-redux';
import { filtringContactsUser } from 'redux/contacts/filterSlice';
import { Input } from "@chakra-ui/react";

const Filter = () => {

  const dispatch = useDispatch();
  
  const handleFilter = e => {
    dispatch(filtringContactsUser(e.target.value.toLowerCase().trim()));
  }
  return (
    <LabelFilter>
       Find contacts by name
      <Input type="text" name="name" onChange={handleFilter}/>
    </LabelFilter>
  );
};

export default Filter;