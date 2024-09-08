import React, { useEffect, useState } from "react";
import UsersList from "../usersList/UsersList";
import SearchBar from "../searchBar/SearchBar";
import { Wrapper } from "./Main.styled";

const Main = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [users, setUsers] = useState([]);

  //в параметры передаем резултат поиска из апи и обновляем состояние
  function showFoundUsers(searchResult) {
    setUsers(searchResult.items);
  }
  console.log(users);
  return (
    <Wrapper>
      <SearchBar searchResult={showFoundUsers} setIsLoading={setIsLoading} />
      <UsersList users={users} isLoading={isLoading} />
    </Wrapper>
  );
};

export default Main;
