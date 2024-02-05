import { useDispatch } from "react-redux";
import styled from "styled-components";
import { setSearchField, setSearchString } from "../../slicers/searchSlice";

export const Searchbar = () => {
  const dispatch = useDispatch();
  const handleChange = (ev) => {
    dispatch(setSearchString(ev.target.value));
  };
  const handelSelect = (ev) => {
    dispatch(setSearchField(ev.target.value));
  };
  return (
    <SearchbarWraper>
      <Input
        id="search"
        type="text"
        defaultValue=""
        placeholder="Search"
        onChange={handleChange}
      ></Input>
      <SelectWraper>
        <Lable htmlFor="searchoption">Chose search option</Lable>
        <Select id="searchoption" onChange={handelSelect}>
          <option value="firstname">Fristname</option>
          <option value="lastname">lastname</option>
          <option value="age">Age</option>
          <option value="phonenumber">Phonenumber</option>
        </Select>
      </SelectWraper>
    </SearchbarWraper>
  );
};

const Input = styled.input`
  width: 400px;
  padding: 10px;
  border: 1px solid rgb(0 0 0 / 52%);
  border-radius: 15px;
  margin: auto;
  font-family: "Poppins";
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
`;

const Lable = styled.label`
  color: rgb(247 247 247);
  font-family: "Poppins";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
`;

const Select = styled.select`
  height: 30px;
  font-family: "Poppins";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  border: 1px solid rgb(0 0 0 / 52%);
  border-radius: 15px;
  text-align: center;
`;

const SelectWraper = styled.div`
  display: flex;
  flex-direction: column;
  height: 50px;
  margin-left: 15px;
`;

const SearchbarWraper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;
