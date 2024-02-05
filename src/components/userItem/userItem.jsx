import styled from "styled-components";
import pen from "../../svg/pen.svg";
import trashcan from "../../svg/trash-can.svg";

export const UserItem = ({ ...props }) => {
  const { firstname, lastname, age, phonenumber, id, handleCick } = props;

  return (
    <Item id={id} onClick={handleCick}>
      <Name>Name: {firstname}</Name>
      <Name> {lastname}</Name>
      <Age>Age: {age}</Age>
      <Phonenumber>Phonenumber: {phonenumber}</Phonenumber>
      <ButtonRedact className="svg-button edit">
        <Svg className="svg-button edit">
          <use className="svg-button edit" href={`${pen}#pen`} />
        </Svg>
      </ButtonRedact>
      <ButtonDelete className="svg-button delete">
        <Svg className="svg-button delete">
          <use className="svg-button delete" href={`${trashcan}#trashcan`} />
        </Svg>
      </ButtonDelete>
    </Item>
  );
};

const Item = styled.li`
  text-align: left;
  padding: 10px;
  padding-left: 20px;
  width: 270px;
  height: 100px;
  outline: 1px solid rgb(168 168 168);
  background-color: transparent;

  border-radius: 10px;
  transition: background 0.7s, color 0.5s;
  transition: ;
  &:hover {
    background-color: rgb(77, 121, 255);
    color: rgb(247 247 247);
  }
`;

const Name = styled.span`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
`;

const Age = styled.p`
  margin-top: 8px;
  font-family: "Poppins";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
`;

const Phonenumber = styled.p`
  margin-top: 8px;
  font-family: "Poppins";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
`;

const ButtonRedact = styled.button`
  width: 25px;
  height: 25px;
  position: relative;
  bottom: 82px;
  left: 245px;
  border: 0px solid transparent;
  background-color: transparent;
  padding: 0;
`;

const Svg = styled.svg`
  width: 25px;
  height: 25px;
  fill: black;
  color: black;
`;

const ButtonDelete = styled.button`
  width: 25px;
  height: 25px;
  position: relative;
  bottom: 5px;
  left: 220px;
  border: 0px solid transparent;
  background-color: transparent;
  padding: 0;
`;
