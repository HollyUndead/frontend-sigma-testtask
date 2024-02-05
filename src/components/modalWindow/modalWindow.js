import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { switchModalState } from "../../slicers/modalwindowSlice";
import { changeValueFromField, reset } from "../../slicers/userSlice";
import { useEffect, useState } from "react";
import { createUser, updateUser } from "../../redux/thunk";

export const ModalWindow = () => {
  const { isModalOpen, creatModal } = useSelector((state) => state.modalstate);
  const user = useSelector((state) => state.user);
  const { firstname, lastname, age, phonenumber } = user;
  const dispatch = useDispatch();
  const [validationError, setValidationError] = useState({
    firstname: null,
    lastname: null,
    age: null,
    phonenumber: null,
  });

  useEffect(() => {
    document.getElementById("backdrop").addEventListener("mousedown", (ev) => {
      if (ev.target.id === "backdrop") {
        dispatch(switchModalState());
        dispatch(reset());
      }
    });
  }, [dispatch]);

  const ValidateField = (field, fieldName) => {
    var result = null;
    switch (fieldName) {
      case "firstname":
        if (field.length < 3) {
          result = "Firstname must be longer 3 symbols";
        }
        break;
      case "lastname":
        if (field.length < 3) {
          result = "lastname must be longer 3 symbols";
        }
        break;
      case "age":
        const age = parseInt(field);
        if (16 > age) {
          result = "Age must be higher 16";
        }
        break;
      case "phonenumber":
        if (field.length !== 10) {
          result = "Phonenumber must be 10 symbols";
        }
        break;
      default:
        result = null;
    }
    setValidationError((state) => {
      state[fieldName] = result;
      return { ...state };
    });
  };

  const onChangeField = (ev) => {
    dispatch(
      changeValueFromField({ field: ev.target.value, fieldname: ev.target.id })
    );
    ValidateField(ev.target.value, ev.target.id);
  };

  const handleSubmit = (ev) => {
    ev.preventDefault();
    const val = Object.keys(validationError);
    for (let i = 0; i < val.length; i++) {
      if (validationError[val[i]] !== null) {
        return;
      }
    }
    if (creatModal === false) {
      dispatch(updateUser(user));
      dispatch(reset());
    } else {
      dispatch(createUser(user));
      dispatch(reset());
    }
    dispatch(switchModalState());
    dispatch(reset());
  };

  return (
    <Backdrop id="backdrop" $ismodalopen={"" + isModalOpen}>
      <ModalContainer $ismodalopen={"" + isModalOpen}>
        <Form $ismodalopen={"" + isModalOpen}>
          <Lable htmlFor="firstname">First name</Lable>
          <Input
            id="firstname"
            type="text"
            autoComplete="off"
            value={creatModal !== true ? firstname : undefined}
            onChange={onChangeField}
          />
          {validationError.firstname !== null ? (
            <ValidationErrors>{validationError.firstname}</ValidationErrors>
          ) : null}
          <Lable htmlFor="lastname">Lastname</Lable>
          <Input
            id="lastname"
            type="text"
            autoComplete="off"
            value={creatModal !== true ? lastname : undefined}
            onChange={onChangeField}
          />
          {validationError.lastname !== null ? (
            <ValidationErrors>{validationError.lastname}</ValidationErrors>
          ) : null}
          <Lable htmlFor="age">Age</Lable>
          <Input
            id="age"
            type="number"
            autoComplete="off"
            value={creatModal !== true ? age : undefined}
            onChange={onChangeField}
          />
          {validationError.age !== null ? (
            <ValidationErrors>{validationError.age}</ValidationErrors>
          ) : null}
          <Lable htmlFor="phonenumber">Phonenumber</Lable>
          <Input
            id="phonenumber"
            type="tel"
            autoComplete="off"
            value={creatModal !== true ? phonenumber : undefined}
            onChange={onChangeField}
          />
          {validationError.phonenumber !== null ? (
            <ValidationErrors>{validationError.phonenumber}</ValidationErrors>
          ) : null}
          <Submit type="submit" onClick={handleSubmit}>
            Submit
          </Submit>
        </Form>
      </ModalContainer>
    </Backdrop>
  );
};

export const Backdrop = styled.div`
  position: absolute;
  margin: auto;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  z-index: 20;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.45);
  visibility: ${(props) =>
    props.$ismodalopen === "true" ? "visible" : "hidden"};
  pointer-events: ${(props) =>
    props.$ismodalopen === "true" ? "auto" : "none"};
`;

const ModalContainer = styled.div`
  position: absolute;
  width: 420px;
  height: fit-content;
  background-color: rgb(233, 232, 232);
  margin: auto;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  z-index: 40;
  border-radius: 15px;
  visibility: ${(props) =>
    props.$ismodalopen === "true" ? "visible" : "hidden"};
  pointer-events: ${(props) =>
    props.$ismodalopen === "true" ? "auto" : "none"};
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  padding: 30px 20px;
  visibility: ${(props) =>
    props.$ismodalopen === "true" ? "visible" : "hidden"};
`;

const Input = styled.input`
  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  -moz-appearance: textfield;
  background-color: rgb(233, 232, 232);
  border: 2px solid rgba(120, 120, 120, 0.7);
  border-radius: 8px;
  padding: 5px;
  font-family: "Poppins";
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  margin-top: 5px;
`;

const Lable = styled.label`
  text-align: left;
  font-family: "Poppins";
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  margin-top: 15px;
`;

const Submit = styled.button`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 500;
  font-size: 30px;
  background-color: transparent;
  border: 2px solid rgb(67 67 67 / 70%);
  padding: 5px;
  width: 50%;
  margin: 0 auto;
  border-radius: 14px;
  margin-top: 10px;
  transition: background-color 0.3s, color 0.35s;
  &:hover {
    background-color: rgb(129 129 129 / 67%);
    color: rgb(233, 232, 232);
  }
`;

const ValidationErrors = styled.span`
  color: red;
  text-align: left;
  font-family: "Poppins";
  font-style: normal;
  font-weight: 550;
  font-size: 15px;
  margin-top: 4px;
`;
