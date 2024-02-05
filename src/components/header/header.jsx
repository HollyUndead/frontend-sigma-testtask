import styled from "styled-components";
import { Searchbar } from "../searchbar/searchbar";
import userLogo from "../../svg/user.svg";
import { useDispatch } from "react-redux";
import { switchModalState } from "../../slicers/modalwindowSlice";

export const Header = () => {
  const dispatch = useDispatch();
  const handleClick = (ev) => {
    dispatch(switchModalState(true));
  };
  return (
    <HeaderContainer>
      <HeaderWraper>
        <LogoWraper>
          <Logo src={userLogo}></Logo>
        </LogoWraper>
        <Searchbar></Searchbar>
        <CreateButton onClick={handleClick}>Create user</CreateButton>
      </HeaderWraper>
    </HeaderContainer>
  );
};

const HeaderContainer = styled.div`
  position: sticky;
  display: flex;
  justify-content: center;
  top: 0;
  left: 0;
  height: 90px;
  width: calc(100% - 40px);
  background-color: rgb(72 72 219);
  padding: 0 20px;
  z-index: 10;
`;

const HeaderWraper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 1320px;
`;

const Logo = styled.img`
  margin-top: 3px;
  width: 50px;
  height: 50px;
`;

const LogoWraper = styled.div`
  width: 60px;
  height: 60px;
  background-color: rgb(233, 232, 232);
  border: 0px;
  border-radius: 50%;
`;

const CreateButton = styled.button`
  width: 60px;
  height: 60px;
  background-color: transparent;
  color: rgb(247 247 247);
  border: 1px solid;
  border-radius: 20px;
`;
