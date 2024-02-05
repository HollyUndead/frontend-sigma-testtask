import styled from "styled-components";
const emptyList = require("../../img/emptyList.png");

export const ExmptyList = () => {
  return (
    <EmptyDiv>
      <EmptyImg src={emptyList}></EmptyImg>
    </EmptyDiv>
  );
};

const EmptyDiv = styled.div`
  width: 100%;
  height: 100%;
`;

const EmptyImg = styled.img`
  width: 60%;
  height: auto;
`;
