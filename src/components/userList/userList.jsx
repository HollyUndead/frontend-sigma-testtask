import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchUsers } from "../../redux/thunk";
import { UserItem } from "../userItem/userItem";
import styled from "styled-components";
import { ModalWindow } from "../modalWindow/modalWindow";
import { switchModalState } from "../../slicers/modalwindowSlice";
import { getUserFromArr } from "../../slicers/userSlice";
import { ExmptyList } from "../epmtyList/emptyList";
import { MagnifyingGlass } from "react-loader-spinner";
import { ConfirmModal } from "../confirmModal/confirmModal";
import { switchCondirmModalState } from "../../slicers/condirmModalSlice";

export function UserList() {
  const userList = useSelector((state) => state.userlist.userlist);
  const search = useSelector((state) => state.search);
  const loader = useSelector((state) => state.userlist.isLoading);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);
  const handleCick = (ev) => {
    if (ev.target.className.baseVal !== undefined) {
      if (ev.target.className.baseVal.includes("svg-button edit")) {
        dispatch(getUserFromArr({ id: ev.currentTarget.id, userList }));
        dispatch(switchModalState(false));
      }
      if (ev.target.className.baseVal.includes("svg-button delete")) {
        dispatch(getUserFromArr({ id: ev.currentTarget.id, userList }));
        dispatch(switchCondirmModalState());
      }
    }
  };
  // eslint-disable-next-line
  const sortedList = userList.filter((el) => {
    if (search.searchString !== "") {
      if (el[search.searchField].includes(search.searchString) === true) {
        return el;
      }
    } else {
      return el;
    }
  });

  return (
    <Wreper>
      <ModalWindow />
      <ConfirmModal />
      {loader ? (
        <MagnifyingGlass
          visible={true}
          height="20%"
          width="20%"
          ariaLabel="magnifying-glass-loading"
          wrapperStyle={{}}
          wrapperClass="magnifying-glass-wrapper"
          glassColor="#c0efff"
          color="#e15b64"
        />
      ) : (
        <List>
          {sortedList[0] !== undefined ? (
            sortedList.map((el, index) => {
              return (
                <UserItem
                  firstname={el.firstname}
                  lastname={el.lastname}
                  age={el.age}
                  phonenumber={el.phonenumber}
                  id={el.id}
                  handleCick={handleCick}
                  key={index}
                />
              );
            })
          ) : (
            <ExmptyList />
          )}
        </List>
      )}
    </Wreper>
  );
}

const Wreper = styled.div`
  max-width: 1320px;
  margin: 0 auto;
`;

const List = styled.ul`
  list-style-type: none;
  display: flex;
  flex-wrap: wrap;
  align-content: center;
  justify-content: flex-start;
  align-items: center;
  padding: 25px;
  gap: 15px;
`;
