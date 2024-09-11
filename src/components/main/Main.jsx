import React, { useState } from "react";
import UsersList from "../usersList/UsersList";
import SearchBar from "../searchBar/SearchBar";
import { Wrapper } from "./Main.styled";

const Main = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [users, setUsers] = useState([]);
  const [sortOrder, setSortOrder] = useState("asc"); // Состояние для хранения типа сортировки

  //в параметры передаем резултат поиска из апи и обновляем состояние
  function showFoundUsers(searchResult) {
    setUsers(searchResult.items);
  }

  return (
    <Wrapper>
      <SearchBar
        searchResult={showFoundUsers}
        setIsLoading={setIsLoading}
        setSortOrder={setSortOrder}
      />
      <UsersList users={users} isLoading={isLoading} sortOrder={sortOrder} />
    </Wrapper>
  );
};

export default Main;
