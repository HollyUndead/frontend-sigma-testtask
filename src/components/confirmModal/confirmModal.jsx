import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { switchCondirmModalState } from "../../slicers/condirmModalSlice";
import { useEffect } from "react";
import { deleteUser } from "../../redux/thunk";
import { reset } from "../../slicers/userSlice";

export const ConfirmModal = () => {
  const isOpen = useSelector((state) => state.condirmModal.isOpen);
  const { firstname, lastname, id } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  useEffect(() => {
    document.getElementById("backdropC").addEventListener("mousedown", (ev) => {
      // eslint-disable-next-line
      switch (ev.target.id) {
        case "backdropC":
          dispatch(switchCondirmModalState());
          dispatch(reset());

          break;
        case "NO":
          dispatch(switchCondirmModalState());
          dispatch(reset());
          break;
      }
    });
  }, [dispatch]);

  const deleteUserY = () => {
    dispatch(deleteUser(id));
    dispatch(switchCondirmModalState());
    dispatch(reset());
  };

  return (
    <BackdropC id="backdropC" $isOpen={isOpen}>
      <DivWrapC $isOpen={isOpen}>
        <Message>
          Delete user {firstname} {lastname}?
        </Message>
        <ButtonWrap>
          <ButtonYes id="YES" onClick={deleteUserY}>
            Yes
          </ButtonYes>
          <ButtonNo id="NO">No</ButtonNo>
        </ButtonWrap>
      </DivWrapC>
    </BackdropC>
  );
};

export const BackdropC = styled.div`
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
  visibility: ${(props) => (props.$isOpen ? "visible" : "hidden")};
  pointer-events: ${(props) => (props.$isOpen ? "auto" : "none")};
`;

const DivWrapC = styled.div`
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
  padding-bottom: 20px;
  visibility: ${(props) => (props.$isOpen ? "visible" : "hidden")};
  pointer-events: ${(props) => (props.$isOpen ? "auto" : "none")};
`;

const Message = styled.h3`
  font-family: "Poppins";
  font-style: normal;
  font-size: 30px;
`;

const ButtonWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

const ButtonYes = styled.button`
  border: 0;
  background-color: red;
  width: 70px;
  height: 40px;
  font-family: "Poppins";
  font-style: normal;
  font-size: 30px;
  color: white;
`;

const ButtonNo = styled.button`
  border: 0;
  background-color: green;
  width: 70px;
  height: 40px;
  font-family: "Poppins";
  font-style: normal;
  font-size: 30px;
  color: white;
`;
